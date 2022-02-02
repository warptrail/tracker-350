import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import Home from './routes/';
import LoginPage from './routes/LoginPage';
import SignUpPage from './routes/SignUpPage';
import AboutPage from './routes/AboutPage';

function App() {
  // state for determining if user is authenticated or not
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // state for the main menu being open in mobile
  const [isNavOpen, setIsNavOpen] = useState(false);

  // toggle state function for sidebar
  const toggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  console.log();

  return (
    <Router>
      <Navbar
        toggle={toggle}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <Sidebar
        isNavOpen={isNavOpen}
        toggle={toggle}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      {/* <p>Logged in? - {isAuthenticated.toString()}</p> */}

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </Router>
  );
}

export default App;
