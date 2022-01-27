import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';
import NavButtonGroup from '../../components/prove/NavButtonGroup';
import TweetButton from '../../components/prove/TweetButton';
import TransparentButton from '../../components/common/TransparentButton';
import ArrowIcon from '../../public/assets/prove/arrow-icon.png';
import TwitterCard from '../../public/assets/prove/twitter-card.png';
import TwitterLogo from '../../public/assets/prove/twitter-logo.png';
import MadeOnMinaLogo from '../../public/assets/prove/made-on-mina-logo.png';
import ProofOfTradeStatment from '../../public/assets/prove/proof-of-trade-statement.png';
import TopStamp from '../../public/assets/prove/prove-stamp.png';
// mina orange FF603B
const Prove: NextPage = () => {
  return (
    <div className="min-h-screen bg-prove-background bg-cover bg-no-repeat text-white">
      <div className="-mt-4" id="social"></div>
      <Header />
      <div className=" absolute top-0 right-0  w-6/12 2xl:w-7/12 3xl:w-7/12">
        <Image src={TopStamp} alt="Stamp" />
      </div>

      <div className="flex flex-col items-center  3xl:space-y-4 3xl:mt-10">
        <div className="relative flex flex-col items-center 3xl:w-4/12 justify-center">
          <p className="text-1.5xl 2xl:text-3.5xl 3xl:text-4xl mb-3 2xl:mb-5 3xl:mb-8">
            Your zk-proof has been submitted to Mina’s chain.
          </p>
          <a target="_blank" href={'https://minaexplorer.com/'}>
            <div className="flex items-center">
              <Image src={ArrowIcon} alt="arrow icon" />
              <TransparentButton
                label="VIEW PROOF IN MINA EXPLORER"
                buttonStyle="text-xs 3xl:text-xl"
              />
            </div>
          </a>

          <div className="">
            <div className="flex w-3/12 2xl:w-1/2 3xl:w-full ml-90 2xl:ml-56 3xl:ml-0 ">
              <Image src={TwitterCard} alt="twitter card" />
            </div>
            <NavButtonGroup />
          </div>
          <div className="w-2/12 2xl:w-3/12 mb-5 2xl:mb-14 3xl:w-3/12 3xl:mb-14">
            <a target="_blank" href="https://www.twitter.com/">
              <TweetButton label="TWEET IT" buttonStyle="w-full " />
            </a>
          </div>

          <p className="text-[#00FF19] text-sm">PROVE MORE PROFITS</p>
        </div>
      </div>

      <div className="absolute bg-[#79797940] h-[170px] 2xl:h-2/6  w-full bottom-0">
        <div className="flex flex-col  items-center  ">
          <div className="flex flex-col  items-center w-4/12 2xl:w-3/12 3xl:w-3/12 justify-center space-y-4 2xl:space-y-9 3xl:space-y-10 ">
            <div className=" w-14 2xl:w-28 3xl:w-auto  mt-5 2xl:mt-18 3xl:mt-32">
              <Image src={MadeOnMinaLogo} alt="mina logo" />
            </div>
            <p className="text-base tracking-wider 2xl:text-1.5xl 3xl:text-3xl">
              zero-knowledge proof-powered dApps
            </p>
            <a target="_blank" href="https://docs.minaprotocol.com/en/snapps">
              <Button
                label="LEARN MORE"
                buttonStyle="bg-[#FFFFFF1A] w-[160px] 2xl:w-[210px] 3xl:w-[210px] text-xs 2xl:text-base 3xl:text-base"
              />
            </a>
          </div>
        </div>
      </div>

      {/* <div>
        <Image src={ProofOfTradeStatment} alt="proof of trade statement" />
        <Button label="SHARE IT" />

        <p>HOW WILL IT LOOK?</p>
      </div> */}
      <div className="-mb-10"></div>
    </div>
  );
};

export default Prove;
