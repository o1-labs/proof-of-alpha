import Link from 'next/link';
import Image from 'next/image';
import Layout from '../common/Layout';
import Button from '../common/Button';
import TransparentButton from '../common/TransparentButton';
import CardStatmentGroup from './CardStatementGroup';
import ZKLogo from '../../public/assets/common/zk-logo.png';
import TopStamp from '../../public/assets/home/stamp-top.png';
import Container from '../common/Container';

const TradeHistorySection = () => {
  return (
    <Layout backGroundColor="gradient" layoutStyle="flex relative h-screen">
      {/* <div className="flex h-screen bg-background bg-cover bg-no-repeat"> */}
      {/* <div className="3xl:max-w-screen-xl mx-auto w-5/12 min-w-min items-center sm:max-w-screen-sm  2xl:max-w-screen-lg"> */}

      <header className=""></header>
      <div className="absolute  right-0  hidden  md:block">
        <Image src={TopStamp} alt="Stamp" />
      </div>
      <Container containerStyle="relative h-screen ">
        <div className="absolute ml-36 mt-5 w-20 items-center md:ml-7  md:mt-5 md:w-24 xl:ml-10  xl:mt-12 xl:h-32 xl:w-auto">
          <Image src={ZKLogo} alt="zk logo" />
        </div>
        <div className="3xl:mt-60 mx-auto mt-36 flex flex-col items-center justify-center md:mt-24 md:ml-32 md:flex-row xl:mt-60 xl:ml-52">
          <div className="3xl:space-y-10  flex   flex-col space-y-6 text-white  md:w-auto md:space-y-3 xl:space-y-4 2xl:space-y-8">
            <p className="3xl:text-7xl text-1.5xl mx-auto w-10/12 items-center text-white md:mx-0 md:w-full md:px-0 md:text-3xl 2xl:text-5xl">
              Your Trade History Sets You Apart
            </p>
            <div className="mx-auto flex w-9/12 flex-col space-y-6 md:mx-0 md:w-auto md:space-y-4 md:px-0 xl:space-y-8 ">
              <p className="3xl:text-4xl xl:text-1.5xl text-base font-extralight  text-white md:text-2xl 2xl:text-3xl">
                But faking gains on the socials is easy with bogus screenshots.
              </p>
              <p className="3xl:text-4xl w-38 xl:text-1.5xl text-base font-extralight text-white md:text-2xl 2xl:text-3xl">
                That’s why we built
                <span className="md:font-medium"> Proof-of-Alpha </span>
                using zero-knowledge proofs.
              </p>
            </div>
            <div className=" z-10">
              <div className="mx-auto flex h-auto w-64 flex-col items-center  justify-center space-y-4 pt-6 md:mx-0 md:mt-4 md:w-3/4  md:flex-row md:justify-start xl:w-2/3">
                <Link href={'/start'} passHref>
                  <Button
                    buttonStyle="px-12 xl:px-4 3xl:w-64 3xl:h-16 2xl:w-40 2xl:h-12 xl:w-44 w-38 h-10 xl:h-12 text-xs 2xl:text-base 3xl:text-xl"
                    label="LAUNCH APP"
                  />
                </Link>

                <Link href={'#proof'}>
                  <TransparentButton
                    buttonStyle="md:ml-16 px-10 xl:px-4 text-xs 2xl:text-base 2xl:text-base 3xl:text-xl"
                    label="LEARN MORE"
                  />
                </Link>
              </div>
            </div>
          </div>
          <CardStatmentGroup />
        </div>
        {/* </div> */}
      </Container>
    </Layout>
  );
};

export default TradeHistorySection;
