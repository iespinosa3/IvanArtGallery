import React from "react";
import Home from "./Home";
import ButtonAppBar from "./navBar";
import Checkout from "./Checkout";
import Login from "./Login";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes
} from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
