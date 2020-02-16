import React from 'react';
// import logo from './logo.svg';
import './App.css';
import DashboardApp from './components/dashboard/DashboardApp.jsx';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/js/all.js';

function App() {
  return (
    <div className="App">
      <DashboardApp />
    </div>
  );
}

export default App;
