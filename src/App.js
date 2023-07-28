import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import "./App.css";

// import Home from "./pages/Home";
// import About from "./pages/About";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

const App = () => {
  return (
    <div className="main">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            element={
              <Suspense fallback={<h3>Cargando...</h3>}>
                <Home />
              </Suspense>
            }
            path="/"
          />
          <Route
            element={
              <Suspense fallback={<h3>Cargando...</h3>}>
                <About />
              </Suspense>
            }
            path="about"
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
