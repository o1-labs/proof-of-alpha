import Image from "next/legacy/image";
import type { NextPage } from 'next';
import AuroChrome from '../../public/assets/step/auro-install/auro-install.png';
import ProgressBar from '../../components/common/ProgressBar';
import HeadLine from '../../components/common/HeadLine';
import SubHeadLine from '../../components/common/SubHeadLine';
import Layout from '../../components/common/Layout';
import AuroBottomNavButtons from '../../components/common/AuroBottomNavButtons';
import ZKLogo from '../../public/assets/common/zk-logo.svg';

const Auro: NextPage = () => {
  return (
    <Layout backGroundColor="gradient" layoutStyle="min-container">
      <div className="relative flex items-center justify-center md:py-5 2xl:py-9 ">
        <div className="w-18 md:w-20 2xl:w-28">
          <Image src={ZKLogo} alt="zk logo" />
        </div>
      </div>

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
              continueNavLink="/step/1"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Auro;
