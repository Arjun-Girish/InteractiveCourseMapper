import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import SpecialisationPage from './SpecialisationPage';

const App = () => {
  return (
    <Routes>
    <Route path="/main" element={<Main/>}/>
    <Route path="/specialisationpage" element={<SpecialisationPage/>}/>
  </Routes>
  )
}

export default App