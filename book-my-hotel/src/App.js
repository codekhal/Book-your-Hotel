/* eslint-disable no-unused-vars */
import React from 'react';

import './App.css';


import Navbar from "./components/Navbar";

import Home from "./pages/Home.js";
import Room from "./pages/Room.js";
import Register from "./pages/Register.js";
import Print from "./pages/Print.js";
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
    <Route exact path = '/register/' component = {Register} />
    <Route exact path = '/booked/' component = {Print} />
    <Route component = {Error} />
    </Switch>
        </>
  );
}

export default App;