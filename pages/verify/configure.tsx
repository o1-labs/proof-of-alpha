import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import Button from '../../components/common/Button';
import TransparentButton from '../../components/common/TransparentButton';

import Header from '../../components/verify/Header';
import Dropdown from '../../components/common/Dropdown';
import ButtonGroup from '../../components/verify/ButtonGroup';
import InfoIcon from '../../public/assets/common/info-icon.png';

import React, { useState } from 'react';

const Configure: NextPage = () => {
  const [activeButton, setActiveButton] = useState();
  return (
    <div className="min-h-screen bg-background bg-cover bg-no-repeat">
      <Header />
      {/* progress bar */}
      <div className="container w-130 h-screen ml-80">
        <div className="flex">
          <span className="border-t-6  border-white w-115 "></span>
          <span className="border-t-6  border-custom-gray-header-border w-86"></span>
        </div>
        {/* progress bar end */}

        <div className="flex flex-col h-screen pr-14 space-y-10 text-white">
          <p className=" text-1.5xl   tracking-wider leading-9 mt-2">
            CONFIGURE SETTINGS
          </p>

          <p className="text-5xl leading-snug font-medium ">
            Configure Proof of Trade Performance output
          </p>
          {/* Token pair dropdown */}
          <div className="flex items-center">
            <span className="text-4xl leading-loose  w-1/3">Token Pair</span>
            <div className="flex w-2/3">
              <Dropdown />
            </div>
          </div>

          <ButtonGroup />

          {/* tooltip */}
          <div className="flex items-center justify-center my-8 ">
            <span className="text-2xl leading-loose mr-2 ">
              Maximum of 500 trade fills.
            </span>

            <Image src={InfoIcon} alt="info" />
          </div>
          {/* end tooltip */}

          {/* nav buttons */}
          <div className="flex justify-between ">
            <Link href="/verify">
              <TransparentButton
                buttonStyle="w-3/12 items-start justify-start mt-20"
                label="<< BACK"
              />
            </Link>
            <Link href="/verify/review">
              <Button buttonStyle="w-3/12 mt-20" label="CONTINUE  >>" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configure;
