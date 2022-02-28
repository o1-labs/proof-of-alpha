import Image from 'next/image';
import ExclamationIcon from '../../public/assets/verify/finalize/exclamation-icon.png';
import ExternalLinkIcon from '../../public/assets/common/external-link-icon.png';
interface AuroNoTokensErrorPropTypes {
  visible?: boolean;
}
/**
 * @param {boolean} visable Boolean flag to show or hide error (optional)
 **/
const AuroNoTokensError = ({ visible }: AuroNoTokensErrorPropTypes) => {
  return (
    <div
      className={`${
        visible ? 'visable' : 'invisible'
      } 3xl:bottom-48 3xl:right-[700px] absolute bottom-[105px] right-72 2xl:bottom-32 2xl:right-[400px]`}
    >
      <div className="flex items-center justify-end">
        <div className="w-3 2xl:w-auto">
          <Image loader={({ src }) => src} src={ExclamationIcon} alt="info" />
        </div>
        <span className="3xl:text-3xl ml-2 text-sm leading-loose 2xl:text-2xl ">
          Auro Wallet must have testnet tokens to continue.
        </span>
      </div>
      <div className="flex justify-end">
        <a
          className="flex"
          target="_blank"
          href={'https://faucet.minaprotocol.com'}
        >
          <div className="3xl:w-7 flex w-5 items-center justify-center 2xl:w-8">
            <Image
              loader={({ src }) => src}
              src={ExternalLinkIcon}
              alt="info"
            />
          </div>
          <span className="ml-2 flex items-center text-xs leading-loose underline 2xl:text-xl ">
            MINA FAUCET
          </span>
        </a>
      </div>
    </div>
  );
};

export default AuroNoTokensError;
