import React from 'react';
import Image from 'next/image';
import ProofOfTradeStatement from '../../public/assets/proof-of-trade-statement.png';
import TwitterCard from '../../public/assets/twitter-card.png';

const ReturnsAndTradeBadge = () => {
  return (
    <div className="flex">
      <div>
        <div className="text-center text-xl leading-10">
          PROOF OF TRADE STATEMENT
        </div>
        <div className="w-115 -mt-8">
          <Image src={ProofOfTradeStatement} alt="proof of trade statement" />
        </div>
      </div>

      <div className="-ml-48">
        <div className=" text-center text-xl leading-10">SOCIAL BADGE</div>
        <div className="w-108 -mt-2">
          <Image src={TwitterCard} alt="twitter card" />
        </div>
      </div>
    </div>
  );
};

export default ReturnsAndTradeBadge;
