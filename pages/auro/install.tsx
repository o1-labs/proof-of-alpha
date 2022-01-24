import Link from 'next/link';
import type { NextPage } from 'next';
import Header from '../../components/common/Header';
import TransparentButton from '../../components/common/TransparentButton';
import Image from 'next/image';
import AuroTestnet from '../../public/assets/auro/install/auro-testnet.png';

const Auro: NextPage = () => {
  return (
    <div className="min-h-screen bg-background bg-cover bg-no-repeat text-white">
      <Header />

      {/* progress bar */}
      <div className="flex flex-col items-center">
        <div className="flex flex-col  w-7/12 md:w-6/12 3xl:w-6/12 2xl:w-7/12  container  h-screen">
          <div className="flex">
            <span className="border-t-6  border-white w-2/12 "></span>
            <span className="border-t-6  border-custom-gray-header-border w-10/12"></span>
          </div>

          {/* progress bar end */}

          <div className="flex flex-col h-screen  space-y-3 ">
            <p className="text-sm 2xl:text-lg tracking-wider mt-2">
              CHOOSE A NETWORK
            </p>
            <p className="md:text-1.5xl 2xl:text-3.5xl font-medium md:pb-9 2xl:pb-12 2xl:pt-5">
              Make sure you’re connected to Snapps Testnet
            </p>

            <div className="h-auto">
              <Image src={AuroTestnet} alt="auro testnet" layout="responsive" />
            </div>
            <div className="flex justify-between pt-8">
              <Link href={'/auro'} passHref>
                <TransparentButton
                  buttonStyle="px-20 md:text-base xl:text-xl"
                  label="<< BACK"
                />
              </Link>

              <Link href={'/auro/faucet'} passHref>
                <TransparentButton
                  buttonStyle="px-20 md:text-base xl:text-xl"
                  label="CONTINUE >>"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auro;
