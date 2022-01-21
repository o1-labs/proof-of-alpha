import Image from 'next/image';
import ProofOfAlpha from '../../public/assets/home/proof-of-alpha-home.png';
import TwitterCard from '../../public/assets/common/twitter-card.png';

const CardStatmentGroup = () => {
  return (
    <>
      <div className="absolute z-3  bottom-0 w-11/12  xl:w-[840px] 3xl:w-6/12 max-h-[300px] xl:max-h-[665px] 3xl:max-h-[630px]  right-0 xl:right-0 3xl:right-0 overflow-hidden">
        <Image src={ProofOfAlpha} alt="Proof of Alpha Stament" />
      </div>
      <div className="absolute z-5 bottom-0 xl:bottom-0 w-11/12 xl:w-130 -left-11 xl:left-32 max-h-[165px] xl:max-h-[420px] overflow-hidden">
        <Image src={TwitterCard} alt="Twitter Card" />
      </div>
    </>
  );
};

export default CardStatmentGroup;
