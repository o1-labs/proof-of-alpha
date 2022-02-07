import Link from 'next/link';
import Image from 'next/image';
import type { NextPage } from 'next';
import Indicator from '../../components/home/Indicator';
import Button from '../../components/common/Button';
import LeftArrow from '../../public/assets/common/left-arrow.png';
import RightStamp from '../../public/assets/home/stamp-right.png';

const Data: NextPage = () => {
  return (
    <div
      className="bg-red-background flex min-h-screen bg-cover bg-no-repeat text-white "
      id="exchange"
    >
      <div className="mt-[88px]  flex  h-4/5 items-center md:mt-64 md:ml-44 md:h-2/3 md:w-auto  md:space-x-24 ">
        <div className="relative mb-12  flex w-14 items-center  md:mb-28 md:h-40 md:w-40">
          <Link href={'/learn'}>
            <Image
              className="fliter hover:invert-[.35]"
              src={LeftArrow}
              alt="Right Arrow"
            />
          </Link>
        </div>

        <div className="md:w-115 w-[275px] flex-col md:space-y-11">
          <div className="md:mb-32">
            <p className="mb-8 text-center text-xl md:text-left md:text-6xl">
              Your Data Stays Private
            </p>

            <p className="md:leading-11 mb-5 text-base leading-loose md:text-4xl">
              We are a team of engineers, cryptographers, and crypto traders.
            </p>
            <p className="md:leading-11 text-base leading-loose md:text-4xl">
              We use zero-knowledge proofs to ensure the privacy of your data.
            </p>
            <p className="md:leading-11 my-4 text-base leading-loose md:text-4xl">
              Whether your account is anon or KYC'ed, your data will stay
              private.
            </p>
            <div className="mt-24 flex flex-col items-center justify-center space-y-9 md:mt-24 md:flex-row md:justify-between md:space-y-0">
              <Link href={'/start'} passHref>
                <Button
                  buttonStyle="px-20 w-4/5 md:w-1/3 text-base md:text-2xl "
                  label="GET STARTED"
                />
              </Link>

              <Indicator page="third" />
            </div>
          </div>
        </div>
        <div className="absolute  right-0  hidden  md:block">
          <Image src={RightStamp} alt="Stamp" />
        </div>
      </div>
    </div>
  );
};

export default Data;
