import Link from 'next/link';
import Image from 'next/image';
import type { NextPage } from 'next';
import Button from '../../components/common/Button';
import TransparentButton from '../../components/common/TransparentButton';
import Header from '../../components/common/Header';
import MinaFaucet from '../../public/assets/auro/faucet/mina-faucet.png';

const Faucet: NextPage = () => {
  return (
    <div className="min-h-screen bg-background bg-cover bg-no-repeat">
      <Header />
      {/* progress bar */}
      <div className="flex flex-col items-center">
        <div className="flex flex-col  w-7/12 md:w-6/12 3xl:w-6/12 2xl:w-7/12  container  h-screen">
          <div className="flex">
            <span className="border-t-6  border-white w-5/12 "></span>
            <span className="border-t-6  border-custom-gray-header-border w-9/12"></span>
          </div>
          {/* progress bar end */}

          <div className="flex flex-col h-screen  space-y-3 text-white">
            <p className="text-sm 2xl:text-lg tracking-wider mt-2">
              GET TESTNET TOKENS
            </p>
            <p className="md:text-1.5xl 2xl:text-3.5xl font-medium md:pb-9 2xl:pb-12 2xl:pt-5">
              Get free testnet tokens from Mina’s faucet
            </p>

            <div className="h-auto">
              <Image src={MinaFaucet} alt="mina faucet" layout="responsive" />
            </div>
            <div className="flex justify-between md:pt-8 2xl:pt-11">
              <Link href={'/auro/install'} passHref>
                <TransparentButton
                  buttonStyle="px-20 md:text-base 2xl:text-xl"
                  label="<< BACK"
                />
              </Link>

              <a target="_blank" href={'https://faucet.minaprotocol.com'}>
                {/* Add open icon */}
                <Button
                  buttonStyle="md:text-base 2xl:text-xl"
                  label="VISIT FAUCET"
                />
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
