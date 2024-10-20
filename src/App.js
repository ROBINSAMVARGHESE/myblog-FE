import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import RootLayout from "./RootLayout/RootLayout";
import Home from "./Pages/Home/Home";
import Blogscomponents from "./Pages/Blog/Blogs";
import "./App.css";
import { Auth, AvoidLogin } from "./Auth/Author";



function App() {
  return (
    <Router>
      <Routes>
        {/* <Route element={<AvoidLogin/>}> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        {/* </Route> */}

        {/* <Route element={<Auth/>}> */}
          <Route path="/*" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="blog" element={<Blogscomponents/>} />
          </Route>
        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
