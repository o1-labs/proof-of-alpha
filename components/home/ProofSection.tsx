import Link from 'next/link';
import Image from 'next/image';
import Layout from '../common/Layout';
import Button from '../common/Button';
import CheckmarkItem from './CheckmarkItem';
import TransparentButton from '../common/TransparentButton';
import ZKBorderLogo from '../../public/assets/home/zk-logo-home.png';
import Container from '../common/Container';

const ProofSection = () => {
  return (
    <Layout backGroundColor="blue" layoutStyle="flex">
      {/* Used to navigate user to this section from previous and fix section alignment mismatch */}
      {/* <div className="container mx-auto "> */}
      <Container>
        <div className="" id="proof"></div>
        <div className=" mt-24 flex h-screen w-10/12 flex-col items-center justify-center md:mt-48 md:ml-64 md:flex-row">
          <div className="md:w-124 container mx-auto flex h-screen w-80 flex-col items-center space-y-5 text-white  md:items-start  md:space-y-8 ">
            <p className="mb-4 w-[290px] text-right text-xl font-normal leading-snug md:mb-10 md:w-auto md:text-left md:text-6xl ">
              Your Proof of Alpha Statement:
            </p>
            <CheckmarkItem copy="Verifies your trades, over any time period" />
            <CheckmarkItem copy="Showcases your gains" />
            <CheckmarkItem copy="Preserves your privacy" />
            <CheckmarkItem copy="Keeps you in control of what you share" />
            <CheckmarkItem copy="100% open source & on-chain" />

            <div className="">
              <div className="mx-auto mt-10 flex h-auto flex-col items-center justify-center space-y-4 md:mt-10 md:w-full md:flex-row  md:justify-between md:space-x-10 md:space-y-0">
                <Link href={'/start'} passHref>
                  <Button
                    buttonStyle="p-12 text-xs w-auto 2xl:text-base 3xl:text-xl 3xl:w-auto 2xl:w-auto"
                    label="LAUNCH APP"
                  />
                </Link>

                <Link href={'#exchange'}>
                  <TransparentButton
                    buttonStyle="md:-ml-3 md:w-auto text-xs 2xl:text-base 3xl:text-xl"
                    label="LEARN MORE"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="mw-86 h-86 mb-100 relative ml-24 hidden items-center justify-center md:block">
            <Image src={ZKBorderLogo} alt="ZK logo" />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default ProofSection;
