import Link from 'next/link';
import type { NextPage } from 'next';
import Header from '../../components/common/Header';
import TransparentButton from '../../components/common/TransparentButton';
import Image from 'next/image';
import AuroTestnet from '../../public/assets/auro/install/auro-testnet.png';
import ProgressBar from '../../components/common/ProgressBar';
import HeadLine from '../../components/common/HeadLine';
import SubHeadLine from '../../components/common/SubHeadLine';

const Auro: NextPage = () => {
  return (
    <div className="bg-background min-h-screen bg-cover bg-no-repeat text-white">
      <Header />

      <div className="flex flex-col items-center">
        <div className="3xl:w-6/12 container  flex h-screen w-7/12 flex-col  md:w-6/12  2xl:w-7/12">
          <ProgressBar stage="2nd" />

          <div className="flex h-screen flex-col  space-y-3 ">
            <SubHeadLine text="CHOOSE NETWORK" />

            <HeadLine text="Make sure you’re connected to Snapps Testnet" />

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
