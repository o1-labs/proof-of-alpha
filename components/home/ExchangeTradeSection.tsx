import Link from 'next/link';
import Image from 'next/image';
import Layout from '../common/Layout';
import Button from '../common/Button';
import Indicator from './Indicator';
import TwitterCard from '../../public/assets/common/twitter-card.png';
import ArrowButton from '../common/ArrowButton';

const ExchangeTradeSection = () => {
  return (
    <Layout
      backGroundColor="red"
      layoutStyle="-mt-3 flex h-screen md:h-screen relative"
      id="exchange"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="relative  mx-auto  flex items-center justify-center  space-x-3 md:w-auto md:space-x-20">
          <div className="hidden w-1/2 md:block">
            <div
              className="relative -ml-[560px]  hidden w-[1013px]  md:block"
              // style={{ clipPath: `inset(0% 0% 0% 54%)` }}
            >
              <Image
                loader={({ src }) => src}
                src={TwitterCard}
                alt="Twitter Card"
              />
            </div>
          </div>
          <div className="invisible relative mb-14 flex   w-14 items-center md:mb-0  md:hidden md:h-40 md:w-40">
            <ArrowButton arrowDirection="left" navLink="/#exchange" />
          </div>
          {/* container */}
          <div className="2xl:w-99  3xl:w-6/12 mx-auto flex h-screen w-full flex-col  justify-center  md:items-center md:space-y-5 xl:w-[500px]">
            <div className=" flex  flex-col ">
              {/* copy section */}
              <p className="3xl:mb 3xl:text-6xl 3xl:mb-5 text-center text-xl text-white md:mt-0 md:text-left lg:text-4xl xl:mb-2">
                Your Exchange Trades,
              </p>
              <p className="xl:text- 3xl:text-6xl 3xl:mb-16 mb-8 text-center text-xl text-white md:text-left md:text-6xl  lg:text-4xl 2xl:mb-10">
                Certified On-chain
              </p>

              <p className="md:leading-11 3xl:mb-8 3xl:text-4xl 3xl:leading-loose mb-4 text-base font-extralight text-white xl:mb-6 xl:text-2xl 2xl:mb-6 ">
                It’s your
                <span className="font-normal"> Proof of Alpha Statement.</span>
              </p>
              <p className="md:leading-11 3xl:mb-8 3xl:text-4xl text-base font-extralight leading-snug text-white  xl:mb-5 xl:text-2xl 2xl:mb-6">
                Absolutely free, a service to our community.
              </p>
              <p className="md:leading-11 3xl:text-4xl mt-8 text-base font-extralight leading-snug  text-white md:my-4 md:mt-0 xl:text-2xl">
                Dropping a{' '}
                <span className="font-normal">Proof of Alpha Statement</span> is
                a strong statement, in any community.
              </p>
              {/* end copy section */}

              {/* indicator button group  */}
              <div className="mt-20 flex flex-col items-center justify-center space-y-9 md:mt-32 md:flex-row md:justify-between md:space-y-0">
                <Link href={'/start'} passHref>
                  <Button
                    buttonStyle="px-20 w-40 h-10 md:w-1/3 xl:h-12 text-xs 2xl:text-base 3xl:text-xl 3xl:w-64 3xl:h-16 2xl:w-40 2xl:h-12 xl:w-38"
                    label="NEXT"
                  />
                </Link>
                <Indicator page="first" />
              </div>
              {/* end indicator button group */}
            </div>
          </div>
          {/* <div className="relative mt-60 -mr-8  md:mt-52 md:mr-0"> */}
          <div
            className=" relative mb-14 flex w-14  items-center md:mb-0 md:mr-0
              md:h-40 md:w-40 "
          >
            <ArrowButton arrowDirection="right" navLink="/learn" />
          </div>
          {/* end container */}
        </div>
      </div>
    </Layout>
  );
};

export default ExchangeTradeSection;
