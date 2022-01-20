import Image from 'next/image';
import Checkmark from '../../public/assets/common/checkmark.png';

interface checkMarkItemPropTypes {
  copy: string;
}
/**
 * @param {string} copy Copy text displayed to the right of the checkmark.
 */

const CheckmarkItem = (props: checkMarkItemPropTypes) => {
  const { copy } = props;
  return (
    <div className="flex space-x-2 md:space-x-4 w-[285px] md:w-auto items-center text-sm md:text-4xl">
      <div className="w-6 h-6 md:w-10 md:h-10 relative">
        <Image src={Checkmark} alt="Blue checkmark" />
      </div>
      <p>{copy}</p>
    </div>
  );
};

export default CheckmarkItem;
