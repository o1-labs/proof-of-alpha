import Image from 'next/image';
import ExclamationIcon from '../../public/assets/verify/finalize/exclamation-icon.png';

interface AuroNoTestNetErrorPropTypes {
  visible?: boolean;
}
/**
 * @param {boolean} visable Boolean flag to show or hide error (optional)
 **/

const AuroNoTestNetErrorPropTypes = ({
  visible
}: AuroNoTestNetErrorPropTypes) => {
  return (
    <div
      className={`${
        visible ? 'visable' : 'invisible'
      } absolute bottom-[105px] right-72 2xl:bottom-32 2xl:right-[400px] 3xl:bottom-48 3xl:right-[700px]`}
    >
      <div className="flex items-center justify-end  ">
        <div className="w-3 2xl:w-auto">
          <Image src={ExclamationIcon} alt="info" />
        </div>
        <span className="ml-2 text-sm leading-loose 2xl:text-2xl 3xl:text-3xl ">
          Auro Wallet must be connected to zKapps testnet to continue.
        </span>
      </div>
    </div>
  );
};

export default AuroNoTestNetErrorPropTypes;
