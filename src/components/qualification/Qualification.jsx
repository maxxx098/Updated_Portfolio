import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleStates, setToggleStates] = useState(1);

  const toggleTabs =(index) => {
    setToggleStates(index);
  };
  return (
   <section className='qualification section'>
    <h2 className="section__title">Qualification</h2>
    <span className="section__subtitle">My Personal Journey</span>
    <div className="qualification_container container">
      <div className="qualification_tabs">
        <div className={toggleStates === 1 ? "qualification_button qualification_active button--flex" : "qualification_button  button--flex"}
        onClick={() => toggleTabs(1)}>
          <i className="uil uil-graduation-cap qualification_icon"></i> Education
        </div>

        <div className={toggleStates === 2 ? "qualification_button qualification_active button--flex" : "qualification_button  button--flex"}
        onClick={() => toggleTabs(2)}>
          <i className="uil uil-briefcase-alt qualification_icon"></i> Experience
        </div>
      </div>
      <div className="qualification_sections">
        <div className={toggleStates === 1 ? "qualification_content qualification_content-active" : "qualification_content "}>
          <div className="qualification_data">
            <div>
              <h3 className="qualification_title">Web Design</h3>
              <span className="qualification_subtitle">KODEGO - Institute</span>
              <div className="qualification_calendar">
                <i className="uil uil-calendar-alt"></i> 2023 - Present
              </div>
            </div>

            <div>
              <span className="qualification_rounder"> </span>
                <span className="qualification_line"></span>
             
            </div>
          </div>

          <div className="qualification_data">
            <div></div>

            <div>
              <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              
            </div>

            <div>
              <h3 className="qualification_title">DATA ANALYST</h3>
              <span className="qualification_subtitle">Virtual Assist - Institute</span>
              <div className="qualification_calendar">
                <i className="uil uil-calendar-alt"></i> 2022 - 2023
              </div>
            </div>

            
          </div>


          <div className="qualification_data">
          <div>
              <h3 className="qualification_title">WEB DEV.</h3>
              <span className="qualification_subtitle">KODEGO - Institute</span>
              <div className="qualification_calendar">
                <i className="uil uil-calendar-alt"></i> 2023 - Present
              </div>
            </div>

            <div>
              <span className="qualification_rounder"> </span>
                <span className="qualification_line"></span>
             
            </div>
          </div>

          <div className="qualification_data">
            <div></div>

            <div>
              <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              
            </div>

            <div>
              <h3 className="qualification_title">GAS</h3>
              <span className="qualification_subtitle">BNHS - Institute</span>
              <div className="qualification_calendar">
                <i className="uil uil-calendar-alt"></i> 2017 - 2023
              </div>
            </div>

            
          </div>
          <div className="qualification_data">
          <div>
              <h3 className="qualification_title">DATA ENTRY</h3>
              <span className="qualification_subtitle">Virtual Assist - Institute</span>
              <div className="qualification_calendar">
                <i className="uil uil-calendar-alt"></i> 2022 - 2023
              </div>
            </div>

            <div>
              <span className="qualification_rounder"> </span>
                <span className="qualification_line"></span>
             
            </div>
          </div>
        </div>

        <div className={toggleStates === 2 ? "qualification_content qualification_content-active" : "qualification_content "}>
          <div className="qualification_data">
            <div>
              <h3 className="qualification_title">Web Design</h3>
              <span className="qualification_subtitle">Kodego - Institute</span>
              <div className="qualification_calendar">
                <i className="uil uil-calendar-alt"></i> 2023 - present
              </div>
            </div>

            <div>
              <span className="qualification_rounder"> </span>
                <span className="qualification_line"></span>
             
            </div>
          </div>

          <div className="qualification_data">
            <div></div>

            <div>
              <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              
            </div>

            <div>
              <h3 className="qualification_title">Data Analyst</h3>
              <span className="qualification_subtitle">SPL Data - Marketing</span>
              <div className="qualification_calendar">
                <i className="uil uil-calendar-alt"></i> 2018 - Present
              </div>
            </div>
            

            
          </div>

          


          <div className="qualification_data">
            <div>
              <h3 className="qualification_title">Web Dev.</h3>
              <span className="qualification_subtitle">Kodego - Institute</span>
              <div className="qualification_calendar">
                <i className="uil uil-calendar-alt"></i> 2023 - Present
              </div>
            </div>

            <div>
              <span className="qualification_rounder"> </span>
                <span className="qualification_line"></span>
             
            </div>
          </div>

          <div className="qualification_data">
            <div></div>

            <div>
              <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              
            </div>

            <div>
              <h3 className="qualification_title">Helper Mechanic</h3>
              <span className="qualification_subtitle">Two Brothers Shop</span>
              <div className="qualification_calendar">
                <i className="uil uil-calendar-alt"></i> 2018 - Present
              </div>
            </div>
            

            
          </div>

          <div className="qualification_data">
            <div>
              <h3 className="qualification_title">Therapist</h3>
              <span className="qualification_subtitle">Unkown</span>
              <div className="qualification_calendar">
                <i className="uil uil-calendar-alt"></i> 2016 - Present
              </div>
            </div>

            <div>
              <span className="qualification_rounder"> </span>
                <span className="qualification_line"></span>
             
            </div>
          </div>

          <div className="qualification_data">
            <div></div>

            <div>
              <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              
            </div>

            <div>
              <h3 className="qualification_title">WordPress</h3>
              <span className="qualification_subtitle">K&M McLean Property Ltd</span>
              <div className="qualification_calendar">
                <i className="uil uil-calendar-alt"></i> 2023 - past
              </div>
            </div>
            

            
          </div>
          

          
        </div>
        
      </div>
    </div>
   </section>
  )
}

export default Qualification
