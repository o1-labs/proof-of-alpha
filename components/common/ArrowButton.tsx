interface arrowButtonPropTypes {
  arrowDirection: 'left' | 'right';
  arrowButtonStyle?: string;
  onClick?: () => void;
}
/**
 * @param {string} arrowDirection The direction the arrow icon points either "left" | "right".
 
 * @param {string} arrowButtonStyle Additional Tailwind CSS styles (optional).
 **/

const ArrowButton = (props: arrowButtonPropTypes) => {
  const { arrowDirection, arrowButtonStyle, onClick, ...otherProps } = props;

  const arrowPath = {
    left: 'M15 19l-7-7 7-7',
    right: 'M9 5l7 7-7 7'
  };

  return (
    <button onClick={onClick}>
      <svg
        className={`z-50 w-14 hover:stroke-white md:w-30 2xl:w-40  ${arrowButtonStyle}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="#b8b5b5"
        {...otherProps}
      >
        <path
          strokeLinecap="square"
          strokeLinejoin="inherit"
          strokeWidth=".6"
          d={`${arrowPath[arrowDirection]}`}
        />
      </svg>
    </button>
  );
};

export default ArrowButton;
