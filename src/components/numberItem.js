import PropTypes from 'prop-types';

const numArr = ['AC', '+/-', '%', 7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];
const Numbers = ({ numProps }) => (
  <div className="numberItems">
    {numArr.map((number) => (
      <button type="button" onClick={numProps} className="button" key={number}>
        { number }
      </button>
    ))}
  </div>
);
Numbers.propTypes = { numProps: PropTypes.func.isRequired };
export default Numbers;
