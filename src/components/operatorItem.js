const operatorArray = ['÷', '*', '-', '+', '='];

const Operators = () => (
  <div className="operatorItems">
    {operatorArray.map((operator) => (
      <div className="button" key={operator}>
        {operator}
      </div>
    ))}
  </div>
);

export default Operators;
