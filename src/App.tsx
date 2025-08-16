import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Signup from './Page/Signup';
import Hero from './Page/Hero';
import { Newevent } from './Page/Newevent';
import Inspiration from './Page/Inspiration';
import CareerEducationPage from './Page/CareerEducationPage';
import Sensation from './Page/Sensation';
import HolySpirit from './Page/Holyspirit';
import Header from './Component/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Routes without Header */}
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/careers/:careerId" element={<CareerEducationPage />} />

          {/* Routes with Header */}
          <Route path="/newevent" element={
            <>
              <Header />
              <Newevent />
            </>
          } />
          <Route path="/inspiration" element={
            <>
              <Header />
              <Inspiration />
            </>
          } />
          <Route path="/sensation" element={
            <>
              <Header />
              <Sensation />
            </>
          } />
          <Route path="/holyspirit" element={
            <>
              <Header />
              <HolySpirit />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;