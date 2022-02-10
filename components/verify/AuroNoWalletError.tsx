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
      } 3xl:bottom-52 3xl:right-[640px] xl:bottom-15 absolute bottom-[105px] right-72 2xl:bottom-40 2xl:right-[400px]`}
    >
      <div
        className={`flex  items-center justify-end ${
          visible ? 'visable' : 'invisible'
        }  `}
      >
        <div className="w-3">
          <Image src={ExclamationIcon} alt="info" />
        </div>

        <span className="3xl:text-3xl ml-2 text-sm leading-loose 2xl:text-2xl ">
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
          <div className="3xl:w-7 flex w-5 items-center justify-center 2xl:w-8">
            <Image src={ExternalLinkIcon} alt="info" />
          </div>
          <span className="ml-2 text-xs leading-loose underline 2xl:text-xl ">
            GET AURO
          </span>
        </a>
      </div>
    </div>
  );
};

export default AuroError;
