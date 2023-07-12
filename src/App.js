import './App.css';
import { Route, Routes } from 'react-router-dom';
import CalculatorInterface from './components/Calculator';
import FetchQuote from './components/quote';
import Navbar from './components/nav';
import Home from './components/home';

function App() {
  return (
    <div className="Calc-app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<FetchQuote />} />
        <Route path="/calculator" element={<CalculatorInterface />} />
      </Routes>
    </div>
  );
}

export default App;
