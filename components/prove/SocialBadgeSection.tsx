import Image from 'next/image';
import Link from 'next/link';
import Layout from '../common/Layout';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';
import NavButtonGroup from '../../components/prove/NavButtonGroup';
import TweetButton from '../../components/prove/TweetButton';
import TransparentButton from '../../components/common/TransparentButton';
import ArrowIcon from '../../public/assets/prove/arrow-icon.png';
import TwitterCard from '../../public/assets/prove/twitter-card.png';

import MadeOnMinaLogo from '../../public/assets/prove/made-on-mina-logo.png';

import TopStamp from '../../public/assets/prove/prove-stamp.png';
import { useState, useLayoutEffect, useRef } from 'react';

const SocialBadgeSection = () => {
  const yPosition = useRef(null);

  const [activeButton, setActiveButton] = useState<string>('socialBadge');
  useLayoutEffect(() => {
    const onScroll = () => {
      if (!yPosition.current) return;

      console.log('scroll position', window.scrollY);
      if (window.scrollY < 200) {
        setActiveButton('socialBadge');
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Layout
      backGroundColor="grayGradient"
      layoutStyle="h-1.25*screen relative "
    >
      <div ref={yPosition}>
        <div className="" id="social"></div>
        <Header />
        <div className=" 3xl:w-7/12 absolute top-0  right-0 w-6/12 2xl:w-7/12">
          <Image src={TopStamp} alt="Stamp" />
        </div>

        <div className="3xl:space-y-4 3xl:mt-10   flex flex-col items-center">
          <div className="3xl:w-4/12 relative flex flex-col items-center justify-center">
            <p className="text-1.5xl 2xl:text-3.5xl  3xl:text-4xl 3xl:mb-8 mb-3 2xl:mb-5">
              Your zk-proof has been submitted to Mina’s chain.
            </p>
            <a target="_blank" href={'https://minaexplorer.com/'}>
              <div className="flex items-center">
                <div className="w-3">
                  <Image src={ArrowIcon} alt="arrow icon" />
                </div>
                <TransparentButton
                  label="VIEW PROOF ON MINA EXPLORER"
                  buttonStyle="text-xs 2xl:tracking-normal 3xl:text-xl text-[#C4C4C4]"
                />
              </div>
            </a>

            <div className="">
              <div className="3xl:w-full ml-90 3xl:ml-0 flex w-3/12 2xl:ml-56 2xl:w-1/2 ">
                <Image src={TwitterCard} alt="twitter card" />
              </div>
              <NavButtonGroup
                activeButton={activeButton}
                setActiveButton={setActiveButton}
              />
            </div>
            <div className="3xl:w-4/12 3xl:mb-14 mb-5 w-2/12 2xl:mb-14 2xl:w-3/12">
              <a target="_blank" href="https://www.twitter.com/">
                <TweetButton label="TWEET IT" buttonStyle="w-full " />
              </a>
            </div>
            <Link href={'/start'}>
              <p className="text-sm text-[#00FF19]">PROVE MORE PROFITS</p>
            </Link>
          </div>
        </div>

        <div className="3xl:h-1/4  absolute bottom-0 h-2/6   w-full bg-[#79797940]  2xl:h-1/4">
          <div className="3xl:space-y-10 flex h-full   flex-col items-center justify-center space-y-4  2xl:space-y-9 ">
            <div className=" 3xl:w-auto w-  w-20 xl:w-24 2xl:w-24">
              <Image src={MadeOnMinaLogo} alt="mina logo" />
            </div>
            <p className="2xl:text-1.5xl 3xl:text-3xl text-base tracking-wider">
              zero-knowledge proof-powered dApps
            </p>
            <a target="_blank" href="https://docs.minaprotocol.com/en/snapps">
              <Button
                label="LEARN MORE"
                buttonStyle="w-36 w  2xl:w-48  3xl:w-52 text-xs 2xl:text-base 3xl:text-base"
                secondary={true}
              />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SocialBadgeSection;
