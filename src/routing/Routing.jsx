import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Layout from "../components/menucomponent/Layout";
import Home from "../pages/Home";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<Login/>}/>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routing;
