import React from 'react';

import './App.css';

import Home from "./pages/Home.js";
import Room from "./pages/Room.js";
import Error from "./pages/Error.js";

import Navbar from "./components/Navbar";

import { Route, Switch } from "module";
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
