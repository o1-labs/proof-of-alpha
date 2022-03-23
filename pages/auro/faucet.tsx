import Image from 'next/image';
import type { NextPage } from 'next';
import Header from '../../components/common/Header';
import MinaFaucet from '../../public/assets/auro/faucet/mina-faucet@2x.png';
import ProgressBar from '../../components/common/ProgressBar';
import HeadLine from '../../components/common/HeadLine';
import SubHeadLine from '../../components/common/SubHeadLine';
import Layout from '../../components/common/Layout';
import AuroBottomNavButtons from '../../components/auro/AuroBottomNavButtons';
import useMinaProvider from '../../hooks/useMinaProvider';

const Faucet: NextPage = () => {
  const { minaAccount } = useMinaProvider();
  return (
    <Layout backGroundColor="gradient">
      <Header />

      <div className="flex flex-col items-center">
        <div className="container flex  h-screen w-7/12 flex-col md:w-6/12  2xl:w-7/12  3xl:w-6/12">
          <ProgressBar stage="3rd" />

          <div className="flex h-screen flex-col  text-white md:space-y-4 2xl:space-y-10">
            <SubHeadLine text="GET TESTNET TOKENS" />

            <HeadLine text="Get free testnet MINA (tMINA) from Mina's faucet" />
            <p className="pb-3 font-light  md:text-sm 2xl:text-1.5xl 3xl:text-3xl">
              Select the Berkeley network
            </p>
            <div className="h-auto">
              <Image
                src={MinaFaucet}
                alt="mina faucet"
                layout="responsive"
                priority
              />
            </div>

            <AuroBottomNavButtons
              backNavLink="/auro/install"
              externalButton
              externalButtonNavLink={`https://faucet.minaprotocol.com?address=${minaAccount}`}
              externalButtonLabel="VISIT FAUCET"
              continueNavLink="/verify"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Faucet;
