import Image from "next/legacy/image";
import Link from 'next/link';
import Layout from '../common/Layout';
import Header from '../common/Header';
import NavButtonGroup from './NavButtonGroup';
import ResultFooter from './ResultFooter';
import TweetButton from './TweetButton';
import TransparentButton from '../common/TransparentButton';
import TwitterCardProof from './TwitterCardProof';
import ArrowIcon from '../../public/assets/common/arrow-icon.svg';
import TopStamp from '../../public/assets/common/prove-stamp.png';
import { useState, useRef, useEffect } from 'react';
import { BASE_URL } from '../../utils';

interface socialBadgeSectionPropTypes {
  txid: string | string[];
}

const SocialBadgeSection = ({ txid }: socialBadgeSectionPropTypes) => {
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
      layoutStyle="min-container min-h-fit 3xl:pb-[450px] pb-[400px] relative"
    >
      <div ref={yPosition}>
        <div className="" id="social"></div>
        <Header />
        <div className=" absolute top-0 right-0  w-6/12 2xl:w-7/12 3xl:w-7/12">
          <Image src={TopStamp} alt="Stamp" />
        </div>

        <div className="flex flex-col   items-center 3xl:mt-10 3xl:space-y-4">
          <div className="relative flex flex-col items-center justify-center 3xl:w-4/12">
            <p className="mb-3 text-xl  2xl:mb-5 2xl:text-3.5xl 3xl:mb-8 3xl:text-4xl">
              Your zk-proof has been submitted to Mina’s chain.
            </p>
            <a
              target="_blank"
              href={`https://berkeley.minaexplorer.com/transaction/${txid}`}
            >
              <div className="flex items-center space-x-1 2xl:space-x-0">
                <div className="w-3">
                  <Image src={ArrowIcon} alt="arrow icon" />
                </div>
                <TransparentButton
                  label="VIEW PROOF ON MINA EXPLORER"
                  buttonStyle="text-xs 2xl:tracking-normal 2xl:text-xl text-[#C4C4C4] hover:underline"
                />
              </div>
            </a>

            <div className="w-6/12 lg:w-5/12 xl:w-4/12  2xl:w-6/12  3xl:w-full ">
              <TwitterCardProof />
            </div>
            <NavButtonGroup
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            />

            <div className="mb-8 w-[180px] lg:w-[210px] 2xl:mb-14 2xl:w-2/12 3xl:mb-14 3xl:w-4/12">
              <a
                target="_blank"
                href={`https://twitter.com/intent/tweet?url=${BASE_URL}/statement/${txid}`}
              >
                <TweetButton label="TWEET IT" buttonStyle=" w-full" />
              </a>
            </div>
            <Link href={'/get-started'} passHref>
              <p className="cursor-pointer  text-sm text-[#00FF19] hover:underline">
                PROVE MORE PROFITS
              </p>
            </Link>
          </div>
        </div>

        <ResultFooter />
      </div>
    </Layout>
  );
};

export default SocialBadgeSection;
