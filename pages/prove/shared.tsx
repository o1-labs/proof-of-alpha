import Image from 'next/image';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

import ZKLogo from '../../public/assets/common/zk-logo.png';

import ProofOfAlphaStatment from '../../public/assets/prove/proof-of-alpha-statement-prove.png';
import TransparentButton from '../../components/common/TransparentButton';

import MinaPrimary from '../../public/assets/prove/mina-icon-primary.png';

import TopStamp from '../../public/assets/prove/prove-stamp.png';

const SocialBadgeSection = () => {
  return (
    <div className="min-h-screen bg-prove-share-background bg-cover bg-no-repeat text-white">
      <header className="">
        <div className="flex justify-center items-center md:py-5 2xl:py-1 relative ">
          <div className="md:w-20 2xl:w-28">
            <Image src={ZKLogo} alt="zk logo" />
          </div>
        </div>
      </header>
      <div className=" absolute -top-56 right-0  w-6/12 2xl:w-7/12 3xl:w-5/12">
        <Image src={TopStamp} alt="Stamp" />
      </div>

      <div className="flex flex-col items-center  3xl:m">
        <div className="flex flex-col items-center 3xl:w-3/12 justify-center">
          <Image src={ProofOfAlphaStatment} alt="proof of trade statement" />
        </div>
      </div>

      <div className="absolute bg-[#79797940] h-[170px] 2xl:h-2/6  w-full bottom-0">
        <div className="flex flex-col  items-center  ">
          <div className="flex flex-col  items-center w-4/12 2xl:w-3/12 3xl:w-3/12 justify-center space-y-4 2xl:space-y-9 3xl:space-y-10 ">
            <div className=" w-14 2xl:w-28 3xl:w-auto  mt-5 2xl:mt-18 3xl:mt-32">
              <Image src={MinaPrimary} alt="mina logo" />
              <p className="text-[#FF603B] text-xs">MADE ON MINA</p>
            </div>
            <p className="text-base tracking-wider 2xl:text-1.5xl 3xl:text-3xl">
              zero-knowledge proof-powered dApps
            </p>
            <a target="_blank" href="https://docs.minaprotocol.com/en/snapps">
              <Button
                label="LEARN MORE"
                buttonStyle=" w-[160px] 2xl:w-[210px] 3xl:w-[210px] text-xs 2xl:text-base 3xl:text-base"
                primary={false}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialBadgeSection;
