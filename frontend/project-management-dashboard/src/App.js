import React from 'react';
import logo from './logo.svg';
import './App.css';
import FooterComponent from './components/dashboard/FooterComponent.jsx'
import HeaderComponent from './components/dashboard/HeaderComponent.jsx'
import LoginComponent from './components/dashboard/LoginComponent.jsx'
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/js/all.js';

function App() {
  return (
    <div className="App">
      <LoginComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
