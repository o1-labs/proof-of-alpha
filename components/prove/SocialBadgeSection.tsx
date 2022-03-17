import Image from 'next/image';
import Link from 'next/link';
import Layout from '../common/Layout';
import Header from '../../components/common/Header';
import NavButtonGroup from '../../components/prove/NavButtonGroup';
import ProveFooter from './ProveFooter';
import TweetButton from '../../components/prove/TweetButton';
import TransparentButton from '../../components/common/TransparentButton';
import ArrowIcon from '../../public/assets/prove/arrow-icon.svg';
import TwitterCardProof from './TwitterCardProof';
import TopStamp from '../../public/assets/prove/prove-stamp.png';
import { useState, useRef, useEffect } from 'react';
import { BASE_URL } from '../../utils';

const SocialBadgeSection = () => {
  const yPosition = useRef(null);
  const [activeButton, setActiveButton] = useState<string>('socialBadge');

  useEffect(() => {
    const onScroll = () => {
      if (!yPosition.current) return;

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
      layoutStyle="min-h-fit 3xl:pb-[450px] pb-[400px] relative  "
    >
      <div ref={yPosition}>
        <div className="" id="social"></div>
        <Header />
        <div className=" absolute top-0 right-0  w-6/12 2xl:w-7/12 3xl:w-7/12">
          <Image src={TopStamp} alt="Stamp" />
        </div>

        <div className="flex flex-col   items-center 3xl:mt-10 3xl:space-y-4">
          <div className="relative flex flex-col items-center justify-center 3xl:w-4/12">
            <p className="mb-3 text-1.5xl  2xl:mb-5 2xl:text-3.5xl 3xl:mb-8 3xl:text-4xl">
              Your zk-proof has been submitted to Mina’s chain.
            </p>
            <a target="_blank" href={'https://minaexplorer.com/'}>
              <div className="flex items-center">
                <div className="w-3">
                  <Image src={ArrowIcon} alt="arrow icon" />
                </div>
                <TransparentButton
                  label="VIEW PROOF ON MINA EXPLORER"
                  buttonStyle="text-xs 2xl:tracking-normal 3xl:text-xl text-[#C4C4C4] hover:underline"
                />
              </div>
            </a>

            <div className="">
              <div className="ml-[185px] flex w-6/12 lg:ml-[225px] 2xl:ml-56 2xl:w-1/2 3xl:ml-0 3xl:w-full ">
                <TwitterCardProof />
              </div>
              <NavButtonGroup
                activeButton={activeButton}
                setActiveButton={setActiveButton}
              />
            </div>
            <div className="mb-8 w-[180px] lg:w-[210px] 2xl:mb-14 2xl:w-3/12 3xl:mb-14 3xl:w-4/12">
              <a
                target="_blank"
                href={`https://twitter.com/intent/tweet?url=${BASE_URL}/prove/shared`}
              >
                <TweetButton label="TWEET IT" buttonStyle="w-full " />
              </a>
            </div>
            <Link href={'/start'} passHref>
              <p className="cursor-pointer  text-sm text-[#00FF19] hover:underline">
                PROVE MORE PROFITS
              </p>
            </Link>
          </div>
        </div>

        <ProveFooter />
      </div>
    </Layout>
  );
};

export default SocialBadgeSection;
