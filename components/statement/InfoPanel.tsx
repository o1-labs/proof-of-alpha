import Image from 'next/image';
import Link from 'next/link';
import Button from '../common/Button';
import TransparentButton from '../common/TransparentButton';
import ShieldIcon from '../../public/assets/statement/shield-icon.svg';
import ArrowIcon from '../../public/assets/common/arrow-icon.svg';

interface infoPanelPropTypes {
  txid: string | string[];
}

const InfoPanel = ({ txid }: infoPanelPropTypes) => {
  return (
    <div className="mt-14  md:mt-64 2xl:mx-auto 3xl:mx-0 3xl:mt-86">
      <div className="mb-20 flex flex-col items-center 2xl:mb-20 3xl:mb-28">
        <p className="text-[.6em] leading-5 tracking-widest md:text-xs md:leading-none md:tracking-wide xl:text-sm 3xl:text-lg">
          GET YOUR FREE PROOF OF
        </p>
        <p className="mb-4 text-[.6em] tracking-widest md:text-xs md:tracking-wide xl:text-sm 2xl:mb-5 3xl:mb-6 3xl:text-lg">
          ALPHA STATMENT
        </p>
        <Link href={'/get-started'} passHref>
          <Button
            label="GENERATE IT NOW"
            buttonStyle="text-[.6em] md:text-[.5em] 3xl:text-xs w-4/12 md:w-8/12  hover:bg-white hover:bg-opacity-10"
          />
        </Link>
      </div>
      <div className="flex flex-col items-center space-y-2 2xl:space-y-1 3xl:space-y-3 ">
        <div className="w-8 lg:w-8 2xl:w-10">
          <Image src={ShieldIcon} alt="shield icon" />
        </div>
        <p className="text-[.65em] font-medium md:text-xs 2xl:text-base  3xl:text-lg">
          How do you know this proof is valid?
        </p>
        <p className="text-[.55em] md:text-xs 2xl:text-sm 3xl:text-base">
          Transactions that are accepted by the Mina
        </p>
        <p className="text-[.55em] md:text-xs 2xl:text-sm 3xl:text-base">
          blockchain are considered valid.
        </p>
        <a
          target="_blank"
          href={`https://berkeley.minaexplorer.com/transaction/${txid}`}
        >
          <div className="flex items-center hover:underline">
            <div className="w-2 2xl:w-2 3xl:w-3">
              <Image src={ArrowIcon} alt="arrow icon" />
            </div>
            <TransparentButton
              label="VIEW PROOF ON MINA EXPLORER"
              buttonStyle="text-[.4rem] md:text-[8px] text-[#C4C4C4]  2xl:tracking-normal 2xl:text-[11px] 3xl:text-xs hover:underline z-10 "
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default InfoPanel;
