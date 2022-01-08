import type { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Button from '../../components/common/Button';
import TransparentButton from '../../components/common/TransparentButton';
import Header from '../../components/auro/Header';

import MinaFaucet from '../../public/assets/mina-faucet.png';

const Faucet: NextPage = () => {
  return (
    <div className="min-h-screen bg-background bg-cover bg-no-repeat">
      <Header />
      {/* progress bar */}
      <div className="container w-130 h-screen ml-80">
        <div className="flex">
          <span className="border-t-6  border-white w-72 "></span>
          <span className="border-t-6  border-custom-gray-header-border w-121"></span>
        </div>
        {/* progress bar end */}

        <div className="flex flex-col h-screen pr-14 space-y-10 text-white">
          <p className=" text-1.5xl   tracking-wider leading-9 mt-2">
            GET TESTNET TOKENS
          </p>
          <p className="text-5xl leading-snug font-medium">
            Get free testnet tokens from Mina’s faucet
          </p>

          <div className="h-auto">
            <Image src={MinaFaucet} alt="mina faucet" layout="responsive" />
          </div>
          <div className="flex justify-between">
            <Link href={'/start'} passHref>
              <TransparentButton label="<< BACK" />
            </Link>

            <a target="_blank" href={'https://faucet.minaprotocol.com'}>
              {/* Add open icon */}
              <Button
                buttonStyle="px-20"
                label="VISIT FAUCET"
                onClick={() => console.log('click')}
              />
            </a>

            <Link href={'/verify'} passHref>
              <TransparentButton label="CONTINUE >>" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faucet;
