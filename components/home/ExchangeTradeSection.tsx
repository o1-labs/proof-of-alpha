import Link from 'next/link';
import Image from 'next/image';
import Button from '../common/Button';
import TwitterCardLeft from '../../public/assets/home/twitter-card-left.png';
import RightArrow from '../../public/assets/common/right-arrow.png';

const ExchangeTradeSection = () => {
  return (
    <div
      className="flex min-h-screen bg-red-background bg-cover bg-no-repeat "
      id="exchange"
    >
      <div className="flex md:mt-56 md:space-x-48">
        <div className="hidden  md:block h-108 relative">
          <Image src={TwitterCardLeft} alt="Twitter Card" />
        </div>
        <div className="flex"></div>
        {/* container */}

        <div className="flex justify-center md:items-center h-screen w-screen mt-16 md:mt-0  md:w-115  md:space-y-5">
          <div className="flex flex-col h-screen w-[280px] md:w-auto">
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
            <p className="text-base md:text-4xl leading-loose md:leading-11 my-4 text-white mb">
              Dropping a Proof of Trade Statement is a strong statement, in any
              community.
            </p>
            {/* end copy section */}
            {/* button */}
            <div className="flex flex-col md:flex-row items-center space-y-9 mt-14">
              {/* <div className="w-1/2"> */}
              <Link href={'/start'} passHref>
                <Button
                  buttonStyle="px-20 w-4/5 text-base md:text-2xl "
                  label="NEXT"
                />
              </Link>
              {/* </div> */}
              {/* button end */}
              {/* indicator section */}
              <div className="flex md:w-1/2">
                <div className="mx-3 md:mx-6">
                  <div className=" bg-white w-3 h-3 md:w-4 md:h-4 rounded-full"></div>
                </div>
                <div className="mx-3 md:mx-6">
                  <div className=" bg-custom-gray-indicator-dot w-3 h-3 md:w-4 md:h-4 rounded-full"></div>
                </div>
                <div className="mx-3 md:mx-6">
                  <div className=" bg-custom-gray-indicator-dot w-3 h-3 md:w-4 md:h-4 rounded-full"></div>
                </div>
              </div>
              {/* end indicator section */}
            </div>
          </div>

          <div className="w-18 mt-52 -mr-12 md:w-20 md:h-52 md:ml-42 md:mt-42 md:mt-40 relative">
            <Link href={'/learn'}>
              <Image src={RightArrow} alt="Right Arrow" />
            </Link>
          </div>
        </div>
        {/* end container */}
      </div>
    </div>
  );
};

export default ExchangeTradeSection;
