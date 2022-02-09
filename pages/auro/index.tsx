import Link from 'next/link';
import Image from 'next/image';
import type { NextPage } from 'next';
import Button from '../../components/common/Button';
import TransparentButton from '../../components/common/TransparentButton';
import AuroChrome from '../../public/assets/auro/auro-home.png';
import Header from '../../components/common/Header';
import ProgressBar from '../../components/common/ProgressBar';
import HeadLine from '../../components/auro/HeadLine';
import ExternalLinkIcon from '../../public/assets/common/external-link-icon.png';

const Auro: NextPage = () => {
  return (
    <div className="bg-background min-h-screen bg-cover bg-no-repeat text-white">
      <Header />

      <div className="flex flex-col items-center">
        <div className="3xl:w-6/12 container  flex h-screen flex-col md:w-6/12  2xl:w-7/12">
          <ProgressBar stage="1st" />

          <div className="flex h-screen w-full flex-col md:space-y-2 2xl:space-y-10 ">
            <p className="mt-2 text-sm tracking-wider 2xl:text-lg">
              INSTALL BROWSER WALLET
            </p>

            <HeadLine text="Install Auro Wallet for Chrome" />
            <p className="2xl:text-1.5xl  pb-3 font-light md:text-base">
              You'll need Mina's browser wallet to use this app.
            </p>
            <div className="h-auto">
              <Image src={AuroChrome} alt="auro chrome" layout="responsive" />
            </div>
            <div className="flex w-full justify-between pt-8">
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
                <div className="w-full">
                  <Button buttonStyle="md:text-base 2xl:text-xl">
                    <Image src={ExternalLinkIcon} />
                    <div className="px-4">GET AURO </div>
                  </Button>
                </div>
              </a>

              <Link href={'/auro/install'} passHref>
                <TransparentButton
                  buttonStyle="px-20 md:text-base 2xl:text-lg 3xl:text-xl"
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
