import React, { useState } from "react";
import "./service.css";

const Service = () => {
  const [toogleState,setToogleState] = useState(0);

  const toogleTab = (index) =>{
    setToogleState(index);
  }
  return (
    <section className="section services" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
          <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Product <br /> Designer</h3>
          </div>

          <span className="services__button" onClick={()=>toogleTab(1)}>
            View More{" "}
            <i className="uil uil-arrow-right services__button_icon"></i>
          </span>

          <div className={toogleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={() => toogleTab(0)}></i>

              <h3 className="services__modal-title">Product Designer</h3>
              <p className="modal__services-description">
                Service with more than 3 years of experience. Providing quality
                work to clients and companies
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I develop the user interface.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web Page development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I create UX element interactions.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I position your company brand.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Designs and mockups of products and companies.</p>
                </li>
              </ul>

            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">Ui/Ux <br /> Designer</h3>
          </div>

          <span onClick={() =>toogleTab(2)} className="services__button">
            View More{" "}
            <i className="uil uil-arrow-right services__button_icon"></i>
          </span>

          <div className={toogleState === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toogleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Ui/Ux</h3>
              <p className="modal__services-description">
                Service with more than 3 years of experience. Providing quality
                work to clients and companies
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I develop the user interface.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web Page development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I create UX element interactions.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I position your company brand.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Designs and mockups of products and companies.</p>
                </li>
              </ul>

            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">Visual <br /> Designer</h3>
          </div>

          <span className="services__button" onClick={() => toogleTab(3)}>
            View More{" "}
            <i className="uil uil-arrow-right services__button_icon"></i>
          </span>

          <div className={toogleState === 3 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toogleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Visual Designer</h3>
              <p className="modal__services-description">
                Service with more than 3 years of experience. Providing quality
                work to clients and companies
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I develop the user interface.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web Page development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I create UX element interactions.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I position your company brand.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Designs and mockups of products and companies.</p>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
