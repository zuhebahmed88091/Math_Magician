import PropTypes from 'prop-types';

const operatorArray = ['÷', 'x', '-', '+', '='];

const Operators = ({ oprProps }) => (
  <div className="operatorItems">
    {operatorArray.map((operator) => (
      <button type="button" onClick={oprProps} className="button" id="op-button" key={operator}>
        {operator}
      </button>
    ))}
  </div>
);
Operators.propTypes = { oprProps: PropTypes.func.isRequired };

export default Operators;
