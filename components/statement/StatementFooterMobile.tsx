import Image from "next/legacy/image";
import Button from '../common/Button';
import MinaPrimary from '../../public/assets/statement/mina-icon-primary.svg';

const StatementFooterMobile = () => {
  return (
    <div className="fixed bottom-0 z-40 h-18 w-full bg-[rgba(50,50,50,.6)] md:hidden">
      <div className="flex h-full items-center justify-around">
        <div className="flex space-x-1">
          <div className="flex w-9">
            <Image src={MinaPrimary} alt="mina logo" />
          </div>
          <div className="flex flex-col space-y-1  text-center text-[.25rem] tracking-xlwidest text-[#FF603B]">
            <p className="mt-[.3rem]">MADE</p>
            <p className="text-left">ON</p>
            <p>MINA</p>
          </div>
        </div>

        <p className="w-3/12 text-center  text-[.6rem] tracking-widest  ">
          Zero-Knowledge zkApps
        </p>
        <a
          className="z-50"
          target="_blank"
          href="https://docs.minaprotocol.com/en/zkapps
          "
        >
          <Button
            label="LEARN MORE"
            buttonStyle="text-[.5em] w-28  hover:bg-white hover:bg-opacity-10"
          />
        </a>
      </div>
    </div>
  );
};
export default StatementFooterMobile;
