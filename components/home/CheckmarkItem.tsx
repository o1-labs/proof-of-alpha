import React, { ButtonHTMLAttributes } from 'react';
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
    <div className="flex space-x-2 text-4xl ">
      <div className="w-10 h-10 relative">
        <Image src={Checkmark} alt="Blue checkmark" />
      </div>
      <p>{copy}</p>
    </div>
  );
};

export default CheckmarkItem;
