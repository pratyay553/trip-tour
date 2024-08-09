import React from 'react'
import "./Footerstyle.css"
export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <h4>TRip-ToUr</h4>
        <p>Choose your favourite destination.</p>
        <a href="/">
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="/">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="/">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="/">
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">GitHub</a>
          <a href="/">Issues</a>
          <a href="/">Project</a>
          <a href="/">Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Contact Us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
         
        </div>
      </div>
    </div>
  );
}



