import Link from 'next/link';
import Image from 'next/image';
import TransparentButton from '../common/TransparentButton';
import ExternalLinkIcon from '../../public/assets/common/external-link-icon.svg';
import Button from '../common/Button';

interface auroBottomNavButtonsPropTypes {
  backNavLink: string;
  continueNavLink: string;
  externalButton: boolean;
  externalButtonNavLink?: string;
  externalButtonLabel?: string;
  auroBottomNavButtonsStyle?: string;
}
/**
 * @param {string} arrowDirection The direction the arrow icon points either "left" | "right".
 * @param {string} backNavLink Routing link string specifying where to navigate to when back button is clicked is clicked ie '/start' https://nextjs.org/docs/api-reference/next/link .
 * @param {string} continueNavLink Routing link string specifying where to navigate to when continue button is clicked is clicked ie '/start' https://nextjs.org/docs/api-reference/next/link .
 * @param {boolean} externalButton Boolean specifing if there is an externalLink middle button.
 * @param {string} externalButtonNavLink Link url string specifying where to navigate externally when middle button is clicked ie 'https://faucet.minaprotocol.com'.
 * @param {string} externalButtonLabel String label for middle external link button.
 * @param {string} auroBottomNavButtonsStyle Additional Tailwind CSS styles (optional).
 **/

const AuroBottomNavButtons = (props: auroBottomNavButtonsPropTypes) => {
  const {
    backNavLink,
    continueNavLink,
    externalButtonNavLink,
    externalButtonLabel,
    externalButton,
    auroBottomNavButtonsStyle,
    ...otherProps
  } = props;

  return (
    <div
      className={`flex justify-between md:pt-10 2xl:pt-12 ${auroBottomNavButtonsStyle}`}
    >
      <Link href={`${backNavLink}`} passHref>
        <TransparentButton
          buttonStyle="px-20 text-sm 2xl:text-base 3xl:text-xl"
          label="<< &nbsp;BACK"
        ></TransparentButton>
      </Link>

      <div
        className={`${externalButton ? ' flex justify-center' : 'invisible'} `}
      >
        <a target="_blank" href={externalButtonNavLink}>
          <Button buttonStyle="w-52 2xl:w-60 3xl:w-72 px-2 text-xs 2xl:text-base 3xl:text-xl py-3">
            <div className="flex w-5 items-center  2xl:h-8 2xl:w-7   3xl:w-9 ">
              <Image src={ExternalLinkIcon} alt="external link icon" />
            </div>
            <div className="px-2">{externalButtonLabel}</div>
          </Button>
        </a>
      </div>

      <Link href={`${continueNavLink}`} passHref>
        <TransparentButton
          buttonStyle="px-20 text-sm 2xl:text-base 3xl:text-xl"
          label="CONTINUE  &nbsp;>>"
        />
      </Link>
    </div>
  );
};

export default AuroBottomNavButtons;
