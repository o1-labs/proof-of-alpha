import Link from 'next/link';
import Image from 'next/image';
import Button from '../common/Button';
import Indicator from './Indicator';
import TwitterCard from '../../public/assets/common/twitter-card.png';
import RightArrow from '../../public/assets/common/right-arrow.png';

const ExchangeTradeSection = () => {
  return (
    <div className="min-w-screen bg-red-background -mt-12 flex min-h-screen justify-center bg-cover bg-no-repeat md:justify-start   ">
      {/* Used to navigate user to this section from previous and fix section alignment mismatch */}
      <div className="mt-2" id="exchange"></div>
      <div className="flex h-screen w-[290px] justify-center md:mt-56 md:w-auto md:space-x-44 ">
        <div className="relative  -ml-[560px] mt-10 hidden w-[1013px] md:block">
          <Image src={TwitterCard} alt="Twitter Card" />
        </div>
        {/* container */}
        <div className="mt-16 flex h-screen w-screen justify-center md:mt-0 md:w-[690px] md:items-center md:space-y-5 ">
          <div className="flex h-screen flex-col  ">
            {/* copy section */}
            <p className="3xl:mb mt-6 text-center text-xl text-white md:mt-0 md:text-left md:text-6xl">
              Your Exchange Trades,
            </p>
            <p className="mb-8 text-center text-xl text-white md:text-left md:text-6xl">
              Certified On-chain
            </p>

            <p className="md:leading-11 mb-5 text-base leading-loose text-white md:text-4xl ">
              It’s your
              <span className="font-bold"> Proof of Alpha Statement.</span>
            </p>
            <p className="md:leading-11 text-base leading-loose text-white  md:text-4xl">
              Absolutely free, a service to our community.
            </p>
            <p className="md:leading-11 my-4 text-base leading-loose text-white md:text-4xl">
              Dropping a Proof of Alpha Statement is a strong statement, in any
              community.
            </p>
            {/* end copy section */}

            {/* indicator button group  */}
            <div className="mt-20 flex flex-col items-center justify-center space-y-9 md:mt-32 md:flex-row md:justify-between md:space-y-0">
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
        <div className="relative mt-64 -mr-12 w-20 md:mt-52 md:mr-0 md:h-40   md:w-40">
          <Link href={'/learn'}>
            <Image
              className="fliter hover:invert-[.35]"
              src={RightArrow}
              alt="Right Arrow"
            />
          </Link>
        </div>
        {/* end container */}
      </div>
    </div>
  );
};

export default ExchangeTradeSection;
