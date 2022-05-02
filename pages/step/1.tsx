import type { NextPage } from 'next';
import Layout from '../../components/common/Layout';
import Header from '../../components/common/Header';
import Image from 'next/image';
import AuroTestnet from '../../public/assets/step/1/auro-devnet.png';
import ProgressBar from '../../components/common/ProgressBar';
import HeadLine from '../../components/common/HeadLine';
import SubHeadLine from '../../components/common/SubHeadLine';
import AuroBottomNavButtons from '../../components/common/AuroBottomNavButtons';

const Auro: NextPage = () => {
  return (
    <Layout backGroundColor="gradient" layoutStyle="min-container">
      <Header />

      <div className="flex flex-col items-center">
        <div className="container flex  h-screen w-7/12 flex-col md:w-7/12  2xl:w-7/12  3xl:w-6/12">
          <ProgressBar stage="2nd" />

          <div className="mb-2 flex h-screen  flex-col md:space-y-2 2xl:space-y-10 ">
            <SubHeadLine text="CHOOSE NETWORK" />

            <HeadLine
              text="Make sure you’re connected to Berkeley Testnet"
              headLineStyle="py-5"
            />

            <div className="h-auto">
              <Image
                src={AuroTestnet}
                alt="auro testnet"
                layout="responsive"
                priority
              />
            </div>
            <AuroBottomNavButtons
              backNavLink="/step/install-auro"
              externalButton={false}
              continueNavLink="/step/2"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Auro;
