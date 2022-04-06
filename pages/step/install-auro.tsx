import Image from 'next/image';
import type { NextPage } from 'next';
import AuroChrome from '../../public/assets/step/auro-install/auro-home@2x.png';
import Header from '../../components/common/Header';
import ProgressBar from '../../components/common/ProgressBar';
import HeadLine from '../../components/common/HeadLine';
import SubHeadLine from '../../components/common/SubHeadLine';
import Layout from '../../components/common/Layout';
import AuroBottomNavButtons from '../../components/auro/AuroBottomNavButtons';

const Auro: NextPage = () => {
  return (
    <Layout backGroundColor="gradient" layoutStyle="min-container">
      <Header />
      <div className="flex flex-col items-center">
        <div className=" flex h-screen w-7/12 min-w-fit flex-col md:w-7/12 2xl:w-7/12  3xl:w-6/12">
          <ProgressBar stage="1st" />

          <div className="flex h-screen w-full flex-col space-y-3 md:space-y-4 2xl:space-y-10 ">
            <SubHeadLine text="INSTALL BROWSER WALLET" />
            <HeadLine text="Install Auro Wallet for Chrome" />
            <p className="pb-3 font-light  md:text-sm 2xl:text-1.5xl 3xl:text-3xl">
              You'll need Mina's browser wallet to use this app.
            </p>
            <div className="h-auto">
              <Image
                src={AuroChrome}
                alt="auro chrome"
                layout="responsive"
                priority
              />
            </div>
            <AuroBottomNavButtons
              backNavLink="/get-started"
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
