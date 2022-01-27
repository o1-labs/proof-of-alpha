const NavButtonGroup = () => {
  return (
    <div className="absolute top-24 2xl:top-36 3xl:top-52 left-14 2xl:-left-36 3xl:-left-86">
      <a href="#social">
        <div className="bg-[#FFFFFF1A] w-[180px] 2xl:w-[280px] 3xl:w-[280px] h-[38px] 2xl:h-[48px] 3xl:h-[48px] text-white text-xs font-extralight py-3 pl-5 mb-1 active:border-l-2 hover:border-l-2">
          SOCIAL BADGE
        </div>
      </a>
      <a href="#proof">
        <div className="bg-[#FFFFFF1A] w-[180px] 2xl:w-[280px] 3xl:w-[280px] h-[38px] 2xl:h-[48px] 3xl:h-[48px] text-white text-xs font-extralight py-3 pl-5 mb-1 active:border-l-2 hover:border-l-2">
          TRADE STATEMENT
        </div>
      </a>
    </div>
  );
};

export default NavButtonGroup;
