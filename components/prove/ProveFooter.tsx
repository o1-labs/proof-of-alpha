import Image from 'next/image';
import MadeOnMinaLogo from '../../public/assets/prove/made-on-mina-logo.svg';
import Button from '../common/Button';

const ProveFooter = () => {
  return (
    <div className="absolute  bottom-0 h-2/6 w-full   bg-[#79797940] 2xl:h-1/4  3xl:h-1/4">
      <div className="flex h-full flex-col   items-center justify-center space-y-4 2xl:space-y-9  3xl:space-y-10 ">
        <div className="xl:w-26  w-24 2xl:w-28 3xl:w-auto">
          <Image src={MadeOnMinaLogo} alt="mina logo" />
        </div>
        <p className="text-base tracking-wider 2xl:text-1.5xl 3xl:text-3xl">
          zero-knowledge proof-powered dApps
        </p>
        <a target="_blank" href="https://docs.minaprotocol.com/en/zkapps">
          <Button
            label="LEARN MORE"
            buttonStyle="w-36 w  2xl:w-48  3xl:w-52 text-xs 2xl:text-base 3xl:text-base"
            secondary={true}
          />
        </a>
      </div>
    </div>
  );
};

export default ProveFooter;
