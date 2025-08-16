import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Signup from './Page/Signup';
import Hero from './Page/Hero';
// import Login from './Component/Login';
// import EmailVerification from './Pages/emailverification';


// import Sensation from './Pages/Sensation';
// import { HolySpirit } from './Pages/HolySpirit';
// import { NewEvent } from './Pages/NewEvent';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/hero" element={<Hero />} />


        {/* <Route path="/emailverification" element={<EmailVerification />} />
          {/* <Route path="/login" element={<Login />} /> */}
        
         
           {/* <Route path="/holyspirit" element={<HolySpirit />} />
        <Route path="/sensation" element={<Sensation />} />
        <Route path="/newevent" element={<NewEvent />} />
         */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

