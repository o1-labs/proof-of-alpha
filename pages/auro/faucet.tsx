import Link from 'next/link';
import Image from 'next/image';
import type { NextPage } from 'next';
import Button from '../../components/common/Button';
import TransparentButton from '../../components/common/TransparentButton';
import Header from '../../components/common/Header';
import MinaFaucet from '../../public/assets/auro/faucet/mina-faucet.png';
import ExternalLinkIcon from '../../public/assets/common/external-link-icon.png';
import ProgressBar from '../../components/common/ProgressBar';
import HeadLine from '../../components/common/HeadLine';
import SubHeadLine from '../../components/common/SubHeadLine';
import Layout from '../../components/common/Layout';

const Faucet: NextPage = () => {
  return (
    <Layout backGroundColor="gradient">
      <Header />

      <div className="flex flex-col items-center">
        <div className="3xl:w-6/12 container  flex h-screen w-7/12 flex-col  md:w-6/12  2xl:w-7/12">
          <ProgressBar stage="3rd" />

          <div className="flex h-screen flex-col  text-white md:space-y-2 2xl:space-y-10">
            <SubHeadLine text="GET TESTNET TOKENS" />

            <HeadLine text="Get free testnet MINA (tMINA) from Mina's faucet " />
            <p className="3xl:text-3xl 2xl:text-1.5xl  pb-3 font-light md:text-base">
              Select the Berkeley network
            </p>
            <div className="h-auto">
              <Image src={MinaFaucet} alt="mina faucet" layout="responsive" />
            </div>
            <div className="flex justify-between md:pt-8 2xl:pt-11">
              <Link href={'/auro/install'} passHref>
                <TransparentButton
                  buttonStyle="
px-20 text-sm 2xl:text-base 3xl:text-xl"
                  label="<< &nbsp;BACK"
                ></TransparentButton>
              </Link>

              <div className="flex justify-center  ">
                <a target="_blank" href={'https://faucet.minaprotocol.com'}>
                  <Button buttonStyle="  text-xs 2xl:text-base 3xl:text-xl py-3">
                    <div className="flex  items-center   2xl:h-10 ">
                      <Image src={ExternalLinkIcon} />
                    </div>
                    <div className="px-6">VISIT FAUCET</div>
                  </Button>
                </a>
              </div>

              <Link href={'/verify'} passHref>
                <TransparentButton
                  buttonStyle="px-20 text-sm 2xl:text-base 3xl:text-xl"
                  label="CONTINUE  &nbsp;>>"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Faucet;
