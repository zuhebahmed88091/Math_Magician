import './calculator.css';
import Numbers from './numberItem';
import Operators from './operatorItem';

const CalculatorInterface = () => (
  <div className="calc-container">
    <section className="calculator">
      <div className="initial-value">0</div>
      <div className="item-wrapper">
        <Numbers />
        <Operators />
      </div>
    </section>
  </div>
);

export default CalculatorInterface;
