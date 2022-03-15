import Image from 'next/image';
import Head from 'next/head';
import { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../../components/common/Layout';
import Button from '../../components/common/Button';
import ZKLogo from '../../public/assets/common/zk-logo.png';
import ShieldIcon from '../../public/assets/prove/shield-icon.png';
import ArrowIcon from '../../public/assets/prove/arrow-icon.png';
import TransparentButton from '../../components/common/TransparentButton';

import MinaPrimary from '../../public/assets/prove/mina-icon-primary.png';

import TopStamp from '../../public/assets/prove/prove-stamp.png';
import ProofOfAlphaStatement from '../../components/prove/ProofOfAlphaStatement';
import Container from '../../components/common/Container';
import {
  addQueryParamsToURL,
  BASE_URL,
  calculateCumulativeProfitLoss,
  renderDates,
  trades
} from '../../utils';

const Shared: NextPage = () => {
  const getImageUrl = () => {
    const path = addQueryParamsToURL('/api/og-image', [
      {
        label: 'percentage',
        value: `+${calculateCumulativeProfitLoss(trades)}%`
      },
      { label: 'date', value: renderDates() }
    ]);

    return `${BASE_URL}${path}`;
  };
  return (
    <Layout
      backGroundColor="gray"
      layoutStyle="relative   min-h-fit pb-99 md:pb-96 xl:pb-108 3xl:pb-115 "
    >
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={getImageUrl()} />
        <meta name="twitter:title" content="Proof 0f Alpha" />
      </Head>
      <div className=" absolute -top-30 -right-52   md:-top-36  md:right-0  md:w-7/12 2xl:-top-52 2xl:w-6/12 3xl:-top-56 3xl:w-5/12">
        <Image src={TopStamp} alt="Stamp" />
      </div>
      <Container containerStyle="">
        <div className="mt-3 flex flex-col justify-between md:mt-0 md:flex-row">
          <div className="flex flex-col items-center space-y-4 md:space-y-8">
            <div className="w-18 pt-4 md:w-20 3xl:w-28">
              <Image src={ZKLogo} alt="zk logo" />
            </div>
            <div className="mt-20 flex w-11/12 flex-col items-center justify-center md:mt-36 md:w-full 2xl:w-full  3xl:w-full">
              <ProofOfAlphaStatement />
            </div>
          </div>

          <div className="mt-14  md:mt-64 2xl:mx-auto 3xl:mx-0 3xl:mt-86">
            <div className="mb-20 flex flex-col items-center 2xl:mb-20 3xl:mb-28">
              <p className="text-[.6em] leading-5 tracking-widest md:text-xs md:leading-none md:tracking-wide xl:text-sm 3xl:text-lg">
                GET YOUR FREE PROOF OF
              </p>
              <p className="mb-4 text-[.6em] tracking-widest md:tracking-wide xl:text-sm 2xl:mb-5 3xl:mb-6 3xl:text-lg">
                ALPHA STATMENT
              </p>
              <Link href={'/prove/next'} passHref>
                <Button
                  label="GET IT NOW"
                  buttonStyle="text-[.6em] md:text-xs 3xl:text-sm w-4/12 md:w-7/12 2xl:8/12 3xl:w-8/12"
                />
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-2 2xl:space-y-1 3xl:space-y-3 ">
              <div className="w-8 lg:w-8 2xl:w-10">
                <Image src={ShieldIcon} alt="shield icon" />
              </div>
              <p className="text-[.65em] font-medium md:text-xs 2xl:text-base  3xl:text-lg">
                How do you know this proof is valid?
              </p>
              <p className="text-[.55em] md:text-xs 2xl:text-sm 3xl:text-base">
                Transactions that are accepted by the Mina
              </p>
              <p className="text-[.55em] md:text-xs 2xl:text-sm 3xl:text-base">
                blockchain are considered valid.
              </p>
              <a target="_blank" href={'https://minaexplorer.com/'}>
                <div className="flex items-center">
                  <div className="w-2 2xl:w-2 3xl:w-3">
                    <Image src={ArrowIcon} alt="arrow icon" />
                  </div>
                  <TransparentButton
                    label="VIEW PROOF ON MINA EXPLORER"
                    buttonStyle="text-[.4rem] md:text-[8px] text-[#C4C4C4]  2xl:tracking-normal 2xl:text-[11px] 3xl:text-xs"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-0  mt-20 h-80 w-full  bg-[#79797940] md:h-1/6   lg:h-52 xl:h-72  2xl:h-1/4 3xl:h-1/4">
        <div className="flex h-full flex-col  items-center justify-center space-y-5 2xl:space-y-9  3xl:space-y-8 ">
          <div className=" flex   flex-col items-center ">
            <div className="flex w-10 items-center justify-center xl:w-12 2xl:w-16 3xl:w-auto">
              <Image src={MinaPrimary} alt="mina logo" />
            </div>
            <p className="mt-1 w-fit text-center text-[.4rem] tracking-xlwidest text-[#FF603B] md:text-[.44rem] 2xl:text-[10px] 3xl:mt-1 3xl:text-base ">
              MADE ON MINA
            </p>
          </div>
          <p className="w-7/12 pb-3 text-center text-base tracking-widest md:w-full 2xl:text-1.5xl 3xl:pb-3 3xl:text-3xl ">
            zero-knowledge proof-powered dApps.
          </p>
          <a target="_blank" href="https://docs.minaprotocol.com/en/snapps">
            <Button
              label="LEARN MORE"
              buttonStyle="w-36  mb-10 md:mb-0 2xl:w-48  3xl:w-52 text-[.6em] md:text-xs 2xl:text-base 3xl:text-base"
              secondary={true}
            />
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Shared;
