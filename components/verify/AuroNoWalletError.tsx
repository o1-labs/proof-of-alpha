import Image from 'next/image';
import ExclamationIcon from '../../public/assets/verify/finalize/exclamation-icon.png';
import ExternalLinkIcon from '../../public/assets/common/external-link-icon.png';

interface AuroNoWalletErrorPropTypes {
  visible?: boolean;
}
/**
 * @param {boolean} visable Boolean flag to show or hide error (optional)
 **/

const AuroError = ({ visible }: AuroNoWalletErrorPropTypes) => {
  return (
    <div
      className={`${
        visible ? 'visable' : 'invisible'
      } absolute bottom-[105px] right-72 2xl:bottom-32 2xl:right-[400px] 3xl:bottom-48 3xl:right-[700px]`}
    >
      <div
        className={`flex  items-center justify-end ${
          visible ? 'visable' : 'invisible'
        }  `}
      >
        <div className="w-3">
          <Image src={ExclamationIcon} alt="info" />
        </div>

        <span className="text-sm 2xl:text-2xl 3xl:text-3xl leading-loose ml-2 ">
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
          <div className="flex items-center justify-center w-5 2xl:w-8 3xl:w-7">
            <Image src={ExternalLinkIcon} alt="info" />
          </div>
          <span className="text-xs 2xl:text-xl underline leading-loose ml-2 ">
            GET AURO
          </span>
        </a>
      </div>
    </div>
  );
};

export default AuroError;
