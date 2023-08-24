import Image from "next/image";
import ExclamationIcon from '../../../public/assets/step/6/exclamation-icon.svg';

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
    <div className={`${visible ? 'block' : 'hidden'} `}>
      <div className="flex items-center justify-end">
        <div className="w-3 2xl:w-auto">
          <Image
            src={ExclamationIcon}
            alt="info"
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </div>
        <span className="ml-2 text-sm leading-loose text-gray-300 2xl:text-xl 3xl:text-3xl">
          Auro Wallet must be connected to zkApps testnet to continue.
        </span>
      </div>
    </div>
  );
};

export default AuroNoTestNetErrorPropTypes;
