import Image from 'next/image';
import ExclamationIcon from '../../public/assets/verify/finalize/exclamation-icon.svg';
import ExternalLinkIcon from '../../public/assets/common/external-link-icon.svg';
interface AuroNoTokensErrorPropTypes {
  visible?: boolean;
}
/**
 * @param {boolean} visable Boolean flag to show or hide error (optional)
 **/
const AuroNoTokensError = ({ visible }: AuroNoTokensErrorPropTypes) => {
  return (
    <div className={`${visible ? 'block' : 'hidden'} `}>
      <div className="flex items-center justify-end">
        <div className="flex w-3 items-center justify-center 2xl:w-4 3xl:w-6">
          <Image src={ExclamationIcon} alt="info" />
        </div>
        <span className="ml-2 text-sm leading-loose text-gray-300 2xl:text-xl 3xl:text-3xl ">
          Auro Wallet must have testnet tokens to continue.
        </span>
      </div>
      <div className="flex justify-end">
        <a
          className="flex"
          target="_blank"
          href={'https://faucet.minaprotocol.com'}
        >
          <div className="flex w-5 items-center  justify-center 2xl:w-5 3xl:w-10">
            <Image src={ExternalLinkIcon} alt="info" />
          </div>
          <span className=" ml-2 text-xs text-gray-300  underline 2xl:text-base 3xl:text-2xl">
            MINA FAUCET
          </span>
        </a>
      </div>
    </div>
  );
};

export default AuroNoTokensError;
