import Link from 'next/link';
import Image from 'next/image';
import type { NextPage } from 'next';
import Button from '../../components/common/Button';
import TransparentButton from '../../components/common/TransparentButton';
import AuroChrome from '../../public/assets/auro/auro-home.png';
import Header from '../../components/common/Header';
import ProgressBar from '../../components/common/ProgressBar';
import HeadLine from '../../components/common/HeadLine';
import ExternalLinkIcon from '../../public/assets/common/external-link-icon.png';
import SubHeadLine from '../../components/common/SubHeadLine';
import Layout from '../../components/common/Layout';

const Auro: NextPage = () => {
  return (
    <Layout backGroundColor="gradient">
      <Header />

      <div className="flex flex-col items-center">
        <div className="3xl:w-6/12 container  flex h-screen flex-col md:w-6/12  2xl:w-7/12">
          <ProgressBar stage="1st" />

          <div className="flex h-screen w-full flex-col md:space-y-2 2xl:space-y-10 ">
            <SubHeadLine text="INSTALL BROWSER WALLET" />

            <HeadLine text="Install Auro Wallet for Chrome" />
            <p className="3xl:text-3xl 2xl:text-1.5xl  pb-3 font-light md:text-base">
              You'll need Mina's browser wallet to use this app.
            </p>

            <div className="h-auto">
              <Image src={AuroChrome} alt="auro chrome" layout="responsive" />
            </div>
            <div className="flex w-full justify-between pt-8">
              <Link href={'/start'} passHref>
                <TransparentButton
                  buttonStyle="text-xs 2xl:text-base 3xl:text-xl"
                  label="<<&nbsp; BACK"
                />
              </Link>

              <div className="flex justify-center  ">
                <a
                  target="_blank"
                  href={
                    'https://chrome.google.com/webstore/detail/auro-walletmina-protocol/cnmamaachppnkjgnildpdmkaakejnhae'
                  }
                >
                  <Button buttonStyle="  text-xs 2xl:text-base 3xl:text-xl px-3 py-3">
                    <div className="flex  items-center   2xl:h-10 ">
                      <Image src={ExternalLinkIcon} />
                    </div>
                    <div className="pr-7">GET AURO </div>
                  </Button>
                </a>
              </div>

              <Link href={'/auro/install'} passHref>
                <TransparentButton
                  buttonStyle="text-xs 2xl:text-base 3xl:text-xl"
                  label="CONTINUE&nbsp; >>"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Auro;
