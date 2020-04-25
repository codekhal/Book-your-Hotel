/* eslint-disable no-unused-vars */
import React from 'react';

import './App.css';


import Navbar from "./components/Navbar";

import Home from "./pages/Home.js";
import Room from "./pages/Room.js";
import Error from "./pages/Error.js";

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
    <Switch>

    <Route exact path = '/' component = {Home} />
    <Route exact path = '/room/' component = {Room} />
    <Route component = {Error} />
    </Switch>
        </>
  );
}

export default App;