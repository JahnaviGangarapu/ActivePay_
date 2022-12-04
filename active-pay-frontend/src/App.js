import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      {/* <container>
      <Route path="/" component={HomePage} exact />
      </container> */}
    </>
  );
}

export default App;
