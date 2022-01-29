import Dropdown from '../common/Dropdown';
const TokenPairGroup = () => {
  return (
    <div className="flex items-center">
      <span className="text-lg 2xl:text-4xl leading-loose  w-1/3">
        Token pair
      </span>
      <div className="flex w-2/3">
        <Dropdown />
      </div>
    </div>
  );
};

export default TokenPairGroup;
