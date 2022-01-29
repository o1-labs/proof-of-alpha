import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import ProofGeneratedConfirmation from '../../components/verify/ProofGeneratedConfirmation';
import Button from '../../components/common/Button';

const FetchingTrades = () => {
  return (
    <div className="flex min-h-screen bg-background bg-cover bg-no-repeat justify-center">
      <div className="flex container  h-screen justify-center">
        <div className="flex flex-col space-y-6 2xl:space-y-14 text-white mt-10 2xl:mt-20 3xl:mt-36">
          <div className="flex justify-center">
            <LoadingSpinner label="FETCHING TRADES" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FetchingTrades;
