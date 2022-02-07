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
      className="bg-red-background flex min-h-screen bg-cover bg-no-repeat text-white"
      id="exchange"
    >
      <div className="mt-[88px]  flex  h-4/5 items-center md:mt-64 md:ml-44 md:h-2/3 md:w-auto  md:space-x-24 ">
        <div className="relative mb-12  flex w-14 items-center  md:mb-0 md:h-40 md:w-40">
          <Link href={'/#exchange'}>
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
              The Choice is Yours
            </p>

            <p className="md:leading-11 mb-5 text-base leading-loose md:text-4xl ">
              Certify your entire account history, or a recent time period.
            </p>
            <p className="md:leading-11 text-base leading-loose md:text-4xl">
              Focus only on your sick gains, or share fully transparent
              transaction data.
            </p>
            <p className="md:leading-11 my-4 text-base leading-loose md:text-4xl ">
              It's up to you.
            </p>
          </div>
          <div className="mt-24 flex flex-col items-center justify-center space-y-9 md:mt-40 md:flex-row md:justify-between md:space-y-0">
            <Link href={'/start'} passHref>
              <Button
                buttonStyle="px-20 w-4/5 md:w-1/3 text-base md:text-2xl "
                label="NEXT"
              />
            </Link>
            <Indicator page="second" />
          </div>
        </div>
        <div className="relative mb-12 flex w-14 items-center md:mb-0 md:h-40 md:w-40">
          <Link href={'/learn/data'} passHref>
            <Image
              className="fliter hover:invert-[.35]"
              src={RightArrow}
              alt="Right Arrow"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Learn;
