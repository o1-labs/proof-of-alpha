import type { NextPage } from 'next';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '../../components/common/Button';
import TransparentButton from '../../components/common/TransparentButton';
import Header from '../../components/auro/Header';
import AuroChrome from '../../public/assets/auro/auro-home.png';
import ZKLogo from '../../public/assets/common/zk-logo.png';

const Auro: NextPage = () => {
  return (
    <div className="min-h-screen bg-background bg-cover bg-no-repeat">
      <header className="py-18 text-white">
        {/* container to hold logo and 0x address */}
        <div className="flex justify-center relative ">
          <div className="">
            <Image src={ZKLogo} alt="zk logo" />
          </div>
        </div>
      </header>

      {/* progress bar */}
      <div className="container w-130 h-screen ml-80">
        <div className="flex">
          <span className="border-t-6  border-white w-14 "></span>
          <span className="border-t-6  border-custom-gray-header-border w-127"></span>
        </div>
        {/* progress bar end */}

        <div className="flex flex-col h-screen pr-14 space-y-10 text-white">
          <p className=" text-1.5xl   tracking-wider leading-9 mt-2">
            INSTALL BROWSER WALLET
          </p>
          <p className="text-5xl  font-medium">
            Install Auro Wallet for Chrome
          </p>
          <p className="text-3xl font-light ">
            You'll need Mina's browser wallet to use this app.
          </p>
          <div className="h-auto">
            <Image src={AuroChrome} alt="auro chrome" layout="responsive" />
          </div>
          <div className="flex justify-between">
            <Link href={'/start'} passHref>
              <TransparentButton label="<< BACK" />
            </Link>

            <a
              target="_blank"
              href={
                'https://chrome.google.com/webstore/detail/auro-walletmina-protocol/cnmamaachppnkjgnildpdmkaakejnhae'
              }
            >
              {/* Add open icon */}
              <Button buttonStyle="px-20" label="GET AURO" />
            </a>

            <Link href={'/auro/install'} passHref>
              <TransparentButton label="CONTINUE >>" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auro;
