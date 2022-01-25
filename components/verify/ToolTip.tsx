import Image from 'next/image';
import InfoIcon from '../../public/assets/common/info-icon.png';

const ToolTip = () => {
  return (
    <div className="relative flex flex-col items-center group">
      <div className="flex items-center w-4 2xl:w-6">
        <Image src={InfoIcon} alt="info" />
      </div>
      <div className="absolute bottom-0 flex flex-col items-center hidden mb-7 2xl:mb-11 group-hover:flex">
        <span className=" flex flex-col w-90 2xl:w-122 relative z-10 p-7 2xl:p-10 text-sm 2xl:text-2xl text-white leading-snug whitespace-no-wrap bg-black shadow-lg rounded-xl ">
          <p className="pb-3 2xl:pb-5">
            <span className="font-bold">Proof of Alpha </span>can process up to
            a maximum of 500 trade fills (total orders fulfilled by the
            exchange) each time the smart contract is executed.
          </p>
          <p className="pb-3 2xl:pb-5">
            Note that a single order placed by a trader can be broken up by the
            exchange into multiple trade fills.
          </p>
          <p>To view your trade fills on Binance, navigate to:</p>
          <p className="font-bold">
            Orders &gt; Spot Orders &gt; Trade History
          </p>
        </span>
        <div className="w-3 h-3 -mt-2  transform rotate-45 bg-black"></div>
      </div>
    </div>
  );
};

export default ToolTip;
