import Image from 'next/image';
import ProofOfAlpha from '../../public/assets/home/proof-of-alpha-home.png';
import TwitterCard from '../../public/assets/common/twitter-card.png';

const CardGroupStart = () => {
  return (
    <>
      <div className="z-3 3xl:w-9/12  3xl:max-h-[900px] 3xl:right-0 3xl:bottom-60 absolute bottom-0 right-0 max-h-[230px] w-11/12 overflow-hidden md:right-1 md:max-h-[375px] md:w-[640px]  xl:right-0 xl:w-[840px] 2xl:bottom-44 2xl:right-0 2xl:max-h-[580px] 2xl:w-7/12">
        <Image
          loader={({ src }) => src}
          layout="responsive"
          src={ProofOfAlpha}
          alt="Proof of Alpha Statement"
        />
      </div>
      <div className="z-5 xl:w-130 3xl:w-10/12 3xl:-left-24 3xl:max-h-[520px] 3xl:bottom-60 absolute bottom-0 -left-11 max-h-[165px] w-11/12 overflow-hidden md:bottom-0 md:left-20 md:max-h-[240px] md:w-[670px] xl:bottom-0 xl:left-32 xl:max-h-[420px] 2xl:bottom-44 2xl:-left-14 2xl:max-h-[400px] 2xl:w-9/12">
        <Image
          loader={({ src }) => src}
          layout="responsive"
          src={TwitterCard}
          alt="Twitter Card"
        />
      </div>
    </>
  );
};

export default CardGroupStart;
