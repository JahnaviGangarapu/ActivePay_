import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import ProfileScreen2 from './screens/ProfileScreen2';
import RewardScreen from './screens/RewardScreen';
import AllCouponsScreen from './screens/AllCouponsScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/profile" component={ProfileScreen2} exact />
          <Route path="/rewards/coupons" component={AllCouponsScreen} exact />
          <Route path="/rewards" component={RewardScreen} exact />
   
        </Container>
      </main>
   
    </Router>
  );
}

export default App;
