import React from 'react';
import Image from 'next/image';
import type { NextPage } from 'next';
import Header from '../../components/verify/Header';
import Button from '../../components/common/Button';
import AuroConfirm from '../../public/assets/verify/confirm/auro-confirm.png';

const Confirm: NextPage = () => {
  return (
    <div className="min-h-screen bg-background bg-cover bg-no-repeat">
      <Header />
      <div>
        <p>Congfirm to Continue</p>
        <p>
          You’ll need to click ‘Confirm’ in the Auro Wallet browser extension to
          continue.
        </p>
        <Button label="CONTINUE >>" />
      </div>
      <div>
        <Image src={AuroConfirm} alt="auro confirm" />
      </div>
    </div>
  );
};

export default Confirm;
