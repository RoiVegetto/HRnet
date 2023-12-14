import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer({ logo }) {
  return (
    <footer>
        <Link to={"/"}>Home</Link>
        <img src={logo} alt='Logo HRnet'/>
    </footer>
  );
}

export default Footer;
