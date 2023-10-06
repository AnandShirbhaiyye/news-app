import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <>
     <div className="footer-news text-center mt-3">
        <h5>Created By Anand | <Link to=''>Source Code</Link></h5>
      </div>
    </>
  )
}

export default Footer