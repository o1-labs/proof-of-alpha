import Link from 'next/link';
import type { NextPage } from 'next';
import Layout from '../../components/common/Layout';
import Header from '../../components/common/Header';
import TransparentButton from '../../components/common/TransparentButton';
import Image from 'next/image';
import AuroTestnet from '../../public/assets/auro/install/auro-testnet.png';
import ProgressBar from '../../components/common/ProgressBar';
import HeadLine from '../../components/common/HeadLine';
import SubHeadLine from '../../components/common/SubHeadLine';
import AuroBottomNavButtons from '../../components/auro/AuroBottomNavButtons';

const Auro: NextPage = () => {
  return (
    <Layout backGroundColor="gradient">
      <Header />

      <div className="flex flex-col items-center">
        <div className="3xl:w-6/12 container  flex h-screen w-7/12 flex-col  md:w-6/12  2xl:w-7/12">
          <ProgressBar stage="2nd" />

          <div className="mb-2 flex h-screen  flex-col md:space-y-2 2xl:space-y-10 ">
            <SubHeadLine text="CHOOSE NETWORK" />

            <HeadLine
              text="Make sure you’re connected to Berkeley Testnet"
              headLineStyle="py-5"
            />

            <div className="h-auto">
              <Image src={AuroTestnet} alt="auro testnet" layout="responsive" />
            </div>
            <AuroBottomNavButtons
              backNavLink="/auro"
              externalButton={false}
              continueNavLink="/auro/faucet"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Auro;
