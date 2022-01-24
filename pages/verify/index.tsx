import Link from 'next/link';
import type { NextPage } from 'next';
import Image from 'next/image';
import Button from '../../components/common/Button';
import TransparentButton from '../../components/common/TransparentButton';
import Input from '../../components/common/Input';
import Header from '../../components/common/Header';
import InfoIcon from '../../public/assets/common/info-icon.png';
import APIsettings from '../../public/assets/verify/api-key-settings.png';

const Verify: NextPage = () => {
  return (
    <div className="min-h-screen bg-background bg-cover bg-no-repeat text-white">
      <Header />
      <div className="flex flex-col items-center">
        <div className="flex flex-col  w-7/12 md:w-6/12 3xl:w-6/12 2xl:w-7/12  container  h-screen">
          <div className="flex">
            <span className="border-t-6  border-white w-6/12 "></span>
            <span className="border-t-6  border-custom-gray-header-border w-6/12"></span>
          </div>

          <div className="flex flex-col space-y-2 2xl:space-y-6">
            <p className=" text-sm 2xl:text-lg tracking-wider mt-2">
              CONNECT TO BINANCE
            </p>
            <p className="md:text-xl 2xl:text-3.5xl font-medium">
              Let's Gather Your Trading Data
            </p>

            <p className="md:text-sm  2xl:text-1.5xl font-light ">
              We use Binance API keys to fetch your trades.
            </p>
            <p className="md:text-sm  2xl:text-1.5xl font-light">
              <span className="font-bold">Read only</span> access is all we need
            </p>
            <div>
              <p className="-ml-8 2xl:-ml-16 3xl:-ml-11 flex justify-center  items-center text-center bg-[#90909040] border-[#A8A8A8] border-1/2 h-9 w-7/12 2xl:h-14 2xl:w-6/12  font-bold md:text-sm  2xl:text-1.5xl   ">
                No Record of your API keys will ever be saved.
              </p>
            </div>
            <p className="md:text-sm  2xl:text-1.5xl">
              If you don't have a Binance account, you can use
              <span className="underline"> our API Keys</span>
            </p>
            <div className="flex pt-3 items-center  ">
              <div className="flex w-4 2xl:w-5 justify-center">
                <Image src={InfoIcon} alt="info" />
              </div>
              <span className="md:text-xs 2xl:text-base pl-2 underline ">
                How do I find my Binance API keys?
              </span>
            </div>
          </div>
          <div className="flex ">
            <div className="w-1/2 md:mt-3 2xl:mt-10 flex flex-col space-y-2 2xl:space-y-5">
              <p className="md:text-[.6rem] 2xl:text-base">BINANCE API KEY</p>
              <Input inputStyle="" />
              <p className="md:text-[.6rem] 2xl:text-base md:">API SECRET</p>
              <Input inputStyle="md:text-base 2xl:text-xl " />

              <div className="flex flex-col items-center justify-center space-y-6 pt-6">
                <Link href={'/verify/configure'}>
                  <Button
                    buttonStyle="w-full md:text-xs 2xl:text-xl"
                    label="CONTINUE >>"
                  />
                </Link>

                <Link href={'/start'}>
                  <TransparentButton
                    buttonStyle="text-center md:text-xs 2xl:text-xl"
                    label="<< BACK"
                  />
                </Link>
              </div>
            </div>
            <div className="absolute w-4/12 2xl:w-5/12  right-36  mt-8 2xl:right-20 2xl:mt-20">
              <Image src={APIsettings} alt="API key settings" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
