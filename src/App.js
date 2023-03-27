import './App.css';

import Sign_in from './Pages/Sign_in';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Pages/Main';
import { AnimatePresence } from "framer-motion";
import Otp from './Pages/Otp';

function App() {
  return (
    <div className="App">
      <AnimatePresence mode='wait'>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Main />} />
            <Route exact path='/otp' element={<Otp />} />
            <Route exact path='/signin' element={<Sign_in />} />
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </div>
  );
}

export default App;
