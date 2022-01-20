import Link from 'next/link';
import Image from 'next/image';
import type { NextPage } from 'next';
import Indicator from '../../components/home/Indicator';
import Button from '../../components/common/Button';
import LeftArrow from '../../public/assets/common/left-arrow.png';
import Stamp from '../../public/assets/common/stamp.png';

const Data: NextPage = () => {
  return (
    <div
      className="flex min-h-screen bg-red-background bg-cover bg-no-repeat text-white "
      id="exchange"
    >
      <div className="flex  items-center  mt-[88px] h-4/5 md:w-auto md:h-2/3 md:mt-64 md:ml-44  md:space-x-24 ">
        <div className="flex items-center  w-14 md:w-40 md:h-40  mb-12 md:mb-28 relative">
          <Link href={'/learn'}>
            <Image src={LeftArrow} alt="Right Arrow" />
          </Link>
        </div>

        <div className="flex-col w-[275px] md:w-115 md:space-y-11">
          <div className="md:mb-32">
            <p className="text-xl md:text-6xl text-center md:text-left mb-8">
              Your Data Stays Private
            </p>

            <p className="text-base md:text-4xl leading-loose md:leading-11 mb-5">
              We area a team of engineers, cryptographers and crypto traders
            </p>
            <p className="text-base md:text-4xl leading-loose md:leading-11">
              We use zero-knowledge proofs to ensure the privacy of your data
            </p>
            <p className="text-base md:text-4xl leading-loose md:leading-11 my-4">
              Wether your account is anon or KYC'ed, your data will stay
              private.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-9 md:space-y-0 mt-24 md:mt-24">
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
        <div className="hidden  md:block  absolute  right-0">
          <Image src={Stamp} alt="Stamp" />
        </div>
      </div>
    </div>
  );
};

export default Data;
