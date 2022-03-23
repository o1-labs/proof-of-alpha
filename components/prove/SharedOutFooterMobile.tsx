import Image from 'next/image';
import Button from '../common/Button';
import MinaPrimary from '../../public/assets/prove/mina-icon-primary.png';

const SharedOutFooterMobile = () => {
  return (
    <div className="fixed bottom-0 z-50 h-16 w-full bg-[#79797940]/75 md:hidden">
      <div className="flex h-full items-center justify-around">
        <div className="flex space-x-1">
          <div className="flex w-7">
            <Image src={MinaPrimary} alt="mina logo" />
          </div>
          <div className="flex flex-col text-[.2rem] tracking-xlwidest text-[#FF603B]">
            <p className="mt-1   text-center">MADE</p>
            <p className="mt-1  text-center">ON</p>
            <p className="mt-1  text-center">MINA</p>
          </div>
        </div>

        <p className="w-3/12 text-center  text-[.5rem] tracking-widest  ">
          Zero-knowledge zkApps.
        </p>
        <a
          target="_blank"
          href="https://docs.minaprotocol.com/en/zkapps
          "
        >
          <Button
            label="LEARN MORE"
            buttonStyle="w-24  text-[.4rem]  "
            secondary={true}
          />
        </a>
      </div>
    </div>
  );
};
export default SharedOutFooterMobile;
