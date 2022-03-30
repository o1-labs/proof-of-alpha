import Image from 'next/image';
import Button from '../common/Button';
import MinaPrimary from '../../public/assets/prove/mina-icon-primary.svg';

const SharedOutFooterMobile = () => {
  return (
    <div className="fixed bottom-0 z-40 h-30 w-full bg-[#79797940]/[.9] md:hidden">
      <div className="flex h-full items-center justify-around">
        <div className="flex space-x-1">
          <div className="flex w-9">
            <Image src={MinaPrimary} alt="mina logo" />
          </div>
          <div className="flex flex-col space-y-1  text-center text-[.25rem] tracking-xlwidest text-[#FF603B]">
            <p className="mt-[.3rem]">MADE</p>
            <p>ON</p>
            <p>MINA</p>
          </div>
        </div>

        <p className="w-3/12 text-center  text-[.6rem] tracking-widest  ">
          Zero-knowledge zkApps.
        </p>
        <a
          className="z-50"
          target="_blank"
          href="https://docs.minaprotocol.com/en/zkapps
          "
        >
          <Button
            label="LEARN MORE"
            buttonStyle="w-28  text-[.5rem]"
            secondary={true}
          />
        </a>
      </div>
    </div>
  );
};
export default SharedOutFooterMobile;
