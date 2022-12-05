import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import SmartStatementScreen from './screens/SmartStatementScreen';
import StatementScreen from './screens/StatementScreen';

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
      <Footer />
    </Router>
  );
}

export default App;
