import React from 'react';
import './styles.scss';


 import { Link } from 'react-router-dom';

const Branding = () => {
  return (
    <>
    <div className='upperbg'>
     <p className='Main'>
      <p className="Mainslogan">
        THE DEAL IS ON! 
        <div className="secondline">Get Rewards with Payments</div>
      </p></p>
      <br />
      <br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>

      <div className="container h-100">
        <div className="row align-middle">
          <div className="col-md-6 col-lg-4 my-column">
            <div className="card gr-1">
              <div className="txt">
                <h1>
                  feel special
                  <br></br>
                  more often.
                </h1>
                <p>exclusive rewards for paying your bills</p>
              </div>
              <Link to="/rewards">More</Link>
              <div className="ico-card">
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-column">
            <div className="card gr-2">
              <div className="txt">
                <h1>
                  we take your money
                  <br></br>
                  matters seriously.
                </h1>
                <p>so that you don’t have to.</p>
              </div>
              <Link to="/profile">More</Link>
              <div className="ico-card">
                <i className="fas fa-shield-alt"></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-column">
            <div className="card gr-3">
              <div className="txt">
                <h1>
                  simply add your<br></br>
                  credit card
                </h1>
                <p>and leave everything upon us.</p>
              </div>
              <Link to="/cards/add/new">More</Link>
              <div className="ico-card">
                <i className="far fa-credit-card"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Branding;
