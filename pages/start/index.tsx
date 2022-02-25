import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { NextPage } from 'next';
import TradeTwitter from '../../public/assets/start/trade-history-with-twitter.png';
import Layout from '../../components/common/Layout';
import Container from '../../components/common/Container';
import Button from '../../components/common/Button';
import Header from '../../components/start/Header';
import Modal from '../../components/start/Modal';
import CardGroupStart from '../../components/start/CardGroupStart';
import { useRouter } from 'next/router';

const Start: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleButtonClick = (): void => {
    if (window.innerWidth < 800) {
      setIsModalOpen(true);
    } else {
      router.push('/auro');
    }
  };
  return (
    <Layout backGroundColor="gradient" layoutStyle="h-screen">
      <Container containerStyle="h-screen relative mx-auto">
        <Header />
        <div className="relative flex">
          <div className="mt-30 3xl:mt-72 3xl:w-[640px] mx-auto  flex w-9/12 flex-col  space-y-5  text-white md:ml-28 md:mt-36 md:w-[410px] md:space-y-4 xl:ml-36 xl:mt-56 xl:w-[620px] xl:space-y-7 2xl:mt-60 2xl:w-[620px]">
            <p className="3xl:text-5xl 3xl:mb-5 3xl:leading-13 pr-8 text-center text-xl font-light md:text-left  xl:text-3xl 2xl:text-4xl">
              Your Free Proof of Alpha Statement and Share Badge
            </p>

            <p className="3xl:mb-5 3xl:text-3xl xl:text-1.5xl mt-4 text-base font-extralight md:mt-0 md:text-xl  ">
              Proof of Alpha offers third-party verification of your trade
              history.
            </p>
            <p className="3xl:mb-8 3xl:text-3xl text-base font-extralight  md:text-xl xl:text-2xl ">
              You control what you share, and your personal data stays private.
            </p>
            <p className="3xl:mb-8 3xl:text-3xl text-base font-extralight md:text-xl xl:text-2xl ">
              Your track record, certified on-chain, free of charge.
            </p>
            <p className="3xl:mb-8 3xl:text-3xl text-base font-extralight  md:text-xl xl:text-2xl ">
              Available for Binance. Other exchanges coming soon!
            </p>
            <div className="md-pt-0 flex items-center justify-center pt-8 md:justify-start">
              {/* <Link href="/auro" passHref> */}
              <Button
                buttonStyle=" w-7/12 h-10 xl:w-4/12 xl:h-10 3xl:w-1/2 3xl:h-14 text-xs xl:text-sm 2xl:text-sm 3xl:text-xl"
                label="GET STARTED"
                onClick={handleButtonClick}
              />
              {/* </Link> */}
            </div>
          </div>
          <div className="invisable: 3xl:w-[600px] 3xl:-right-0 3xl:-bottom-40 xl:-bottom-18 -bottom-20s absolute right-0 overflow-hidden md:visible md:right-0 md:bottom-0 md:w-[310px] xl:w-[400px] 2xl:-bottom-40 2xl:-right-80 2xl:w-[500px]">
            <Image
              src={TradeTwitter}
              alt="trade history and twitter"
              layout="responsive"
            />
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
