
import React from 'react';
import './App.css';
import {BrowserRouter,Switch ,Route} from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './components/Landing/landing_page.jsx';
import Postview from './components/postview/postview.jsx';

function App() {
  return (
   
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/postview" component={Postview}></Route>
          {/* <Route path="/register" caseSensitive={false} element={<Register />} /> */}
        </Switch>
     </BrowserRouter>
    
  );
}

export default App;
