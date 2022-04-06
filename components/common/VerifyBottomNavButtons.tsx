import Link from 'next/link';
import TransparentButton from './TransparentButton';
import Button from './Button';

interface bottomNavButtonsPropTypes {
  backNavLink: string;
  continueNavLink: string;
  disabled?: boolean;
  bottomNavButtonsStyle?: string;
}
/**
 * @param {string} backNavLink Routing link string specifying where to navigate to when back button is clicked is clicked ie '/get-started' https://nextjs.org/docs/api-reference/next/link .
 * @param {string} continueNavLink Routing link string specifying where to navigate to when continue button is clicked is clicked ie '/get-started' https://nextjs.org/docs/api-reference/next/link .
 * @param {string} bottomNavButtonsStyle Additional Tailwind CSS styles (optional).
 * @param {boolean} disabled Boolean to set button as disabled (optional).
 **/

const BottomNavButtons = (props: bottomNavButtonsPropTypes) => {
  const {
    backNavLink,
    continueNavLink,
    bottomNavButtonsStyle,
    disabled,
    ...otherProps
  } = props;

  return (
    <div className={`flex justify-between pt-2  ${bottomNavButtonsStyle}`}>
      <Link href={`${backNavLink}`} passHref>
        <TransparentButton
          buttonStyle="lg:w-3/12  w-4/12 text-[.65em] lg:text-sm 2xl:text-base 3xl:text-xl"
          label="<< &nbsp;BACK"
        />
      </Link>
      <Link href={`${continueNavLink}`} passHref>
        <Button
          buttonStyle="lg:w-4/12 text-[.65em] lg:text-sm w-4/12 2xl:w-3/12 2xl:text-base 3xl:text-xl"
          label="CONTINUE &nbsp;>>"
          disabled={disabled}
        />
      </Link>
    </div>
  );
};

export default BottomNavButtons;
