// App.js
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Pages/Home";

const App = () => {
  return (
    <Router>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>

        {/* <Route path="/about" component={AboutUs} />
          <Route path="/professionals" component={Professionals} />
          <Route path="/services" component={Services} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/contact" component={ContactUs} /> */}
      </div>
    </Router>
  );
};

export default App;
