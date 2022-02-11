import Link from 'next/link';
import TransparentButton from '../common/TransparentButton';
import Button from '../common/Button';

interface bottomNavButtonsPropTypes {
  backNavLink: string;
  continueNavLink: string;
  bottomNavButtonsStyle?: string;
}
/**
 * @param {string} arrowDirection The direction the arrow icon points either "left" | "right".
 * @param {string} backNavLink Routing link string specifying where to navigate to when back button is clicked is clicked ie '/start' https://nextjs.org/docs/api-reference/next/link .
 * @param {string} continueNavLink Routing link string specifying where to navigate to when continue button is clicked is clicked ie '/start' https://nextjs.org/docs/api-reference/next/link .
 * @param {string} arrowButtonStyle Additional Tailwind CSS styles (optional).
 **/

const BottomNavButtons = (props: bottomNavButtonsPropTypes) => {
  const { backNavLink, continueNavLink, bottomNavButtonsStyle, ...otherProps } =
    props;

  return (
    <div className={`flex justify-between pt-20 ${bottomNavButtonsStyle}`}>
      <Link href={`${backNavLink}`} passHref>
        <TransparentButton
          buttonStyle="w-3/12 text-sm 2xl:text-xl 3xl:text-2xl"
          label="<< BACK"
        />
      </Link>
      <Link href={`${continueNavLink}`} passHref>
        <Button
          buttonStyle="w-3/12 text-sm 2xl:text-xl 3xl:text-2xl"
          label="CONTINUE  >>"
        />
      </Link>
    </div>
  );
};

export default BottomNavButtons;
