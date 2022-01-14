import Image from 'next/image';
import ExclamationIcon from '../../public/assets/verify/finalize/exclamation-icon.png';
import ExternalLinkIcon from '../../public/assets/common/external-link-icon.png';

const AuroNoTokensError = () => {
  return (
    <>
      <div className="flex items-center justify-end">
        <Image src={ExclamationIcon} alt="info" />
        <span className="text-2xl leading-loose ml-2 ">
          Auro Wallet must have testnet tokens to continue.
        </span>
      </div>
      <div className="flex justify-end">
        <a
          className="flex"
          target="_blank"
          href={'https://faucet.minaprotocol.com'}
        >
          <Image src={ExternalLinkIcon} alt="info" />

          <span className="flex items-center text-2x underline leading-loose ml-2 ">
            MINA FAUCET
          </span>
        </a>
      </div>
    </>
  );
};

export default AuroNoTokensError;
