import Link from 'next/link';
import Image from 'next/image';
import Button from '../common/Button';
import Indicator from './Indicator';
import TwitterCard from '../../public/assets/common/twitter-card.png';
import RightArrow from '../../public/assets/common/right-arrow.png';

const ExchangeTradeSection = () => {
  return (
    <div
      className="flex justify-center md:justify-start min-h-screen min-w-screen bg-red-background bg-cover bg-no-repeat "
      id="exchange"
    >
      <div className="flex w-[290px] justify-center md:space-x-44 md:w-auto h-screen md:mt-56 ">
        <div className="hidden  md:block w-[1013px] -ml-[560px] mt-10 relative">
          <Image src={TwitterCard} alt="Twitter Card" />
        </div>
        {/* container */}
        <div className="flex justify-center md:items-center h-screen w-screen mt-16 md:mt-0 md:w-[690px] md:space-y-5 ">
          <div className="flex flex-col h-screen  ">
            {/* copy section */}
            <p className="text-xl md:text-6xl text-center md:text-left text-white mt-6 md:mt-0">
              Your Exchange Trades,
            </p>
            <p className="text-xl md:text-6xl text-center md:text-left mb-8 text-white">
              Certified On-chain
            </p>

            <p className="text-base md:text-4xl leading-loose md:leading-11 mb-5 text-white ">
              It’s your
              <span className="font-bold"> Proof of Trade Statement</span>
            </p>
            <p className="text-base md:text-4xl leading-loose md:leading-11  text-white">
              Absolutely free, a service to our community.
            </p>
            <p className="text-base md:text-4xl leading-loose md:leading-11 my-4 text-white">
              Dropping a Proof of Trade Statement is a strong statement, in any
              community.
            </p>
            {/* end copy section */}

            {/* indicator button group  */}
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-9 md:space-y-0 mt-20 md:mt-32">
              <Link href={'/start'} passHref>
                <Button
                  buttonStyle="px-20 w-4/5 md:w-1/3 text-base md:text-2xl "
                  label="NEXT"
                />
              </Link>
              <Indicator page="first" />
            </div>
            {/* end indicator button group */}
          </div>
        </div>
        <div className="w-20 md:w-40 md:h-40 mt-64 md:mt-52 -mr-12 md:mr-0   relative">
          <Link href={'/learn'}>
            <Image src={RightArrow} alt="Right Arrow" />
          </Link>
        </div>
        {/* end container */}
      </div>
    </div>
  );
};

export default ExchangeTradeSection;
