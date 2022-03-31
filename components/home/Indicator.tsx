interface indicatorPropTypes {
  section: 'exchange' | 'choice' | 'data';
}

/**
 * @param {string} section  String to indicate which indicator point is highlighted either 'first' | 'second' | 'third'.
 */

const Indicator = ({ section }: indicatorPropTypes) => {
  return (
    <div className="flex justify-end md:w-1/2">
      <div className="mx-3 xl:mx-4 3xl:mx-6">
        <div
          className={`${
            section === 'exchange' ? 'bg-white' : 'bg-custom-gray-indicator-dot'
          } h-3 w-3 rounded-full 3xl:h-4 3xl:w-4`}
        ></div>
      </div>
      <div className="mx-3 md:mx-6">
        <div
          className={`${
            section === 'choice' ? 'bg-white' : 'bg-custom-gray-indicator-dot'
          } h-3 w-3 rounded-full 3xl:h-4 3xl:w-4`}
        ></div>
      </div>
      <div className="mx-3 md:mx-6">
        <div
          className={`${
            section === 'data' ? 'bg-white' : 'bg-custom-gray-indicator-dot'
          } h-3 w-3 rounded-full 3xl:h-4 3xl:w-4`}
        ></div>
      </div>
    </div>
  );
};

export default Indicator;
