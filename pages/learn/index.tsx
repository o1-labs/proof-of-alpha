import Link from 'next/link';
import Image from 'next/image';
import type { NextPage } from 'next';
import Layout from '../../components/common/Layout';
import Button from '../../components/common/Button';
import Indicator from '../../components/home/Indicator';

import ArrowButton from '../../components/common/ArrowButton';

const Learn: NextPage = () => {
  return (
    <Layout backGroundColor="red" layoutStyle="flex">
      <div className="mt-22 flex  h-4/5 items-center md:mt-64 md:ml-44 md:h-2/3 md:w-auto  md:space-x-24 ">
        <div className="relative mb-12  flex w-14 items-center  md:mb-0 md:h-40 md:w-40">
          <ArrowButton arrowDirection="left" navLink="/#exchange" />
        </div>
        <div className="md:w-115 w-[275px] flex-col md:space-y-11">
          <div className="md:mb-32">
            <p className="mb-8 text-center text-xl md:text-left md:text-6xl 2xl:mb-14">
              The Choice is Yours
            </p>

            <p className="md:leading-11 mb-5 text-base leading-loose md:text-4xl 2xl:mb-10 ">
              Certify your entire account history, or a recent time period.
            </p>
            <p className="md:leading-11 text-base leading-loose md:text-4xl 2xl:mb-10">
              Focus only on your sick gains, or share fully transparent
              transaction data.
            </p>
            <p className="md:leading-11 my-4 text-base leading-loose md:text-4xl ">
              It's up to you.
            </p>
          </div>
          <div className="mt-24 flex flex-col items-center justify-center space-y-9 pr-10 md:mt-40 md:flex-row md:justify-between md:space-y-0">
            <Link href={'/start'} passHref>
              <Button
                buttonStyle="px-20 w-4/5 md:w-1/3 text-base md:text-2xl "
                label="NEXT"
              />
            </Link>
            <Indicator page="second" />
          </div>
        </div>
        <div className="relative mb-12 flex  items-center md:mb-0 ">
          <ArrowButton arrowDirection="right" navLink="/learn/data" />
        </div>
      </div>
    </Layout>
  );
};

export default Learn;
