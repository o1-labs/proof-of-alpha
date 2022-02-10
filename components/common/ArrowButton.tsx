import Link from 'next/link';

interface arrowButtonPropTypes {
  arrowDirection: 'left' | 'right';
  navLink: string;
  arrowButtonStyle?: string;
}
/**
 * @param {string} arrowDirection The direction the arrow icon points either "left" | "right".
 * @param {string} navLink Routing link string specifying where to navigate to when arrow is clicked ie '/start' https://nextjs.org/docs/api-reference/next/link .
 * @param {string} arrowButtonStyle Additional Tailwind CSS styles (optional).
 **/

const ArrowButton = (props: arrowButtonPropTypes) => {
  const { arrowDirection, navLink, arrowButtonStyle, ...otherProps } = props;

  const arrowPath = {
    left: 'M15 19l-7-7 7-7',
    right: 'M9 5l7 7-7 7'
  };

  return (
    <Link href={navLink} passHref>
      <svg
        className={`w-14 hover:stroke-white md:w-40 ${arrowButtonStyle}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="#b8b5b5"
        {...otherProps}
      >
        <path
          stroke-linecap="line"
          stroke-linejoin="line"
          stroke-width=".6"
          d={`${arrowPath[arrowDirection]}`}
        />
      </svg>
    </Link>
  );
};

export default ArrowButton;
