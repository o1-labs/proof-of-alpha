import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import tradeTwitter from '../../public/assets/trade-history-with-twitter.png';
import Button from '../../components/common/Button';
import Header from '../../components/start/Header';

import React, { useState, useEffect } from 'react';

const Start: NextPage = () => {
  return (
    <div className="min-h-screen bg-background bg-cover bg-no-repeat">
      <Header />
      <div className="flex">
        <div className="flex flex-col  space-y-11 text-white ml-30 mt-10 w-122">
          <p className="text-5xl leading-snug  font-medium">
            Your Free Proof of Trade Statement and Share Badge
          </p>

          <p className="text-4xl font-light leading-snug">
            Proof of Trade Performance offers third party verification of your
            trade history.
          </p>
          <p className="text-4xl  font-light leading-snug">
            You control what you share, and your personal data stays private.
          </p>
          <p className="text-4xl  font-light leading-snug">
            Your track record, certified on-chain, free of charge.
          </p>
          <p className="text-4xl  font-light leading-snug">
            Available for Binance. Other exchanges coming soon!
          </p>
          <div className="">
            <Link href="/auro" passHref>
              <Button buttonStyle="px-20" label="CONTINUE" />
            </Link>
          </div>
        </div>
        <div className=" w-122 h-125 mt-11">
          <Image
            src={tradeTwitter}
            alt="trade history and twitter"
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default Start;
