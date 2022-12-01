import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import HomePage from './components/Pages/HomePage';

function App() {
  return (
    <>
      <Header />
      {/* <container>
      <Route path="/" component={HomePage} exact />
      </container> */}
      <HomePage />
    </>
  );
}

export default App;
