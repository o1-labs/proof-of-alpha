import React from 'react';
import Image from 'next/image';
import ProofOfTradeStatement from '../../public/assets/verify/finalize/proof-of-trade-statement.png';
import TwitterCard from '../../public/assets/verify/finalize/twitter-card-finalize.png';

const ReturnsAndTradeBadge = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" text-xl mt-8">SOCIAL BADGE</div>
      <div className="-mt-5 mb-24">
        <Image src={TwitterCard} alt="twitter card" />
      </div>
    </div>
  );
};

export default ReturnsAndTradeBadge;
