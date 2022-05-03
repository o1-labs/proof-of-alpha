import Image from 'next/image';
import Head from 'next/head';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Layout from '../../components/common/Layout';
import ZKLogo from '../../public/assets/common/zk-logo.svg';
import TopStamp from '../../public/assets/common/prove-stamp.png';
import ProofOfAlphaStatement from '../../components/result/ProofOfAlphaStatement';
import InfoPanel from '../../components/statement/InfoPanel';
import Container from '../../components/common/Container';
import {
  addQueryParamsToURL,
  BASE_URL,
  calculateCumulativeProfitLoss,
  renderDates,
  trades
} from '../../utils';
import StatementFooter from '../../components/statement/StatementFooter';
import StatementFooterMobile from '../../components/statement/StatementFooterMobile';

const Shared: NextPage = () => {
  const router = useRouter();
  const { txid } = router.query;

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
      layoutStyle="relative  min-h-fit pb-99 md:pb-96 xl:pb-108 3xl:pb-115 "
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
              <ProofOfAlphaStatement txid={txid} />
            </div>
          </div>
          <InfoPanel txid={txid} />
        </div>
      </Container>
      <StatementFooterMobile />
      <StatementFooter />
    </Layout>
  );
};

export default Shared;
