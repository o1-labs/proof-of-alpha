import Image from "next/legacy/image";
import ExclamationIcon from '../../../public/assets/step/6/exclamation-icon.svg';
import ExternalLinkIcon from '../../../public/assets/common/external-link-icon.svg';

interface AuroNoWalletErrorPropTypes {
  visible?: boolean;
}
/**
 * @param {boolean} visable Boolean flag to show or hide error (optional)
 **/

const AuroError = ({ visible }: AuroNoWalletErrorPropTypes) => {
  return (
    <div className={`${visible ? 'block' : 'hidden'} `}>
      <div className="flex  items-center justify-end">
        <div className="flex w-3 items-center justify-center 2xl:w-4 3xl:w-6">
          <Image src={ExclamationIcon} alt="info" />
        </div>

        <span className="ml-2 text-sm leading-loose text-gray-300 2xl:text-xl 3xl:text-3xl ">
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
          <div className="flex items-center 2xl:mt-2 3xl:mt-3">
            <div className="flex w-5 items-center  justify-center 2xl:w-5 3xl:w-10">
              <Image src={ExternalLinkIcon} alt="info" />
            </div>
            <span className=" ml-2 text-xs text-gray-300  underline 2xl:text-base 3xl:text-2xl">
              GET AURO
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default AuroError;
