import './App.css';
import LoginPage from './components/Login/LoginPage';
import DiscountPage from './components/Discount/DiscountPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/discount" element={<DiscountPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
