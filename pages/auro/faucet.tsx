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

const Faucet: NextPage = () => {
  return (
    <div className="bg-background min-h-screen bg-cover bg-no-repeat">
      <Header />

      <div className="flex flex-col items-center">
        <div className="3xl:w-6/12 container  flex h-screen w-7/12 flex-col  md:w-6/12  2xl:w-7/12">
          <ProgressBar stage="3rd" />

          <div className="flex h-screen flex-col  text-white md:space-y-2 2xl:space-y-10">
            <SubHeadLine text="GET TESTNET TOKENS" />

            <HeadLine text="Get free testnet MINA (tMINA) from Mina's faucet " />

            <div className="h-auto">
              <Image src={MinaFaucet} alt="mina faucet" layout="responsive" />
            </div>
            <div className="flex justify-between md:pt-8 2xl:pt-11">
              <Link href={'/auro/install'} passHref>
                <TransparentButton
                  buttonStyle="px-20 md:text-base 2xl:text-lg 3xl:text-xl"
                  label="<< BACK"
                />
              </Link>

              <a target="_blank" href={'https://faucet.minaprotocol.com'}>
                {/* Add open icon */}
                <Button buttonStyle="md:text-base 2xl:text-xl">
                  <Image src={ExternalLinkIcon} />
                  <div className="px-4">VISIT FAUCET</div>
                </Button>
              </a>

              <Link href={'/verify'} passHref>
                <TransparentButton
                  buttonStyle="px-20 md:text-base 2xl:text-xl"
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

export default Faucet;
