import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import ProofGeneratedConfirmation from '../../components/verify/ProofGeneratedConfirmation';
import Button from '../../components/common/Button';

const FetchingTrades = () => {
  return (
    <div className="flex min-h-screen justify-center bg-background bg-cover bg-no-repeat">
      <div className="container flex  h-screen justify-center">
        <div className="mt-10 flex flex-col space-y-6 text-white 2xl:mt-20 2xl:space-y-14 3xl:mt-36">
          <div className="flex justify-center">
            <LoadingSpinner label="FETCHING TRADES" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FetchingTrades;
