import Link from 'next/link';
import Image from 'next/image';
import type { NextPage } from 'next';
import Button from '../../components/common/Button';
import LeftArrow from '../../public/assets/common/left-arrow.png';

const Data: NextPage = () => {
  return (
    <div
      className="flex min-h-screen bg-red-background bg-cover bg-no-repeat "
      id="exchange"
    >
      <div className="flex h-2/3 mt-64 ml-44 items-center space-x-24">
        <Link href={'/learn'}>
          <div className="w-52 h-52  relative">
            <Image src={LeftArrow} alt="Right Arrow" />
          </div>
        </Link>
        <div className="flex-col w-115 space-y-11">
          <p className="text-6xl leading-snug   text-white">
            Your Data Stays Private
          </p>

          <p className="text-4xl leading-11  text-white">
            We area a team of engineers, cryptographers and crypto traders
          </p>
          <p className="text-4xl leading-11  text-white">
            We use zero-knowledge proofs to ensure the privacy of your data
          </p>
          <p className="text-4xl leading-11  text-white">
            Wether your account is anon or KYC'ed, your data will stay private.
          </p>
          <div className="flex items-center ">
            <div className="w-1/2">
              <Link href={'/start'} passHref>
                <Button buttonStyle="px-12" label="GET STARTED" />
              </Link>
            </div>
            <div className="flex w-1/2">
              <div className="mx-6">
                <div className=" bg-custom-gray-indicator-dot w-4 h-4 rounded-full"></div>
              </div>
              <div className="mx-6">
                <div className="bg-custom-gray-indicator-dot  w-4 h-4 rounded-full"></div>
              </div>
              <div className="mx-6">
                <div className=" bg-white  w-4 h-4 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
