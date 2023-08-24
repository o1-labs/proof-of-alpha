import Image from "next/image";
import Checkmark from '../../public/assets/common/checkmark.svg';

interface checkMarkItemPropTypes {
  copy: string;
}
/**
 * @param {string} copy Copy text displayed to the right of the checkmark.
 */

const CheckmarkItem = (props: checkMarkItemPropTypes) => {
  const { copy } = props;
  return (
    <div className="flex w-[285px] items-center space-x-2 text-sm md:w-auto md:space-x-4 md:text-2xl 2xl:text-3xl 3xl:text-4xl">
      <div className="relative h-6 w-6 md:h-10 md:w-10">
        <Image
          src={Checkmark}
          alt="Blue checkmark"
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </div>
      <p>{copy}</p>
    </div>
  );
};

export default CheckmarkItem;
