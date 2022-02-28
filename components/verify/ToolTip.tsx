import Image from 'next/image';
// import InfoIcon from '../../public/assets/common/info-icon.png';
import InfoIcon from '../../public/assets/verify/info-icon.png';

const ToolTip = () => {
  return (
    <div className="group relative flex flex-col items-center">
      <div className="flex w-4 items-center 2xl:w-6">
        <Image loader={({ src }) => src} src={InfoIcon} alt="info" />
      </div>
      <div className="absolute bottom-0 mb-7 flex hidden flex-col items-center group-hover:flex 2xl:mb-11">
        <span className=" w-90 2xl:w-122 whitespace-no-wrap relative z-10 flex flex-col rounded-xl bg-black p-7 text-sm leading-snug text-white shadow-lg 2xl:p-10 2xl:text-2xl ">
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
        <div className="-mt-2 h-3 w-3  rotate-45 transform bg-black"></div>
      </div>
    </div>
  );
};

export default ToolTip;
