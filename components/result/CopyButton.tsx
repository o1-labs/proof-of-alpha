import Image from 'next/image';
import ShareIcon from '../../public/assets/result/share-icon.svg';

interface copyButtonPropTypes {
  copyButtonStyle?: string;
  label: string;
}
/**
 * @param {string} copyButtonStyle Additional TailwindCSS classes (optional).
 * @param {string} label Button label
 */

const CopyButton = (props: copyButtonPropTypes) => {
  const { copyButtonStyle, label, ...otherProps } = props;

  return (
    <button
      className={`
        relative w-52  items-center justify-center space-x-4 rounded border border-white bg-light-black px-3 py-2 text-xs font-normal leading-loose   tracking-xlwidest text-white hover:bg-opacity-75 active:text-custom-gray-button-border md:pr-6 lg:w-60  xl:px-3  xl:py-2  2xl:py-2   2xl:pr-7  3xl:px-4  3xl:text-base  ${copyButtonStyle}`}
      {...otherProps}
    >
      <div className="flex flex-col">
        <p className="text-left text-xs lg:text-sm">{label}</p>

        <p className="-pl-2  text-left text-[5px]  lg:text-[6px]  xl:text-[8px]">
          http://urlz.here/3dfdGs
        </p>
      </div>
      <div
        className=" absolute right-3 top-3 w-5 lg:w-6  2xl:right-4 2xl:w-7 3xl:right-5  "
        aria-hidden="true"
      >
        <Image src={ShareIcon} alt="share icon" />
      </div>
    </button>
  );
};

export default CopyButton;
