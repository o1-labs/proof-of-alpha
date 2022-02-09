import Link from 'next/link';
import type { NextPage } from 'next';
import Header from '../../components/common/Header';
import TransparentButton from '../../components/common/TransparentButton';
import Image from 'next/image';
import AuroTestnet from '../../public/assets/auro/install/auro-testnet.png';
import ProgressBar from '../../components/common/ProgressBar';

const Auro: NextPage = () => {
  return (
    <div className="bg-background min-h-screen bg-cover bg-no-repeat text-white">
      <Header />

      <div className="flex flex-col items-center">
        <div className="3xl:w-6/12 container  flex h-screen w-7/12 flex-col  md:w-6/12  2xl:w-7/12">
          <ProgressBar stage="2nd" />

          <div className="flex h-screen flex-col  space-y-3 ">
            <p className="mt-2 text-sm tracking-wider 2xl:text-lg">
              CHOOSE NETWORK
            </p>

            <p className="md:text-1.5xl 2xl:text-3.5xl font-medium md:pb-9 2xl:pb-12 2xl:pt-5">
              Make sure you’re connected to Snapps Testnet
            </p>

            <div className="h-auto">
              <Image src={AuroTestnet} alt="auro testnet" layout="responsive" />
            </div>
            <div className="flex justify-between md:pt-8 2xl:pt-11">
              <Link href={'/auro'} passHref>
                <TransparentButton
                  buttonStyle="px-20 md:text-base 2xl:text-xl"
                  label="<< BACK"
                />
              </Link>

              <Link href={'/auro/faucet'} passHref>
                <TransparentButton
                  buttonStyle="px-20 md:text-base 2xl:text-xl"
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
