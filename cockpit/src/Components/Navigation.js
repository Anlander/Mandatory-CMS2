import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';



const Navigation = () => {
  return (
    <div className="Menu">
      <Link to="/" className="menu-text">Home</Link><br></br>
      <Link to="/Authors" className="menu-text">Cart</Link><br></br>
    </div>
  );
};

export default Navigation;
