import Image from 'next/image';
import type { NextPage } from 'next';
import Header from '../../components/common/Header';
import MinaFaucet from '../../public/assets/step/2/mina-faucet.png';
import ProgressBar from '../../components/common/ProgressBar';
import HeadLine from '../../components/common/HeadLine';
import SubHeadLine from '../../components/common/SubHeadLine';
import Layout from '../../components/common/Layout';
import AuroBottomNavButtons from '../../components/common/AuroBottomNavButtons';
import useMinaProvider from '../../hooks/useMinaProvider';

const Faucet: NextPage = () => {
  const { minaAccount } = useMinaProvider();
  return (
    <Layout backGroundColor="gradient" layoutStyle="min-container">
      <Header />

      <div className="flex flex-col items-center">
        <div className="container flex  h-screen w-7/12 flex-col md:w-7/12  2xl:w-7/12  3xl:w-6/12">
          <ProgressBar stage="3rd" />

          <div className="flex h-screen flex-col  space-y-3 text-white md:space-y-4 2xl:space-y-10">
            <SubHeadLine text="GET TESTNET TOKENS" />

            <HeadLine text="Get free testnet MINA (tMINA) from Mina's faucet" />
            <p className="pb-3 text-sm  font-light md:text-sm 2xl:text-1.5xl 3xl:text-3xl">
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
              backNavLink="/step/1"
              externalButton
              externalButtonNavLink={`https://faucet.minaprotocol.com?address=${minaAccount}`}
              externalButtonLabel="VISIT FAUCET"
              continueNavLink="/step/3"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Faucet;
