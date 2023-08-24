import { useState } from 'react';
import Image from "next/image";
import type { NextPage } from 'next';
import TradeTwitter from '../../public/assets/get-started/trade-history-with-twitter.png';
import Layout from '../../components/common/Layout';
import Container from '../../components/common/Container';
import Button from '../../components/common/Button';
import Header from '../../components/get-started/Header';
import Modal from '../../components/get-started/Modal';
import CardGroupStart from '../../components/get-started/CardGroupStart';
import { useRouter } from 'next/router';

const Start: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleButtonClick = (): void => {
    // This shows a modal to the user if they are on a mobile device to guide them to use a desktop
    if (window.innerWidth < 800) {
      setIsModalOpen(true);
    } else {
      // Routes user to skip install auro education flow if Auro wallet is already installed
      window?.mina?.isAuro
        ? router.push('/step/1')
        : router.push('/step/install-auro');
    }
  };
  return (
    <Layout backGroundColor="gradient" layoutStyle=" h-fit min-h-screen">
      <Container containerStyle="h-fit min-h-screen pb-[320px] md:pb-0 relative">
        <Header />
        <div className="relative  ">
          <div className="mx-auto  flex w-9/12 flex-col space-y-5 text-white md:mx-0  md:mt-10  md:w-[410px]  md:space-y-4 xl:mt-10 xl:w-[500px] xl:space-y-7 2xl:mt-10 2xl:w-[620px] 3xl:mt-10 3xl:w-[640px]">
            <p className="pr-8 text-center text-xl font-light md:text-left xl:text-3xl 2xl:text-4xl 3xl:mb-5  3xl:text-5xl 3xl:leading-13">
              Your Free Proof of Alpha Statement and Share Badge
            </p>

            <p className="mt-4 text-base font-extralight md:mt-0 md:text-xl xl:text-1.5xl 3xl:mb-5 3xl:text-3xl  ">
              Proof of Alpha offers third-party verification of your trade
              history.
            </p>
            <p className="text-base font-extralight md:text-xl xl:text-2xl  3xl:mb-8 3xl:text-3xl ">
              You control what you share, and your personal data stays private.
            </p>
            <p className="text-base font-extralight md:text-xl xl:text-2xl 3xl:mb-8 3xl:text-3xl ">
              Your track record, certified on-chain, free of charge.
            </p>
            <p className="text-base font-extralight md:text-xl xl:text-2xl  3xl:mb-8 3xl:text-3xl ">
              Available for Binance. Other exchanges coming soon!
            </p>
            <div className="flex items-center justify-center pt-8 pb-2 md:justify-start ">
              <Button
                buttonStyle=" w-7/12 h-10 xl:w-4/12 xl:h-10 3xl:w-1/2 3xl:h-14 text-xs xl:text-sm 2xl:text-sm 3xl:text-xl"
                label="GET STARTED"
                onClick={handleButtonClick}
              />
            </div>
          </div>
          <div className="-bottom-20s invisible absolute right-0 overflow-hidden md:visible md:right-0 md:bottom-0 md:w-[310px] xl:-bottom-18 xl:w-[400px] 2xl:-bottom-40 2xl:-right-52 2xl:w-[500px] 3xl:-right-0 3xl:-bottom-40 3xl:w-[600px]">
            <Image
              src={TradeTwitter}
              alt="trade history and twitter"
              priority
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto"
              }} />
          </div>
        </div>
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        <div className="md:invisible">
          <CardGroupStart />
        </div>

        <div />
      </Container>
    </Layout>
  );
};

export default Start;
