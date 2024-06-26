import React from 'react';
import './logout.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const Logout = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <div className="left-log d-flex justify-content-center align-items-center">
            <div className="logout-page">
              <div className="logout-container">
                <h3 className="logout-title">Are you sure you want to logout?</h3>
                <button className="logout-button">Logout</button>
              </div>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
