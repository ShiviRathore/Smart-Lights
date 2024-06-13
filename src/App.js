import React from 'react';
import './assets/vendor/css/bootstrap.min.css';
import './assets/vendor/css/style.css';
import './assets/vendor/css/responsive.css';
import './assets/vendor/dist/assets/owl.carousel.css';
import './assets/vendor/dist/assets/owl.theme.default.min.css';
import { GetRoutes } from './actions/customFn';
import { Route, Routes } from 'react-router-dom';
import RouteArr from './hooks/GetRoutes';
import 'animate.css';
function App() {
  return (
    <div className="App">
      <Routes>        
        {GetRoutes(RouteArr)}
      </Routes>
    </div>
  );
}

export default App;
