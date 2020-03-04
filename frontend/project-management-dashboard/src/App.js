import React from 'react';
// import logo from './logo.svg';
import './App.css';
import RouteHandler from './components/dashboard/RouteHandler.jsx';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/js/all.js';

function App() {
  return (
    <div className="App">
      <RouteHandler />
    </div>
  );
}

export default App;
