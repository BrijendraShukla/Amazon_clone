import './App.css';
import Checkout from './body/Checkout';
import Header from './header/Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from '../components/header/loginPage/Login';
import Signin from '../components/header/signInPage/Signin';

function App() {
  return (
    <Router>
      <div className="app">

        <Routes>
          <Route path='/checkout' element={<><Header /><Checkout /></>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/' element={<><Header /><Home /></>} />
        </Routes>

      </div >
    </Router >
  )
}

export default App;
