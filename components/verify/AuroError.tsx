import Image from 'next/image';
import ExclamationIcon from '../../public/assets/verify/finalize/exclamation-icon.png';
import ExternalLinkIcon from '../../public/assets/common/external-link-icon.png';

const AuroError = () => {
  return (
    <>
      <div className="flex items-center justify-end  ">
        <Image src={ExclamationIcon} alt="info" />
        <span className="text-2xl leading-loose ml-2 ">
          Auro Wallet must be installed in your browser to continue.
        </span>
      </div>
      <div className="flex items-center justify-end  ">
        <a
          className="flex"
          target="_blank"
          href={
            'https://chrome.google.com/webstore/detail/auro-walletmina-protocol/cnmamaachppnkjgnildpdmkaakejnhae'
          }
        >
          <Image src={ExternalLinkIcon} alt="info" />
          <span className="text-2x underline leading-loose ml-2 ">
            GET AURO
          </span>
        </a>
      </div>
    </>
  );
};

export default AuroError;
