import Link from 'next/link';

import Image from 'next/image';
import type { NextPage } from 'next';
import Button from '../../components/common/Button';
import TransparentButton from '../../components/common/TransparentButton';
import AuroChrome from '../../public/assets/auro/auro-home.png';
import ZKLogo from '../../public/assets/common/zk-logo.png';
import Header from '../../components/common/Header';

const Auro: NextPage = () => {
  return (
    <div className="min-h-screen bg-background bg-cover bg-no-repeat text-white">
      <Header />

      {/* progress bar */}
      <div className="flex flex-col items-center">
        <div className="flex flex-col  md:w-6/12 2xl:w-7/12 3xl:w-6/12 container  h-screen">
          <div className="flex">
            {/* <span className="border-t-6  border-white w-14 "></span>
          <span className="border-t-6  border-custom-gray-header-border w-127"></span> */}
            <span className="border-t-6  border-white w-1/12 "></span>
            <span className="border-t-6  border-custom-gray-header-border w-11/12"></span>
          </div>
          {/* progress bar end */}

          <div className="flex flex-col h-screen md:space-y-2 2xl:space-y-5 ">
            <p className="text-sm 2xl:text-lg tracking-wider mt-2">
              INSTALL BROWSER WALLET
            </p>
            <p className="md:text-1.5xl 2xl:text-3.5xl  font-medium">
              Install Auro Wallet for Chrome
            </p>
            <p className="md:text-base  2xl:text-1.5xl font-light pb-3">
              You'll need Mina's browser wallet to use this app.
            </p>
            <div className="h-auto">
              <Image src={AuroChrome} alt="auro chrome" layout="responsive" />
            </div>
            <div className="flex justify-between pt-8">
              <Link href={'/start'} passHref>
                <TransparentButton
                  buttonStyle="md:text-base 2xl:text-xl"
                  label="<< BACK"
                />
              </Link>

              <a
                target="_blank"
                href={
                  'https://chrome.google.com/webstore/detail/auro-walletmina-protocol/cnmamaachppnkjgnildpdmkaakejnhae'
                }
              >
                {/* Add open icon */}
                <Button
                  buttonStyle="md:text-base 2xl:text-xl"
                  label="GET AURO"
                />
              </a>

              <Link href={'/auro/install'} passHref>
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
