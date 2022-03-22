import Image from 'next/image';
import Button from '../common/Button';
import MinaPrimary from '../../public/assets/prove/mina-icon-primary.png';

const SharedOutFooterMobile = () => {
  return (
    <div className="fixed bottom-0  bg-[#79797940]">
      <div className="flex h-full items-center justify-around">
        <div className="flex w-10 ">
          <Image src={MinaPrimary} alt="mina logo" />
        </div>

        <p className="w-4/12  text-center text-xs tracking-widest  ">
          Zero-knowledge zkApps.
        </p>
        <a
          target="_blank"
          href="https://docs.minaprotocol.com/en/zkapps
          "
        >
          <Button
            label="LEARN MORE"
            buttonStyle="w-30  mb-10 text-[.5rem]  "
            secondary={true}
          />
        </a>
      </div>
    </div>
  );
};
export default SharedOutFooterMobile;
