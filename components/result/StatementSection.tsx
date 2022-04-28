import Image from 'next/image';
import Link from 'next/link';
import Layout from '../common/Layout';
import StatementTopStamp from '../../public/assets/result/prove-stamp-statment.png';
import CopyButton from './CopyButton';
import ProofOfAlphaStatement from './ProofOfAlphaStatement';
import Container from '../common/Container';

interface statementSectionPropTypes {
  txid: string | string[];
}

const StatementSection = ({ txid }: statementSectionPropTypes) => {
  return (
    <Layout
      backGroundColor="grayGradient"
      layoutStyle="min-container h-1.5*screen relative"
    >
      <div className="relative" id="trade"></div>

      <Container containerStyle="pt-32">
        <div className=" absolute top-0 right-0 w-6/12 2xl:w-7/12 3xl:w-7/12">
          <Image src={StatementTopStamp} alt="Stamp" priority />
        </div>
        <div className="ml-18 flex justify-around md:ml-0 ">
          <div className="flex  flex-col  items-center 3xl:space-y-4 ">
            <div className="relative flex min-w-[320px] flex-col items-center justify-center 3xl:w-full">
              <ProofOfAlphaStatement />
            </div>
          </div>
          <div className=" mr-18 flex flex-col items-center space-y-7 pl-28 md:mr-0">
            <p className="text-sm tracking-widest lg:text-base">
              SHARE YOUR STATEMENT
            </p>
            <Link href={`/statement/${txid}`} passHref>
              <CopyButton label="COPY LINK" />
            </Link>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default StatementSection;
