import Link from 'next/link';
import Image from 'next/image';
import type { NextPage } from 'next';
import Layout from '../../components/common/Layout';
import Button from '../../components/common/Button';
import Indicator from '../../components/home/Indicator';

import ArrowButton from '../../components/common/ArrowButton';
import Container from '../../components/common/Container';

const Learn: NextPage = () => {
  return (
    <Layout backGroundColor="red" layoutStyle="flex -mt-2 h-screen min-h-fit ">
      <Container containerStyle="">
        <div className="flex h-screen flex-col items-center justify-center ">
          <div className="flex items-center  md:w-auto  md:space-x-24 ">
            <div className="relative mb-14   flex w-14 items-center  md:mb-0 md:h-40 md:w-40">
              <ArrowButton arrowDirection="left" navLink="/#exchange" />
            </div>
            <div className="3xl:w-115 w-[275px] flex-col md:space-y-11 xl:w-[400px] 2xl:w-[420px]">
              <div className="mx-auto w-11/12 md:mx-0 md:mb-32 md:w-auto">
                <p className="3xl:text-6xl 3xl:mb-16  mb-14  text-center text-xl md:text-left lg:text-4xl 2xl:mb-14">
                  The Choice is Yours
                </p>

                <p className="md:leading-11 3xl:text-4xl 3xl:mb-10 mb-5 text-base leading-loose xl:text-2xl 2xl:mb-8 ">
                  Certify your entire account history, or a recent time period.
                </p>
                <p className="md:leading-11 3xl:text-4xl 3xl:mb-12 text-base leading-loose xl:text-2xl 2xl:mb-10">
                  Focus only on your sick gains, or share fully transparent
                  transaction data.
                </p>
                <p className="md:leading-11 3xl:text-4xl my-4 text-base leading-loose xl:text-2xl ">
                  It's up to you.
                </p>
              </div>
              <div className="mt-24 flex flex-col items-center justify-center space-y-9 pr-10 md:mt-40 md:flex-row md:justify-between md:space-y-0">
                <Link href={'/start'} passHref>
                  <Button
                    buttonStyle="px-20 w-40 h-10 md:w-1/3 xl:h-12 text-xs xl:text-sm 2xl:text-sm 3xl:text-xl 3xl:w-64 3xl:h-16 2xl:w-1/3 2xl:h-12 xl:1/3"
                    label="NEXT"
                  />
                </Link>
                <Indicator page="second" />
              </div>
            </div>
            <div className="relative mb-14  flex  items-center  md:mb-0 md:h-40 md:w-40">
              <ArrowButton arrowDirection="right" navLink="/learn/data" />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Learn;
