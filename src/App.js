import './App.css';
import CalculatorInterface from './components/Calculator';
import FetchQuote from './components/quote';

function App() {
  return (
    <div>
      <div><CalculatorInterface /></div>
      <div><FetchQuote /></div>
    </div>
  );
}

export default App;
