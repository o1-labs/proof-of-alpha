import React, { useState } from 'react';
import Link from 'next/link';
import type { NextPage } from 'next';
import Button from '../../components/common/Button';
import TransparentButton from '../../components/common/TransparentButton';
import Header from '../../components/common/Header';
import Dropdown from '../../components/common/Dropdown';
import DateRangeGroup from '../../components/verify/DateRangeGroup';
import TokenPairGroup from '../../components/verify/TokenPairGroup';
import ToolTip from '../../components/verify/ToolTip';

const Configure: NextPage = () => {
  const [activeButton, setActiveButton] = useState();
  return (
    <div className="min-h-screen bg-background bg-cover bg-no-repeat">
      <Header />
      {/* progress bar */}
      <div className="flex flex-col items-center">
        <div className="flex flex-col  w-7/12 md:w-6/12 3xl:w-6/12 2xl:w-7/12  container  h-screen">
          <div className="flex">
            <span className="border-t-6  border-white w-7/12 "></span>
            <span className="border-t-6  border-custom-gray-header-border w-6/12"></span>
          </div>
          {/* progress bar end */}

          <div className="flex flex-col h-screen space-y-5 2xl:space-y-10 3xl:space-y-14 text-white">
            <p className="text-sm 2xl:text-lg tracking-wider mt-2">
              CONFIGURE SETTINGS
            </p>

            <p className="text-1.5xl 2xl:text-3.5xl">
              Configure <span className="font-medium">Proof of Alpha</span>{' '}
              output
            </p>
            {/* Token pair dropdown */}

            <TokenPairGroup />
            <DateRangeGroup />

            {/* tooltip */}
            <div className="flex items-center justify-center mr-2 2xl:mr-20 3xl:mr-40 my-8 ">
              <span className="text-sm 2xl:text-1.5xl leading-loose mr-2 hover:underline">
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
    </div>
  );
};

export default Configure;
