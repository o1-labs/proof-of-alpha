import React from 'react';
import Image from 'next/image';
import InfoIcon from '../../public/assets/common/info-icon.png';

const ToolTip = () => {
  return (
    <div className="relative flex flex-col items-center group">
      <Image src={InfoIcon} alt="info" />
      <div className="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex">
        <span className="relative z-10 p-2 text-2xl text-white whitespace-no-wrap bg-black shadow-lg ">
          <p>
            Proof of Trade Performance can process up to a maximum of 500 trade
            fills (total orders fulfilled by the exchange) each time the smart
            contract is executed.
          </p>
          <p>
            Note that a single order placed by a trader can be broken up by the
            exchange into multiple trade fills.
          </p>
          <p>
            To view your trade fills on Binance, navigate to: Orders &lt Spot
            Orders &lt Trade History
          </p>
        </span>
        <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
      </div>
    </div>
  );
};

export default ToolTip;
