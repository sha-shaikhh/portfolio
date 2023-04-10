import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification & Experience</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--fex"
                : "qualification__button button--fex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            {""}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--fex"
                : "qualification__button button--fex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            {""}
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Computer Science Engineering
                </h3>
                <span className="qualification__subtitle">
                  MJR College Of Engineering & Technology
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2009 - 2013</i>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"> </span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"> </span>
              </div>
              <div>
                <h3 className="qualification__title">Pre University Course</h3>
                <span className="qualification__subtitle">
                  SV Junior College
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2007 - 2009</i>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Secondary School Certificate
                </h3>
                <span className="qualification__subtitle">Z.P High School</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2006 - 2007</i>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"> </span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Senior Software Engineer
                </h3>
                <span className="qualification__subtitle">
                  Blackhawk Network - Bangalore
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2022 - Present</i>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"> </span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"> </span>
              </div>
              <div>
                <h3 className="qualification__title">Lead Consultant</h3>
                <span className="qualification__subtitle">
                  ITC Infotech - Bangalore
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2020 - 2022</i>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Senior Systems Engineer
                </h3>
                <span className="qualification__subtitle">
                  Infosys Limited - Bangalore{" "}
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2018 - 2020</i>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"> </span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"> </span>
              </div>
              <div>
                <h3 className="qualification__title">Application Engineer</h3>
                <span className="qualification__subtitle">
                  VIS Networks - Bangalore
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2015 - 2018</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
