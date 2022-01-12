import Link from 'next/link';
import type { NextPage } from 'next';
import Header from '../../components/common/Header';
import TransparentButton from '../../components/common/TransparentButton';
import Image from 'next/image';
import AuroTestnet from '../../public/assets/auro/install/auro-testnet.png';

const Auro: NextPage = () => {
  return (
    <div className="min-h-screen bg-background bg-cover bg-no-repeat">
      <Header />

      {/* progress bar */}
      <div className="container w-130 h-screen ml-80">
        <div className="flex">
          <span className="border-t-6  border-white w-14 "></span>
          <span className="border-t-6  border-custom-gray-header-border w-127"></span>
        </div>
        {/* progress bar end */}

        <div className="flex flex-col h-screen pr-14 space-y-10 text-white">
          <p className=" text-1.5xl   tracking-wider leading-9 mt-2">
            CHOOSE A NETWORK
          </p>
          <p className="text-4xl leading-snug ">
            Make sure you’re connected to Snapps Testnet
          </p>

          <div className="h-auto">
            <Image src={AuroTestnet} alt="auro chrome" layout="responsive" />
          </div>
          <div className="flex justify-between">
            <Link href={'/auro'} passHref>
              <TransparentButton label="<< BACK" />
            </Link>

            <Link href={'/auro/faucet'} passHref>
              <TransparentButton label="CONTINUE >>" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auro;
