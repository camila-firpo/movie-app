import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../src/components/Home'
import React from 'react';
import CardInfo from "./components/CardInfo";

function App() {

  return (
    <BrowserRouter>
      <div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardinfo" element={<CardInfo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
