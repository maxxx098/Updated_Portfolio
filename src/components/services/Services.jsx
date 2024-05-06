import React, { useState} from 'react'
import './services.css'

const Services = () => {

    const [toggleState, setToggleState] = useState(0);

  const toggleTab =(index) => {
    setToggleState(index);
  }
  return (
   <section className='services section' id='services'>
    <h2 className="section__title">Services</h2>
    <span className="section__subtitle">What I Offer?</span>
     <div className="services_container container grid">
     <div className="services_content">
         <div>
             <i className="uil uil-web-grid services_icon">
                 <h3 className="services_title">Data Entry | Analyst</h3>
                 
             </i>
         </div>

         <span className="services_button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right services_button-icon"></i></span>

         <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
             <div className="services_modal-content">
                 <i onClick={() =>toggleTab(0)} className="uil uil-times services_modal-close"></i>

                 <h3 className="services_modal-title">Data Entry | Analyst</h3>
                 <p className="services_modal-description">Service with more than 3 years of experience.Providing quality work to clients and companies.
</p>

<ul className="services_modal-services grid">
 <li className="services_modal-service">
     <i className="uil uil-check-circle services_modal-icon"></i>
     <p className="services_modal-info">Ensure the accuracy and completeness of data entries through routine checks.</p>
 </li>

 <li className="services_modal-service">
     <i className="uil uil-check-circle services_modal-icon"></i>
     <p className="services_modal-info">Review and correct discrepancies in data to maintain data integrity.</p>
 </li>

 <li className="services_modal-service">
     <i className="uil uil-check-circle services_modal-icon"></i>
     <p className="services_modal-info">Assist in the preparation and organization of documents for data entry.</p>
 </li>
</ul>
             </div>
         </div>
     </div>
     <div className="services_content">
         <div>
             <i className="uil uil-arrow services_icon">
                 <h3 className="services_title">Ui | Ux Designer </h3>
             </i>
         </div>

         <span className="services_button" onClick={() => toggleTab(2)}>View More<i className="uil uil-arrow-right services_button-icon"></i></span>

         <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
             <div className="services_modal-content">
                 <i onClick={() =>toggleTab(0)} className="uil uil-times services_modal-close"></i>

                 <h3 className="services_modal-title">Ui/Ux Designer</h3>
                 <p className="services_modal-description">Service with more than 2 month's of experience.Providing quality work to clients and companies.
</p>

<ul className="services_modal-services grid">
 <li className="services_modal-service">
     <i className="uil uil-check-circle services_modal-icon"></i>
     <p className="services_modal-info">Conduct user research to understand user needs, preferences, and behavior</p>
 </li>

 <li className="services_modal-service">
     <i className="uil uil-check-circle services_modal-icon"></i>
     <p className="services_modal-info">Analyze research findings to inform design decisions and improvements.</p>
 </li>

 <li className="services_modal-service">
     <i className="uil uil-check-circle services_modal-icon"></i>
     <p className="services_modal-info">Create wireframes, mockups, and prototypes to visualize design concepts.</p>
 </li>
</ul>
             </div>
         </div>
     </div>
     <div className="services_content">
         <div>
             <i className="uil uil-edit services_icon">
                 <h3 className="services_title">Frontend Developer</h3>
             </i>
         </div>

         <span className="services_button" onClick={() => toggleTab(3)}>View More  <i className="uil uil-arrow-right services_button-icon"></i></span>

         <div className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
             <div className="services_modal-content">
                 <i onClick={() =>toggleTab(0)} className="uil uil-times services_modal-close"></i>

                 <h3 className="services_modal-title">Frontend Developer</h3>
                 <p className="services_modal-description">Service with more than 4 month's of experience.Providing quality work to clients and companies.
</p>

<ul className="services_modal-services grid">
 <li className="services_modal-service">
     <i className="uil uil-check-circle services_modal-icon"></i>
     <p className="services_modal-info">Write clean, well-documented, and efficient code.</p>
 </li>

 <li className="services_modal-service">
     <i className="uil uil-check-circle services_modal-icon"></i>
     <p className="services_modal-info">Develop new user-facing features using modern frontend technologies (HTML5, CSS3, JavaScript, etc.).</p>
 </li>

 <li className="services_modal-service">
     <i className="uil uil-check-circle services_modal-icon"></i>
     <p className="services_modal-info">Stay updated on emerging frontend technologies and best practices.</p>
 </li>
</ul>
             </div>
         </div>
     </div>
   </div>
   </section>
  )
}

export default Services
