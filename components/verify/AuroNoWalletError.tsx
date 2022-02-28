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
    // 3xl:-bottom-48 3xl:right-[640px]  xl-right-[640px] 3xl:pb-4 absolute bottom-[105px] right-72 2xl:-bottom-52 2xl:right-[400px]
    <div className={`${visible ? 'visable' : 'invisible'} `}>
      <div
        className={`flex  items-center justify-end ${
          visible ? 'visable' : 'invisible'
        }  `}
      >
        <div className="3xl:w-6 flex w-3 items-center justify-center 2xl:w-4">
          <Image loader={({ src }) => src} src={ExclamationIcon} alt="info" />
        </div>

        <span className="3xl:text-3xl ml-2 text-sm leading-loose text-gray-300 2xl:text-xl ">
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
          <div className="3xl:mt-3 2xl flex items-center">
            <div className="3xl:w-10 flex w-5  items-center justify-center 2xl:w-5">
              <Image
                loader={({ src }) => src}
                src={ExternalLinkIcon}
                alt="info"
              />
            </div>
            <span className=" 3xl:text-2xl ml-2 text-xs  text-gray-300 underline 2xl:text-base">
              GET AURO
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default AuroError;
