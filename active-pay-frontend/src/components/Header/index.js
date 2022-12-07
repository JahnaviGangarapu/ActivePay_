
//This component is the header of entire application where the header is deigned using HTML tags and javaScript logic


import React, { useEffect } from 'react';
// eslint-disable-next-line
import { Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  // eslint-disable-next-line
  Image,
  NavLink,
} from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/userActions';
import { getRewardPoints } from '../../actions/rewardActions';

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const rewardPoints = useSelector((state) => state.rewardPoints);
  const { coins } = rewardPoints;

  // const [coins, setCoins] = useState(135);
  useEffect(() => {
    if (userInfo) {
      dispatch(getRewardPoints());
    }
  }, [userInfo, dispatch]);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar
        //bg="lightblack"
        variant="dark"
        expand="lg"
        collapseOnSelect
        className="Navbar1"
        //className="navbar-fixed-bottom navbar-inner"
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              {/* <Image
                style={{ width: '40%', height: 'auto' }}
                src="../Images/digital-wallet-e-payment-logo-design-vector-28823812.jpg"
              /> */}
              <p className="logo">ActivePay</p>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {userInfo ? (
                <>
                  {coins && (
                    <LinkContainer
                      style={{ paddingRight: '2rem' }}
                      to="/rewards"
                    >
                      <NavLink>
                        <i className="fas fa-coins fa-lg"></i> {coins}
                      </NavLink>
                    </LinkContainer>
                  )}

                  <NavDropdown title={userInfo.email} id="username">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="admin-menu">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
