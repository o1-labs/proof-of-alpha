import Link from 'next/link';
import Image from 'next/image';
import type { NextPage } from 'next';
import Button from '../../components/common/Button';
import Indicator from '../../components/home/Indicator';
import RightArrow from '../../public/assets/common/right-arrow.png';
import LeftArrow from '../../public/assets/common/left-arrow.png';

const Learn: NextPage = () => {
  return (
    <div
      className="flex min-h-screen bg-red-background bg-cover bg-no-repeat text-white"
      id="exchange"
    >
      <div className="flex  items-center  mt-[88px] h-4/5 md:w-auto md:h-2/3 md:mt-64 md:ml-44  md:space-x-24 ">
        <div className="flex items-center  w-14 md:w-40 md:h-40  mb-12 md:mb-0 relative">
          <Link href={'/#exchange'}>
            <Image src={LeftArrow} alt="Right Arrow" />
          </Link>
        </div>
        <div className="flex-col w-[275px] md:w-115 md:space-y-11">
          <div className="md:mb-32">
            <p className="text-xl md:text-6xl text-center md:text-left mb-8">
              The Choice is Yours
            </p>

            <p className="text-base md:text-4xl leading-loose md:leading-11 mb-5 ">
              Certify your entire account history, or a recent time period.
            </p>
            <p className="text-base md:text-4xl leading-loose md:leading-11">
              Focus only on your sick gains, or share fully transparent
              transaction data.
            </p>
            <p className="text-base md:text-4xl leading-loose md:leading-11 my-4 ">
              It's up to you.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-9 md:space-y-0 mt-24 md:mt-40">
            <Link href={'/start'} passHref>
              <Button
                buttonStyle="px-20 w-4/5 md:w-1/3 text-base md:text-2xl "
                label="NEXT"
              />
            </Link>
            <Indicator page="second" />
          </div>
        </div>
        <div className="flex items-center w-14 md:w-40 md:h-40 mb-12 md:mb-0 relative">
          <Link href={'/learn/data'} passHref>
            <Image src={RightArrow} alt="Right Arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Learn;
