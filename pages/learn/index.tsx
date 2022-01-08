import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../../components/common/Button';
import TwitterCardStart from '../../public/assets/twitter-card-start.png';
import RightArrow from '../../public/assets/right-arrow.png';
import LeftArrow from '../../public/assets/left-arrow.png';

function ChoiceSection() {
  return (
    <div
      className="flex min-h-screen bg-red-background bg-cover bg-no-repeat "
      id="exchange"
    >
      <div className="flex h-2/3 mt-64 ml-44 items-center space-x-24 ">
        <div className="w-52 h-52  relative">
          <Link href={'/#exchange'}>
            <Image src={LeftArrow} alt="Right Arrow" />
          </Link>
        </div>
        <div className="flex-col w-115 space-y-11">
          <p className="text-6xl leading-snug  text-white">
            The Choice is Yours
          </p>

          <p className="text-4xl leading-11  text-white">
            Certify your entire account history, or a recent time period.
          </p>
          <p className="text-4xl leading-11  text-white">
            Focus only on your sick gains, or share fully transparent
            transaction data.
          </p>
          <p className="text-4xl leading-11  text-white">It's up to you.</p>

          <div className="flex items-center ">
            <div className="w-1/2">
              <Link href={'/start'} passHref>
                <Button buttonStyle="px-20" label="NEXT" />
              </Link>
            </div>
            <div className="flex w-1/2">
              <div className="mx-6">
                <div className=" bg-custom-gray-indicator-dot w-4 h-4 rounded-full"></div>
              </div>
              <div className="mx-6">
                <div className=" bg-white w-4 h-4 rounded-full"></div>
              </div>
              <div className="mx-6">
                <div className=" bg-custom-gray-indicator-dot w-4 h-4 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-52 h-52  relative">
          <Link href={'/learn/data'}>
            <Image src={RightArrow} alt="Right Arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ChoiceSection;
