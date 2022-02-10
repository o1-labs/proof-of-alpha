import React, { useState } from 'react';
import Link from 'next/link';
import type { NextPage } from 'next';
import Layout from '../../components/common/Layout';
import Button from '../../components/common/Button';
import TransparentButton from '../../components/common/TransparentButton';
import Header from '../../components/common/Header';
import Dropdown from '../../components/common/Dropdown';
import DateRangeGroup from '../../components/verify/DateRangeGroup';
import TokenPairGroup from '../../components/verify/TokenPairGroup';
import ToolTip from '../../components/verify/ToolTip';
import ProgressBar from '../../components/common/ProgressBar';
import SubHeadLine from '../../components/common/SubHeadLine';

const Configure: NextPage = () => {
  const [activeButton, setActiveButton] = useState();
  return (
    <Layout backGroundColor="gradient">
      <Header />

      <div className="flex flex-col items-center">
        <div className="3xl:w-6/12 container  flex h-screen w-7/12 flex-col  md:w-6/12  2xl:w-7/12">
          <ProgressBar stage="5th" />

          <div className="3xl:space-y-14 flex h-screen flex-col space-y-5 text-white 2xl:space-y-10">
            <SubHeadLine text="CONFIGURE SETTINGS" />

            <p className="md:text-1.5xl 2xl:text-3.5xl">
              Configure <span className="font-bold">Proof of Alpha</span> output
            </p>
            {/* Token pair dropdown */}

            <TokenPairGroup />
            <DateRangeGroup />

            {/* tooltip */}
            <div className="3xl:mr-40 my-8 mr-2 flex  items-center justify-center 2xl:mr-20 ">
              <span className="2xl:text-1.5xl mr-2  cursor-default text-sm leading-loose hover:underline">
                Maximum of 500 trade fills
              </span>

              <ToolTip />
            </div>
            {/* end tooltip */}
            {/* nav buttons */}
            <div className="flex justify-between pt-20">
              <Link href="/verify">
                {/* <Link href="/verify"> */}
                <TransparentButton
                  buttonStyle="w-3/12 text-sm 2xl:text-xl 3xl:text-2xl"
                  label="<< BACK"
                />
              </Link>
              <Link href="/verify/review">
                <Button
                  buttonStyle="w-3/12 text-sm 2xl:text-xl 3xl:text-2xl"
                  label="CONTINUE  >>"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Configure;
