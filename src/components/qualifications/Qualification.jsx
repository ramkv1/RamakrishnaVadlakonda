import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState,setToggleState] = useState(1);
  const toggleTab = (index)=>{
      setToggleState(index);
  }
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div 
          className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
            <i
              className="uil uil-graduation-cap
          qualification__icon"
            ></i>
            Education
          </div>

          {/* <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)} >
            <i
              className="uil uil-briefcase-alt
          qualification__icon"
            ></i>
            Experience
          </div> */}
        </div>

        <div className="qualification__sections">
          <div 
          className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">(B.Tech) in Electrical and Electronics Engineering</h3>
                <span className="qualification__subtitle">
                Sree Chaitanya College of Engineering (scce) Karimnagar
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2018- 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Diploma (MPC)</h3>
                <span className="qualification__subtitle">
                Jyothismathi Institute of Technology and Science (EEE) (Karimnagar)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2015-2018
                </div>
              </div>

            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">School (SSC)</h3>
                <span className="qualification__subtitle">
                Zilla Parishad High School (Garshakurthi)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2014-2015
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div 
          className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Development Engineering</h3>
                <span className="qualification__subtitle">
                  DarwinBox (HRMS)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>06-2023- Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Software Engineer</h3>
                <span className="qualification__subtitle">
                 DarwinBox (HRMS)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>01-2023 - 06-2023
                </div>
              </div>

            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Developer as Intern</h3>
                <span className="qualification__subtitle">
                  Verzeo EduTech
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>04- 2021- 06 - 2021
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

          
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">
                Lets Grow More as Intern
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>10-2022 - 11-2022
                </div>
              </div>

            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Frontend WorkShop</h3>
                <span className="qualification__subtitle">
                  Quollab
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>07-2022 - 08-2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>



            
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
