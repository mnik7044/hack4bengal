import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import TeleMedicine from './pages/TeleMedicine';
import MentalHealth from './pages/MentalHealth';
import GenericMedicine from './pages/GenericMedicine';
import AboutUs from './pages/AboutUs';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Header from './components/Header';
function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/TeleMedicine' element={<TeleMedicine/>}></Route>
          <Route path='/MentalHealth' element={<MentalHealth/>}></Route>
          <Route path='/GenericMedicine' element={<GenericMedicine/>}></Route>
          <Route path='/AboutUs' element={<AboutUs/>}></Route>
          <Route path='/Profile' element={<Profile/>}></Route>
          <Route path='/Sign-In' element={<SignIn/>}></Route>
          <Route path='/Sign-Up' element={<SignUp/>}></Route>
          <Route path='/Forgot-Password' element={<ForgotPassword/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
