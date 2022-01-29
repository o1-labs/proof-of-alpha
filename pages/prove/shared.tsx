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

const SocialBadgeSection = () => {
  return (
    <div className="min-h-screen bg-prove-share-background bg-cover bg-no-repeat text-white">
      <div className=" absolute -top-36 2xl:-top-52 3xl:-top-56 right-0  w-7/12 2xl:w-6/12 3xl:w-5/12">
        <Image src={TopStamp} alt="Stamp" />
      </div>

      <div className="flex ml-110">
        <div className="flex flex-col items-center ">
          <div className="md:w-20 2xl:w-20 pt-4">
            <Image src={ZKLogo} alt="zk logo" />
          </div>
          <div className="flex flex-col items-center w-5/12 2xl:w-[570px] 3xl:w-8/12 justify-center 2xl:-mt-8">
            <Image src={ProofOfAlphaStatment} alt="proof of alpha statement" />
          </div>
        </div>

        <div className="w-3/12 mt-64 3xl:mt-86">
          <div className="flex flex-col items-center 2xl:mb-20 3xl:mb-28">
            <p className="2xl:text-base 3xl:text-lg tracking-wide">
              GET YOUR FREE PROOF OF
            </p>
            <p className="2xl:text-base 3xl:text-lg  2xl:mb-5 3xl:mb-6">
              ALPHA STATMENT
            </p>
            <Link href={'/prove/next'}>
              <Button
                label="GET IT NOW"
                buttonStyle="text-xs w-5/12 2xl:w-5/12"
              />
            </Link>
          </div>
          <div className="flex flex-col items-center 2xl:space-y-1 3xl:space-y-3 ">
            <div className="2xl:w-10">
              <Image src={ShieldIcon} alt="shield icon" />
            </div>
            <p className="2xl:text-base 3xl:text-lg font-extrabold">
              How do you know this proof is valid?
            </p>
            <p className="2xl:text-sm 3xl:text-base">
              Transactions that are accepted by the Mina
            </p>
            <p className="2xl:text-sm 3xl:text-base">
              blockchain are considered valid.
            </p>
            <a target="_blank" href={'https://minaexplorer.com/'}>
              <div className="flex items-center">
                <div className="2xl:w-2 3xl:w-3">
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

      <div className="absolute bg-[#79797940] h-[170px] 2xl:h-[300px] 3xl:h-[400px]  w-full bottom-0">
        <div className="flex flex-col  items-center  ">
          <div className="flex flex-col  items-center w-4/12 2xl:w-3/12 3xl:w-3/12 justify-center space-y-4 2xl:space-y-6 3xl:space-y-10 ">
            <div className=" w-14 2xl:w-14 3xl:w-auto  mt-5 2xl:mt-12 3xl:mt-18">
              <Image src={MinaPrimary} alt="mina logo" />
              <p className="text-[#FF603B] text-[7px] 3xl:text-xs 2xl:pl-1">
                MADE ON MINA
              </p>
            </div>
            <p className="text-base tracking-wider 2xl:text-xl 3xl:text-3xl">
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
