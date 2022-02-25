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
    <Layout
      backGroundColor="blue"
      layoutStyle="h-.9*screen md:h-screen flex -mt-3 "
      id="proof"
    >
      <Container containerStyle="">
        <div className=" mx-auto  flex h-screen    flex-col items-center justify-center  md:flex-row">
          <div className=" container  flex   flex-col items-center space-y-5 text-white  md:items-start  md:space-y-8 ">
            <p className="3xl:text-6xl lg:text-4.5xl mx-auto mb-4 w-[290px] text-xl font-normal leading-snug md:mx-0 md:mb-10 md:w-auto md:text-left md:text-3xl ">
              Your Proof of Alpha Statement:
            </p>

            <div className="flex items-center  justify-center">
              <div className="md:w-124 container   flex  w-80 flex-col items-center space-y-5 text-white  md:items-start  md:space-y-8 ">
                <CheckmarkItem copy="Verifies your trades, over any time period" />
                <CheckmarkItem copy="Showcases your gains" />
                <CheckmarkItem copy="Preserves your privacy" />
                <CheckmarkItem copy="Keeps you in control of what you share" />
                <CheckmarkItem copy="100% open source & on-chain" />
              </div>
              <div className="2xl:w-86 2xl:h-86 hidden h-80 w-80 justify-end  md:flex md:flex-col">
                <Image layout="responsive" src={ZKBorderLogo} alt="ZK logo" />
              </div>
            </div>

            <div className="">
              <div className="mx-auto mt-10 flex h-auto flex-col items-center justify-center space-y-4 md:mt-10 md:w-full md:flex-row  md:justify-between md:space-x-10 md:space-y-0">
                <Link href={'/start'} passHref>
                  <Button
                    buttonStyle="px-12 3xl:w-64 3xl:h-16 2xl:w-40 2xl:h-12 xl:w-38 w-38 h-10 xl:h-12 text-xs xl:text-sm 2xl:text-sm 3xl:text-xl"
                    label="LAUNCH APP"
                  />
                </Link>

                <Link href={'#exchange'} passHref>
                  <TransparentButton
                    buttonStyle="md:-ml-3 md:w-auto px-10 text-xs xl:text-sm 2xl:text-sm 3xl:text-xl"
                    label="LEARN MORE"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default ProofSection;
