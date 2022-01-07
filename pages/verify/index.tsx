import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../../components/common/Button';
import TransparentButton from '../../components/common/TransparentButton';
import Input from '../../components/common/Input';
import Header from '../../components/verify/Header';
import InfoIcon from '../../public/assets/common/info-icon.png';

import React, { useState, useEffect } from 'react';

const Verify: NextPage = () => {
  return (
    <div className="min-h-screen bg-background bg-cover bg-no-repeat">
      <Header />
      <div className="container w-130 h-screen ml-80">
        <div className="flex">
          <span className="border-t-6  border-white w-110 "></span>
          <span className="border-t-6  border-custom-gray-header-border w-99"></span>
        </div>

        <div className="flex flex-col h-2/5 pr-14 space-y-10 text-white">
          <p className=" text-1.5xl   tracking-wider leading-9 mt-2">
            CONNECT TO BINANCE
          </p>
          <p className="text-5xl leading-snug">
            Let's Gather Your Trading Data
          </p>

          <p className="text-4xl ">
            We use Binance API keys to fetch your trades.
          </p>
          <p className="text-4xl leading-snug">
            Read only access is all we need
          </p>
          <p className="text-4xl font-bold  leading-snug">
            No Record of your API keys will ever be saved
          </p>
          <p className="text-4xl leading-snug">
            If you don't have a Binance account, you can use{' '}
            <span className="underline">our API Keys</span>
          </p>
          <div className="flex items-center  ">
            <Image src={InfoIcon} alt="info" />
            <span className="text-2xl leading-loose pl-4 underline ">
              How do I find my Binance API keys?.
            </span>
          </div>
        </div>
        {/* <Input />
        <Input /> */}
        <div className="w-1/2 flex flex-col space-y-6">
          <p className="text-white">BINANCE KEY</p>
          <Input />
          <p className="text-white">API SECRET</p>
          <Input />
          <p></p>
          <Link href={'/verify/configure'}>
            <Button label="CONTINUE" />
          </Link>
          <p></p>
          <Link href={'/start'}>
            <TransparentButton buttonStyle="text-center" label="<< BACK" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Verify;
