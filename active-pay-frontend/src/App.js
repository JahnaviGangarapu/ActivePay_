import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
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
          <Route path="/" component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
