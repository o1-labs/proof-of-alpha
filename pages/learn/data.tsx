import Link from 'next/link';
import Image from 'next/image';
import type { NextPage } from 'next';
import Layout from '../../components/common/Layout';
import Indicator from '../../components/home/Indicator';
import Button from '../../components/common/Button';

import RightStamp from '../../public/assets/home/stamp-right.png';
import ArrowButton from '../../components/common/ArrowButton';
import Container from '../../components/common/Container';

const Data: NextPage = () => {
  return (
    <Layout backGroundColor="red" layoutStyle="flex h-screen -mt-1 ">
      <Container containerStyle="">
        <div className="flex h-screen flex-col items-center justify-center">
          <div className="mx-auto flex w-11/12 items-center justify-center    md:w-auto  md:space-x-24 ">
            <div className=" mb-12  flex  items-center  md:mb-28 ">
              <ArrowButton arrowDirection="left" navLink="/learn" />
            </div>

            <div className="3xl:w-115 xl:w-99  2xl:w-99 mx-auto w-10/12 flex-col md:w-auto md:space-y-11 ">
              <div className="">
                <p className="3xl:text-6xl 3xl:mb-16  mx-auto mb-14 w-11/12 text-xl  md:w-auto md:text-left lg:text-4xl xl:mb-9">
                  Your Data Stays Private
                </p>
                {/* 3xl:text-4xl xl:text-2xl */}
                <p className="md:leading-11 3xl:text-4xl 3xl:mb-12 mb-5 text-base  leading-loose xl:text-2xl 2xl:mb-10">
                  We are a team of engineers, cryptographers, and crypto
                  traders.
                </p>
                <p className="md:leading-11 3xl:text-4xl 3xl:mb-12 text-base  leading-loose xl:text-2xl 2xl:mb-10">
                  We use zero-knowledge proofs to ensure the privacy of your
                  data.
                </p>
                <p className="md:leading-11 3xl:text-4xl my-4 text-base  leading-loose xl:text-2xl">
                  Whether your account is anon or KYC'ed, your data will stay
                  private.
                </p>
                <div className="mx-auto mt-12 -ml-10 flex flex-col items-center justify-center space-y-9 md:ml-0 md:mt-32 md:flex-row md:justify-between md:space-y-0">
                  <Link href={'/start'} passHref>
                    <Button
                      buttonStyle="px-20 w-40 h-10 md:w-1/3 xl:h-12 text-xs 2xl:text-base 3xl:text-xl 3xl:w-64 3xl:h-16 2xl:w-5/12 2xl:h-12 xl:6/12"
                      label="GET STARTED"
                    />
                  </Link>

                  <Indicator page="third" />
                </div>
              </div>
            </div>
            <div className="absolute right-0 hidden  md:block">
              <Image loader={({ src }) => src} src={RightStamp} alt="Stamp" />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Data;
