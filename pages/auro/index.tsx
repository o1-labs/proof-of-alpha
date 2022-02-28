import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { NextPage } from 'next';
import AuroChrome from '../../public/assets/auro/auro-home.png';
import Header from '../../components/common/Header';
import ProgressBar from '../../components/common/ProgressBar';
import HeadLine from '../../components/common/HeadLine';
import SubHeadLine from '../../components/common/SubHeadLine';
import Layout from '../../components/common/Layout';
import AuroBottomNavButtons from '../../components/auro/AuroBottomNavButtons';

const Auro: NextPage = () => {
  return (
    <Layout backGroundColor="gradient">
      <Header />
      <div className="flex flex-col items-center">
        <div className="3xl:w-6/12 container  flex h-screen flex-col md:w-6/12  2xl:w-7/12">
          <ProgressBar stage="1st" />

          <div className="flex h-screen w-full flex-col md:space-y-4 2xl:space-y-10 ">
            <SubHeadLine text="INSTALL BROWSER WALLET" />
            <HeadLine text="Install Auro Wallet for Chrome" />
            <p className="3xl:text-3xl 2xl:text-1.5xl  pb-3 font-light md:text-sm">
              You'll need Mina's browser wallet to use this app.
            </p>
            <div className="h-auto">
              <Image
                loader={({ src }) => src}
                src={AuroChrome}
                alt="auro chrome"
                layout="responsive"
              />
            </div>
            <AuroBottomNavButtons
              backNavLink="/start"
              externalButton
              externalButtonNavLink="https://chrome.google.com/webstore/detail/auro-walletmina-protocol/cnmamaachppnkjgnildpdmkaakejnhae"
              externalButtonLabel="GET AURO"
              continueNavLink="/auro/install"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Auro;
