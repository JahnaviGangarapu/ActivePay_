import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import SmartStatementScreen from './screens/SmartStatementScreen';
import StatementScreen from './screens/StatementScreen';

function App() {
  return (
    <Router>
      <main >
          
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
      </main>
    </Router>
  );
}

export default App;
