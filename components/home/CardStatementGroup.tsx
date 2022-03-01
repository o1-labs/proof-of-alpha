import Image from 'next/image';
import ProofOfAlpha from '../../public/assets/home/proof-of-alpha-home.png';
import TwitterCard from '../../public/assets/common/twitter-card.png';

const CardStatmentGroup = () => {
  return (
    <>
      <div className="z-3 3xl:w-6/12 3xl:max-h-[750px] 3xl:right-0 3xl:-bottom-0 absolute right-0 bottom-0 max-h-[320px] w-11/12 overflow-hidden  md:right-1 md:max-h-[375px] md:w-[640px] xl:-bottom-10 xl:right-0  xl:max-h-[350px] xl:w-[340px]  2xl:-right-28 2xl:bottom-0 2xl:max-h-[570px] 2xl:w-[560px]">
        <Image
          layout="responsive"
          src={ProofOfAlpha}
          alt="Proof of Alpha Statement"
        />
      </div>
      <div className="z-5 3xl:w-9/12 3xl:left-32 3xl:max-h-[450px] 3xl:bottom-0 xl-w-[580px] lg-max-h-[200px] lg-bottom-0 lg:left-100 absolute bottom-0 -left-11 max-h-[175px]  w-11/12 overflow-hidden md:bottom-0 md:left-20 md:max-h-[240px] md:w-[670px] lg:w-[300px] xl:left-44 xl:-bottom-10  xl:max-h-[240px] xl:w-7/12 2xl:bottom-0 2xl:left-36 2xl:max-h-[360px] 2xl:w-[820px]">
        <Image layout="responsive" src={TwitterCard} alt="Twitter Card" />
      </div>
    </>
  );
};

export default CardStatmentGroup;
