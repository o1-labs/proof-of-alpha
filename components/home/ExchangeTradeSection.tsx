import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../common/Button';
import TwitterCardLeft from '../../public/assets/home/twitter-card-left.png';
import RightArrow from '../../public/assets/common/right-arrow.png';

const ExchangeTradeSection: NextPage = () => {
  return (
    <div
      className="flex min-h-screen bg-red-background bg-cover bg-no-repeat "
      id="exchange"
    >
      <div className="flex mt-56 space-x-48">
        <div className="h-108 relative">
          <Image src={TwitterCardLeft} alt="Twitter Card" />
        </div>
        <div className="flex-col w-115 space-y-5">
          <p className="text-6xl   text-white">Your Exchange Trades,</p>
          <p className="text-6xl   text-white">Certified On-chain</p>

          <p className="text-4xl leading-11  text-white">
            It’s your
            <span className="font-bold"> Proof of Trade Statement</span>
          </p>
          <p className="text-4xl leading-11  text-white">
            Absolutely free, a service to our community.
          </p>
          <p className="text-4xl leading-11  text-white mb">
            Dropping a Proof of Trade Statement is a strong statement, in any
            community.
          </p>
          <div className="flex items-center ">
            <div className="w-1/2">
              <Link href={'/start'} passHref>
                <Button buttonStyle="px-20" label="NEXT" />
              </Link>
            </div>
            <div className="flex w-1/2">
              <div className="mx-6">
                <div className=" bg-white w-4 h-4 rounded-full"></div>
              </div>
              <div className="mx-6">
                <div className=" bg-custom-gray-indicator-dot w-4 h-4 rounded-full"></div>
              </div>
              <div className="mx-6">
                <div className=" bg-custom-gray-indicator-dot w-4 h-4 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-52 h-52 ml-42 mt-42 mt-40 relative">
          <Link href={'/learn'}>
            <Image src={RightArrow} alt="Right Arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExchangeTradeSection;
