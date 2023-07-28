# PROYECTO REACT PARA PRODUCCION

- React con librerias que permite proyecto SEO 

## Available Scripts

In the project directory, you can run:

```
=============
package.json
=============
{
  "name": "react-prod",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
     ***
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-helmet": "^6.1.0",
    "react-router-dom": "^6.14.2",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
     ***
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "postbuild": "react-snap",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "reactSnap": {
    "source": "build",
    "minifyHtml": {
      "collapseWhitespace": false,
      "removeComments": false
    }
  },
  ***
  "devDependencies": {
    "react-snap": "^1.23.0"
  }
}
```

```
======= 
App.jsx
=======
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
```

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `Subir a netlify`
![netf-1Captura](https://github.com/wlopera/react-prod/assets/7141537/8696782d-d41b-4539-bd5e-60a4d5f865b1)
![netf-2Captura](https://github.com/wlopera/react-prod/assets/7141537/462576e9-3436-4a1d-9992-ab850b3b3fcb)
![netf-3Captura](https://github.com/wlopera/react-prod/assets/7141537/d04800af-47a7-4ae0-b643-ed5e3693689f)

### `Salida`
![sal1Captura](https://github.com/wlopera/react-prod/assets/7141537/e2aeb115-7a70-432f-9daa-f5f8adb80c0b)
![sal2Captura](https://github.com/wlopera/react-prod/assets/7141537/5163cc15-b64f-498f-8e6d-550c7b66b6a8)


### `Vista de lazy - suspense` Colocar navegador lento
![lento1-Captura](https://github.com/wlopera/react-prod/assets/7141537/af16ff8d-e4fa-4c5d-b1e6-5ad0f99af8a4)
![lent4Captura](https://github.com/wlopera/react-prod/assets/7141537/006889af-9439-4937-9310-ad1ad011a7c6)

#### Demo
https://idyllic-gnome-22e5ae.netlify.app/
