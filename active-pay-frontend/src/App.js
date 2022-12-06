import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import SmartStatementScreen from './screens/SmartStatementScreen';
import StatementScreen from './screens/StatementScreen';
import LoginScreen2 from './screens/LoginScreen2';
import RegisterScreen2 from './screens/RegisterScreen2';
import ProfileScreen2 from './screens/ProfileScreen2';
import HomeScreen from './screens/HomeScreen';


function App() {
  return (
    <Router>
      <main className="py-3">
          <Container>
          <Route path="/login" component={LoginScreen2} />
          <Route path="/register" component={RegisterScreen2} />
          <Route path="/profile" component={ProfileScreen2} exact />
          <Route
            path="/cards/:id/statements/:year/:month"
            component={StatementScreen}
            exact
          />
          <Route
            path="/cards/:id/smartstatements/:year/:month"
            component={SmartStatementScreen}
            exact
          />
          <Route
            path="/cards/:id/statements/:year/:month/:pageNumber"
            component={StatementScreen}
          />
           <Route path="/" component={HomeScreen} exact />
          </Container>
      </main>
    </Router>
  );
}

export default App;
