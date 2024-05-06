import React from 'react'
import './home.css';

const Social = () => {
  // link to linkedin
  const handleButtonClick = () => {
    window.open('https://www.linkedin.com/in/symon-falcatan-49a0082b2/', '_blank');
  };
 // Link to Instagram
  const handleButtonToInstagram = () => {
    window.open('https://www.instagram.com/symonesassy/', '_blank');
  };
  // Link to facebook
  const handleButtonToGithub = () => {
    window.open('https://github.com/maxxx098', '_blank');
  };
  return (
    <div className='home_social'>
    <a onClick={handleButtonToInstagram} style={{cursor:`pointer`}} className="home_social-icon" >
      <i className="uil uil-instagram"></i>
    </a>
    <a onClick={handleButtonClick} style={{cursor:`pointer`}} className="home_social-icon" >
      <i className="uil uil-linkedin"></i>
    </a>
    <a onClick={handleButtonToGithub}  style={{cursor:`pointer`}} className="home_social-icon" >
      <i className="uil uil-github-alt"></i>
    </a>
    </div>
  )
}

export default Social
