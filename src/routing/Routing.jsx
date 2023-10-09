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
        {/* Authentication Routes  */}
        <Route index element={<Home />} />
        <Route path="login" element={<Login/>}/>

        {/* Protected Routes  */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard/>} /> 
        </Route>
      </Routes>
    </Router>
  );
};

export default Routing;
