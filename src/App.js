import './App.css';
import DiscountPage from './components/Discount/DiscountPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/discount" element={<DiscountPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
