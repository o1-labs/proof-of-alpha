import Image from 'next/image';
import Link from 'next/link';
import Layout from '../common/Layout';
import StatementTopStamp from '../../public/assets/prove/prove-stamp-statment.png';
import ShareButton from '../../components/prove/ShareButton';
import ProofOfAlphaStatement from './ProofOfAlphaStatement';
import Container from '../common/Container';

const StatementSection = () => {
  return (
    <Layout backGroundColor="grayGradient" layoutStyle="h-1.5*screen relative ">
      <div className="relative" id="trade"></div>

      <Container containerStyle="pt-32">
        <div className=" absolute top-0 right-0 w-6/12 2xl:w-7/12 3xl:w-7/12">
          <Image src={StatementTopStamp} alt="Stamp" />
        </div>
        <div className="flex justify-between  ">
          <div className="flex  flex-col  items-center 3xl:space-y-4 ">
            <div className="relative flex flex-col items-center justify-center 3xl:w-full">
              <ProofOfAlphaStatement />
            </div>
          </div>
          <div className=" flex flex-col items-center space-y-7 pl-28 ">
            <Link href={'/prove/shared'} passHref>
              <ShareButton label="SHARE IT" />
            </Link>

            <p className="tracking-widest">HOW WILL IT LOOK?</p>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default StatementSection;
