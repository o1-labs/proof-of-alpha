import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { NextPage } from 'next';
import Button from '../../components/common/Button';
import TransparentButton from '../../components/common/TransparentButton';
import Header from '../../components/common/Header';
import BinanaceTransactions from '../../public/assets/verify/review/binance-transactions.png';

const Review: NextPage = () => {
  const [activeButton, setActiveButton] = useState();
  return (
    <div className="min-h-screen bg-background bg-cover bg-no-repeat">
      <Header />
      {/* progress bar */}
      <div className="container w-130  ml-80">
        <div className="flex">
          <span className="border-t-6  border-white w-125 "></span>
          <span className="border-t-6  border-custom-gray-header-border w-28"></span>
        </div>
        {/* progress bar end */}

        <div className="flex flex-col h-screen pr-14 space-y-10 text-white">
          <p className=" text-1.5xl mr-  tracking-wider leading-9 mt-2">
            REVIEW
          </p>
          {/* <div className="space-y-8 text-white"> */}
          <p className="text-5xl leading-snug font-medium ">
            Review your performance
          </p>
          <div className="flex items-center justify-center">
            <Image src={BinanaceTransactions}></Image>
          </div>
          {/* nav buttons */}
          <div className="flex justify-between ">
            <Link href="/verify/configure">
              <TransparentButton
                buttonStyle="w-3/12 items-start justify-start mt-18"
                label="<< BACK"
              />
            </Link>
            <Link href="/verify/finalize">
              <Button buttonStyle="w-3/12 mt-18 mr-36" label="CONTINUE  >>" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
