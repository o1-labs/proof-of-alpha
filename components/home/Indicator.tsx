interface indicatorPropTypes {
  page: 'first' | 'second' | 'third';
}

/**
 * @param {string} page  String to indicate which indicator point is highlighted either 'first' | 'second' | 'third'.
 */

const Indicator = ({ page }: indicatorPropTypes) => {
  return (
    <div className="flex justify-end md:w-1/2">
      <div className="mx-3 md:mx-6">
        <div
          className={`${
            page === 'first' ? 'bg-white' : 'bg-custom-gray-indicator-dot'
          } w-3 h-3 md:w-4 md:h-4 rounded-full`}
        ></div>
      </div>
      <div className="mx-3 md:mx-6">
        <div
          className={`${
            page === 'second' ? 'bg-white' : 'bg-custom-gray-indicator-dot'
          } w-3 h-3 md:w-4 md:h-4 rounded-full`}
        ></div>
      </div>
      <div className="mx-3 md:mx-6">
        <div
          className={`${
            page === 'third' ? 'bg-white' : 'bg-custom-gray-indicator-dot'
          } w-3 h-3 md:w-4 md:h-4 rounded-full`}
        ></div>
      </div>
    </div>
  );
};

export default Indicator;
