import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { NextPage } from 'next';
import Button from '../../components/common/Button';
import TransparentButton from '../../components/common/TransparentButton';
import Header from '../../components/common/Header';
import BinanaceTransactions from '../../public/assets/verify/review/binance-transactions.png';

const Review: NextPage = () => {
  return (
    <div className="min-h-screen bg-background bg-cover bg-no-repeat">
      <Header />
      {/* progress bar */}
      <div className="flex flex-col items-center">
        <div className="flex flex-col  w-7/12 md:w-6/12 3xl:w-6/12 2xl:w-7/12  container  h-screen">
          <div className="flex">
            <span className="border-t-6  border-white w-11/12 "></span>
            <span className="border-t-6  border-custom-gray-header-border w-1/12"></span>
          </div>
          {/* progress bar end */}

          <div className="flex flex-col h-screen space-y-5 2xl:space-y-10 3xl:space-y-14 text-white">
            <p className="text-sm 2xl:text-lg 3xl:text-xl tracking-wider mt-2">
              REVIEW
            </p>

            <p className="text-1.5xl 2xl:text-3.5xl 3xl:text-4xl font-medium">
              Review your performance
            </p>
            <div className="h-2/5 2xl:h-1/2 max-h-screen overflow-auto">
              <div className="flex justify-center">
                <div className="w-10/12 2xl:w-auto">
                  <Image src={BinanaceTransactions}></Image>
                </div>
              </div>
            </div>
            {/* nav buttons */}
            <div className="flex justify-between pt-10 2xl:pt-0 mr-18 2xl:mr-52 3xl:mr-86">
              <Link href="/verify/configure">
                <TransparentButton
                  buttonStyle="w-4/12 2xl:w-3/12 text-sm 2xl:text-xl 3xl:text-2xl"
                  label="<< BACK"
                />
              </Link>
              <Link href="/verify/finalize">
                <Button
                  buttonStyle="w-4/12 2xl:w-3/12 text-sm 2xl:text-xl 3xl:text-2xl"
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

export default Review;
