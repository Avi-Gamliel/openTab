import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import base from './base64.js'
import Iframe from './Iframe.js'
import PdfViewr from './PdfViewr.js'
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
function App() {

const base64 = 'asdasdasdasdasd'

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<PdfViewr />} />
          <Route path='/list' element={<PdfViewr base64={base64} />} />
        </Routes>
      </Router>
      <Iframe src={base} />
    </div>
  );
}

export default App;
