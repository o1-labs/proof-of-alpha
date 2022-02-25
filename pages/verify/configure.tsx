import React, { useState } from 'react';
import type { NextPage } from 'next';
import Layout from '../../components/common/Layout';
import Header from '../../components/common/Header';

import DateRangeGroup from '../../components/verify/DateRangeGroup';
import TokenPairGroup from '../../components/verify/TokenPairGroup';
import ToolTip from '../../components/verify/ToolTip';
import ProgressBar from '../../components/common/ProgressBar';
import SubHeadLine from '../../components/common/SubHeadLine';
import HeadLine from '../../components/common/HeadLine';
import BottomNavButtons from '../../components/verify/BottomNavButtons';

const Configure: NextPage = () => {
  const [activeButton, setActiveButton] = useState<string>('30');
  return (
    <Layout backGroundColor="gradient">
      <Header />

      <div className="flex flex-col items-center">
        <div className="3xl:w-6/12 container  flex h-screen w-7/12 flex-col  md:w-6/12  2xl:w-7/12">
          <ProgressBar stage="5th" />

          <div className="3xl:space-y-14 flex h-screen flex-col space-y-5 text-white 2xl:space-y-10">
            <SubHeadLine text="CONFIGURE SETTINGS" />

            <HeadLine>
              Configure <span className="font-medium">Proof of Alpha</span>{' '}
              output
            </HeadLine>

            <TokenPairGroup />
            <DateRangeGroup
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            />

            <div className="3xl:mr-40 my-8 mr-2 flex  items-center justify-center 2xl:mr-20 ">
              <span className="2xl:text-1.5xl mr-2  cursor-default text-sm leading-loose hover:underline">
                Maximum of 500 trade fills
              </span>

              <ToolTip />
            </div>

            <BottomNavButtons
              backNavLink="/verify"
              continueNavLink="/verify/review"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Configure;
