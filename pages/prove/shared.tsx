import Image from 'next/image';
import Link from 'next/link';
import Button from '../../components/common/Button';

import ZKLogo from '../../public/assets/common/zk-logo.png';

import ProofOfAlphaStatment from '../../public/assets/prove/proof-of-alpha-statement-prove.png';
import ShieldIcon from '../../public/assets/prove/shield-icon.png';
import ArrowIcon from '../../public/assets/prove/arrow-icon.png';
import TransparentButton from '../../components/common/TransparentButton';

import MinaPrimary from '../../public/assets/prove/mina-icon-primary.png';

import TopStamp from '../../public/assets/prove/prove-stamp.png';
import ProofOfAlphaStatement from '../../components/prove/ProofOfAlphaStatement';

const SocialBadgeSection = () => {
  return (
    <div className="bg-prove-share-background min-h-screen bg-cover bg-no-repeat text-white">
      <div className=" 3xl:-top-56 3xl:w-5/12 absolute -top-36 right-0  w-7/12 2xl:-top-52 2xl:w-6/12">
        <Image src={TopStamp} alt="Stamp" />
      </div>

      <div className="ml-110 flex">
        <div className="flex flex-col items-center ">
          <div className="pt-4 md:w-20 2xl:w-20">
            <Image src={ZKLogo} alt="zk logo" />
          </div>
          <div className="3xl:w-8/12 flex w-5/12 flex-col items-center justify-center 2xl:-mt-8 2xl:w-[570px]">
            <ProofOfAlphaStatement />
          </div>
        </div>

        <div className="3xl:mt-86 mt-64 w-3/12">
          <div className="3xl:mb-28 flex flex-col items-center 2xl:mb-20">
            <p className="3xl:text-lg tracking-wide 2xl:text-base">
              GET YOUR FREE PROOF OF
            </p>
            <p className="3xl:text-lg 3xl:mb-6  2xl:mb-5 2xl:text-base">
              ALPHA STATMENT
            </p>
            <Link href={'/prove/next'}>
              <Button
                label="GET IT NOW"
                buttonStyle="text-xs w-5/12 2xl:w-5/12"
              />
            </Link>
          </div>
          <div className="3xl:space-y-3 flex flex-col items-center 2xl:space-y-1 ">
            <div className="2xl:w-10">
              <Image src={ShieldIcon} alt="shield icon" />
            </div>
            <p className="3xl:text-lg font-extrabold 2xl:text-base">
              How do you know this proof is valid?
            </p>
            <p className="3xl:text-base 2xl:text-sm">
              Transactions that are accepted by the Mina
            </p>
            <p className="3xl:text-base 2xl:text-sm">
              blockchain are considered valid.
            </p>
            <a target="_blank" href={'https://minaexplorer.com/'}>
              <div className="flex items-center">
                <div className="3xl:w-3 2xl:w-2">
                  <Image src={ArrowIcon} alt="arrow icon" />
                </div>
                <TransparentButton
                  label="VIEW PROOF ON MINA EXPLORER"
                  buttonStyle="text-[10px]  2xl:tracking-normal text-base 3xl:text-xs"
                />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="3xl:h-[400px] absolute bottom-0 h-[170px] w-full  bg-[#79797940] 2xl:h-[300px]">
        <div className="flex flex-col  items-center  ">
          <div className="3xl:w-3/12 3xl:space-y-10  flex w-4/12 flex-col items-center justify-center space-y-4 2xl:w-3/12 2xl:space-y-6 ">
            <div className=" 3xl:w-auto 3xl:mt-18 mt-5  w-14 2xl:mt-12 2xl:w-14">
              <Image src={MinaPrimary} alt="mina logo" />
              <p className="3xl:text-xs text-[7px] text-[#FF603B] 2xl:pl-1">
                MADE ON MINA
              </p>
            </div>
            <p className="3xl:text-3xl text-base tracking-wider 2xl:text-xl">
              zero-knowledge proof-powered dApps
            </p>
            <a target="_blank" href="https://docs.minaprotocol.com/en/snapps">
              <Button
                label="LEARN MORE"
                buttonStyle=" w-[160px] 2xl:w-[185px] 3xl:w-[210px] text-xs 2xl:text-base 3xl:text-base"
                secondary={true}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialBadgeSection;
