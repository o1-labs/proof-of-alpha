import Image from "next/image";
import TwitterCardTemplate from '../../public/assets/common/twitter-card-template@2x.png';
import { calculateCumulativeProfitLoss, renderDates } from '../../utils';

const TwitterCardProof = () => {
  const trades = Array(500).fill({
    id: 6,
    pairId: 'BTC/UDST',
    buy: {
      timestamp: '1615928190',
      quantity: '2.780000000',
      price: '45343'
    },
    sell: {
      timestamp: '1639534876',
      quantity: '2.650000000',
      price: '57123'
    }
  });
  return (
    <div className="relative">
      <Image
        src={TwitterCardTemplate}
        alt="Twitter Card Template"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />

      <div className="absolute bottom-[30%] left-[33.5%] text-2xl font-thin tracking-wider text-[#14ff00] lg:text-3xl 2xl:text-5xl 3xl:text-6xl">
        +{calculateCumulativeProfitLoss(trades)}%
      </div>
      <div className="absolute bottom-[23.5%] left-[39%]  text-[.5em] font-thin tracking-widest lg:text-[.6rem]  3xl:text-[.9rem]">
        {renderDates()}
      </div>
    </div>
  );
};

export default TwitterCardProof;
