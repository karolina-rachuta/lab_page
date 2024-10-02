import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import News from './components/News';
import People from './components/People';
import Publications from './components/Publications';
import Positions from './components/Positions';
import Contact from './components/Contact';

import './styles/main.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/news" element={<News/>}/>
      <Route path="/people" element={<People/>}/>
      <Route path="/publications" element={<Publications/>}/>
      <Route path="/positions" element={<Positions/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
