import React from 'react'
import './footer.css'


const Footer = () => {
  // link to linkedin
   const handleButtonClick = () => {
    window.open('https://www.linkedin.com/in/symon-falcatan-49a0082b2/', '_blank');
  };
 // Link to Instagram
  const handleButtonToInstagram = () => {
    window.open('https://www.instagram.com/symonesassy/', '_blank');
  };
  // Link to facebook
  const handleButtonToFacebook = () => {
    window.open('https://web.facebook.com/maxtohsympre', '_blank');
  };
  return (
    <footer className='footer'>
    <div className="footer_container container">
      <h1 className="footer_title">David</h1>

      <div className="footers_list">
        <li>
          <a href="#about"  className="footer_link">About</a>
        </li>
        <li>
          <a href="#testimonials"  className="footer_link">Testimonials</a>
        </li>
        <li>
          <a href="#contact"  className="footer_link">Contact</a>
        </li>
        
          
      </div>

      <div className="footer_social">
        <a onClick={handleButtonToFacebook} style={{cursor:`pointer`}} className="footer_social-link">
          <i className="bx bxl-facebook"></i>
        </a>

        <a onClick={handleButtonToInstagram} style={{cursor:`pointer`}} className="footer_social-link">
          <i className="bx bxl-instagram"></i>
        </a>

        <a onClick={handleButtonClick} style={{cursor:`pointer`}} className="footer_social-link">
          <i className="bx bxl-linkedin"></i>
        </a>
      </div>

      <span className='footer_copy'>&#169; MaxxSassy. All rigths reserved</span>
    </div>
  </footer>
  )
}

export default Footer
