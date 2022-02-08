import Link from 'next/link';
import Image from 'next/image';
import type { NextPage } from 'next';
import Button from '../../components/common/Button';
import TransparentButton from '../../components/common/TransparentButton';
import Header from '../../components/common/Header';
import MinaFaucet from '../../public/assets/auro/faucet/mina-faucet.png';
import ExternalLinkIcon from '../../public/assets/common/external-link-icon.png';

const Faucet: NextPage = () => {
  return (
    <div className="bg-background min-h-screen bg-cover bg-no-repeat">
      <Header />
      {/* progress bar */}
      <div className="flex flex-col items-center">
        <div className="3xl:w-6/12 container  flex h-screen w-7/12 flex-col  md:w-6/12  2xl:w-7/12">
          <div className="flex">
            <span className="border-t-6  w-5/12 border-white "></span>
            <span className="border-t-6  border-custom-gray-header-border w-9/12"></span>
          </div>
          {/* progress bar end */}

          <div className="flex h-screen flex-col  space-y-3 text-white">
            <p className="mt-2 text-sm tracking-wider 2xl:text-lg">
              GET TESTNET TOKENS
            </p>
            <p className="md:text-1.5xl 2xl:text-3.5xl font-normal md:pb-9 2xl:pb-12 2xl:pt-5">
              Get free testnet MINA (tMINA) from Mina's faucet
            </p>

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
