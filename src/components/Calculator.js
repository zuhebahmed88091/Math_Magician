import './calculator.css';
import { useState } from 'react';
import calculate from '../logic/calculate';
import Numbers from './numberItem';
import Operators from './operatorItem';

const CalculatorInterface = () => {
  const [calcData, setCalcData] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const { total, next, operation } = calcData;
  const handleChanges = (e) => {
    const btnName = e.target.textContent;
    const calcValue = calculate(calcData, btnName);
    setCalcData(calcValue);
  };

  return (
    <div className="calc-container">
      <h1>{'Let\'s do math...'}</h1>
      <section className="calculator">
        <div className="initial-value">
          { next || operation || total || 0 }
        </div>
        <div className="item-wrapper">
          <Numbers numProps={handleChanges} />
          <Operators oprProps={handleChanges} />
        </div>
      </section>
    </div>
  );
};

export default CalculatorInterface;
