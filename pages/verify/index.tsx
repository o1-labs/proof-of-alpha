import Link from 'next/link';
import type { NextPage } from 'next';
import Image from 'next/image';
import Layout from '../../components/common/Layout';
import ProgressBar from '../../components/common/ProgressBar';
import SubHeadLine from '../../components/common/SubHeadLine';
import HeadLine from '../../components/common/HeadLine';
import Button from '../../components/common/Button';
import TransparentButton from '../../components/common/TransparentButton';
import Input from '../../components/common/Input';
import Header from '../../components/common/Header';
import InfoIcon from '../../public/assets/common/info-icon.png';
import APIsettings from '../../public/assets/verify/api-key-settings.png';
import Modal from '../../components/verify/Modal';
import { useState } from 'react';

const Verify: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [binanaceAPIsecret, setBinanceAPIsecret] = useState<string>('');
  const [binanaceAPIkey, setBinanceAPIkey] = useState<string>('');

  const handleOurAPIkeysClick = () => {
    setBinanceAPIkey('ggHi367Faq67blldRuI1vvadvTdVaFeQ32P9sXHms1auhsdf3K4Msw');
    setBinanceAPIsecret(
      'a4ttT8g4dEafafp025JK34nm31c2xUn1ZxPLHDfn09Pa54Tt6Lft3j4'
    );
  };
  return (
    <Layout backGroundColor="gradient">
      <Header />
      <div className="flex flex-col items-center">
        <div className="3xl:w-6/12 container  flex h-screen w-7/12 flex-col  md:w-6/12  2xl:w-7/12">
          <ProgressBar stage="4th" />

          <div className="3xl:space-y-8 flex flex-col space-y-2 2xl:space-y-6">
            <SubHeadLine text="CONNECT TO BINANCE" />

            <HeadLine text="Let's Gather Your Trading Data" />

            <p className="2xl:text-1.5xl  3xl:text-2xl font-light md:text-sm ">
              We use Binance API keys to fetch your trades.
            </p>
            <p className="2xl:text-1.5xl  3xl:text-2xl font-light md:text-sm">
              <span className="font-bold">Read-only</span> access is all we
              need.
            </p>
            <div>
              <p className="2xl:text-1.5xl  3xl:text-2xl border-1/2 3xl:h-16 3xl:w-6/12  -ml-8 flex  h-9 w-7/12 items-center justify-center border-[#A8A8A8] bg-[#90909040] text-center font-bold md:text-sm 2xl:ml-0 2xl:h-14 2xl:w-6/12   ">
                No record of your API keys will ever be saved.
              </p>
            </div>
            <p className="2xl:text-1.5xl  3xl:text-2xl md:text-sm">
              If you don't have a Binance account, you can use&nbsp;
              <button onClick={handleOurAPIkeysClick}>
                <span className="underline">our API Keys</span>
              </button>
            </p>
            <button onClick={() => setIsModalOpen(true)}>
              <div className="flex items-center pt-3  ">
                <div className="flex w-4 justify-center 2xl:w-5">
                  <Image src={InfoIcon} alt="info" />
                </div>
                <span className="3xl:text-lg pl-2 underline md:text-xs 2xl:text-base ">
                  How do I find my Binance API keys?
                </span>
              </div>
            </button>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
          </div>
          <div className="flex ">
            <div className="flex w-1/2 flex-col space-y-2 md:mt-3 2xl:mt-10 2xl:space-y-5">
              <p className="3xl:text-lg md:text-[.6rem] 2xl:text-base">
                BINANCE API KEY
              </p>
              <Input
                inputStyle="md:text-base 2xl:text-xl "
                value={binanaceAPIkey}
              />
              <p className="3xl:text-lg md:text-[.6rem] 2xl:text-base">
                API SECRET
              </p>
              <Input
                inputStyle="md:text-base 2xl:text-xl  "
                value={binanaceAPIsecret}
              />

              <div className="flex flex-col items-center justify-center space-y-6 pt-6">
                <Link href={'/verify/configure'}>
                  <Button
                    buttonStyle="w-full md:text-xs 2xl:text-xl"
                    label="CONTINUE >>"
                  />
                </Link>

                <Link href={'/auro/faucet'}>
                  <TransparentButton
                    buttonStyle="text-center md:text-xs 2xl:text-xl"
                    label="<< BACK"
                  />
                </Link>
              </div>
            </div>
            <div className="absolute right-36 mt-8  w-4/12  2xl:right-20 2xl:mt-20 2xl:w-5/12">
              <Image src={APIsettings} alt="API key settings" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Verify;
