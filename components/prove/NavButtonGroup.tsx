interface navButtonGroupProps {
  activeButton: string;
  setActiveButton: (value: string) => void;
}

const NavButtonGroup = ({
  activeButton,
  setActiveButton
}: navButtonGroupProps) => {
  console.log('button active', activeButton);
  return (
    <div className="absolute top-24 left-14 2xl:top-36 2xl:-left-36 3xl:top-52 3xl:-left-86">
      <a href="#social">
        <div
          onClick={(event) => {
            event.preventDefault;
            setActiveButton('socialBadge');
          }}
          className={` mb-1 flex h-[38px] w-[180px] items-center bg-[#FFFFFF1A] py-4 pl-5 text-xs font-extralight text-white  hover:bg-white hover:bg-opacity-20 2xl:h-[48px] 2xl:w-[280px] 3xl:h-[48px] 3xl:w-[280px] ${
            activeButton === 'socialBadge' ? 'border-l-4 ' : 'border-l-0'
          }`}
        >
          SOCIAL BADGE
        </div>
      </a>
      <a href="#trade">
        <div
          onClick={(event) => {
            event.preventDefault;
            setActiveButton('tradeStatement');
          }}
          className={`mb-1 flex h-[38px] w-[180px] items-center bg-[#FFFFFF1A] py-4 pl-5 text-xs font-extralight text-white  hover:bg-white hover:bg-opacity-20  2xl:h-[48px] 2xl:w-[280px]   3xl:h-[48px] 3xl:w-[280px] ${
            activeButton == 'tradeStatement' ? 'border-l-4' : 'border-l-0'
          } `}
        >
          TRADE STATEMENT
        </div>
      </a>
    </div>
  );
};

export default NavButtonGroup;
