import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../src/components/Home'
import React from 'react';
import CardInfo from "./components/CardInfo";

function App() {

  return (
    <BrowserRouter>
      <div>
        <Home />
        <Routes>
          <Route path="/cardinfo" component={CardInfo} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
