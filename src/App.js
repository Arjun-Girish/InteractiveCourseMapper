import React from 'react'
import {Header, Navbar, Footer, Grid, Hero} from './components/index';
import LandingPage from './LandingPage';
import Main from './Main';

import {Route, Routes, BrowserRouter} from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/main" element={<Main/>}/>
    </Routes>
  )
}

export default App