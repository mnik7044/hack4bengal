import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import TeleMedicine from './pages/TeleMedicine';
import MentalHealth from './pages/MentalHealth';
import GenericMedicine from './pages/GenericMedicine';
import AboutUs from './pages/AboutUs';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './pages/ForgotPassword';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ProjectDetails from './pages/ProjectDetails';
import TermsOfUse from './pages/TermsOfUse';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from './components/Footer';
function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/TeleMedicine/*' element={<TeleMedicine/>}></Route>
          <Route path='/MentalHealth' element={<MentalHealth/>}></Route>
          <Route path='/GenericMedicine' element={<GenericMedicine/>}></Route>
          <Route path='/AboutUs' element={<AboutUs/>}></Route>
          <Route path='/Sign-In' element={<SignIn/>}></Route>
          <Route path='/Sign-Up' element={<SignUp/>}></Route>
          <Route path='/Profile' element={<PrivateRoute/>}>
            <Route path='/Profile' element={<Profile/>}></Route>
          </Route>
          <Route path='/Forgot-Password' element={<ForgotPassword/>}></Route>
          <Route path='/contact-us' element={<ContactUs/>}></Route>
          <Route path='/faq' element={<FAQ/>}></Route>
          <Route path='/privacy-policy' element={<PrivacyPolicy/>}></Route>
          <Route path='/project-details' element={<ProjectDetails/>}></Route>
          <Route path='/terms-of-use' element={<TermsOfUse/>}></Route>
        </Routes>
        <Footer/>
      </Router>
      <ToastContainer
      // className="rounded-lg"
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
