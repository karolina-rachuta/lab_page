import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
const LazyNews = React.lazy(() => import("./components/News"));
const LazyPeople = React.lazy(() => import("./components/People"));
const LazyPublications = React.lazy(() => import("./components/Publications"));
const LazyPositions = React.lazy(() => import("./components/Positions"));
const LazyContact = React.lazy(() => import("./components/Contact"));
// import News from './components/News';
// import People from './components/People';
// import Publications from './components/Publications';
// import Positions from './components/Positions';
// import Contact from './components/Contact';

import './styles/main.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/news" element={<React.Suspense><LazyNews/></React.Suspense>}/>
      <Route path="/people" element={<React.Suspense><LazyPeople/></React.Suspense>}/>
      <Route path="/publications" element={<React.Suspense><LazyPublications/></React.Suspense>}/>
      <Route path="/positions" element={<React.Suspense><LazyPositions/></React.Suspense>}/>
      <Route path="/contact" element={<React.Suspense><LazyContact/></React.Suspense>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
