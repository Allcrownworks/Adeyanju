import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Signup from './Page/Signup';
import Hero from './Page/Hero';
import { Newevent } from './Page/Newevent';
// import Test from './Page/test';
import Inspiration from './Page/Inspiration';
import CareerEducationPage from './Page/CareerEducationPage';
import Sensation from './Page/Sensation';
// import Login from './Component/Login';
// import EmailVerification from './Pages/emailverification';


// import { HolySpirit } from './Pages/HolySpirit';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/hero" element={<Hero />} />
        {/* <Route path="/test" element={<Test />} /> */}
        <Route path="/newevent" element={<Newevent />} />
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path="/careers/:careerId" element={<CareerEducationPage />} />
         <Route path="/sensation" element={<Sensation />} />


        {/* <Route path="/emailverification" element={<EmailVerification />} />
          {/* <Route path="/login" element={<Login />} /> */}
        
         
           {/* <Route path="/holyspirit" element={<HolySpirit />} />
       
        <Route path="/newevent" element={<NewEvent />} />
         */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

