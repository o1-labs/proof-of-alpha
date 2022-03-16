import Image from 'next/image';
import TwitterCardTemplate from '../../public/assets/common/twitter-card-template.png';
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
        className="relative"
        src={TwitterCardTemplate}
        alt="Twitter Card Template"
      />

      <div className="absolute bottom-[30%] left-[33.5%] text-lg font-thin tracking-wider text-[#14ff00] 2xl:text-4xl 3xl:text-6xl">
        +{calculateCumulativeProfitLoss(trades)}%
      </div>
      <div className="absolute bottom-[23.5%] left-[39%]  text-[.08em] font-thin tracking-widest xl:text-[.35rem] 2xl:text-[.6rem]">
        {renderDates()}
      </div>
    </div>
  );
};

export default TwitterCardProof;
