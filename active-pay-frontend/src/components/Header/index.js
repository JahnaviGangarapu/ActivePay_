import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Image,
  NavLink,
  Modal,
  Button,
  Form,
} from "react-bootstrap";
import QrReader from "react-qr-scanner";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";
import { getRewardPoints } from "../../actions/rewardActions";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const rewardPoints = useSelector((state) => state.rewardPoints);
  const { coins } = rewardPoints;
  const [showModal, setShowModal] = useState(false);
  const [result, setResult] = useState("Empty");
  const [toggleCamera, setToggleCamera] = useState(true);

  const handleCloseModal = () => {
    setToggleCamera(!toggleCamera);
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleScan = (data) => {
    console.log(data);
    if (data != null) {
      setToggleCamera(!toggleCamera);
      setResult(data.text);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };
  const previewStyle = {
    height: 240,
    width: 320,
  };

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
      {console.log(userInfo)}
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        collapseOnSelect
        className="navbar-fixed-bottom navbar-inner"
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <Image
                style={{ width: "40%", height: "auto" }}
                src="/images/cred-logo.png"
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {userInfo ? (
                <>
                  <Button onClick={handleShowModal} variant="outline-success">
                    Scan & Pay
                  </Button>
                  <Modal
                    show={showModal}
                    onHide={handleCloseModal}
                    keyboard={true}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Scan and Pay</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ paddingBottom: "0" }}>
                      {toggleCamera && (
                        <QrReader
                          style={previewStyle}
                          onError={handleError}
                          onScan={handleScan}
                        />
                      )}
                      {!toggleCamera && (
                        <div>
                          <h2>$</h2>
                          <h6>{result}</h6>
                          <input type="text" placeholder="Enter amount"/>
                        </div>
                      )}
                    </Modal.Body>
                    <Modal.Footer>Pay</Modal.Footer>
                  </Modal>
                  {coins && (
                    <LinkContainer
                      style={{ paddingRight: "2rem" }}
                      to="/rewards"
                    >
                      <NavLink>
                        <i className="fas fa-coins fa-lg"></i> {coins}
                      </NavLink>
                    </LinkContainer>
                  )}

                  <NavDropdown title={userInfo.user.email} id="username">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : null}
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
