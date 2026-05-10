import React, { useState } from 'react'
import "./services.css";


const Services = () => {

    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) =>{
        setToggleState(index);
    }

  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services </h2>
        <span className="section__subtitle">What I offer</span>

    <div className="services__container container grid">
        <div className="services__content">
            <div>
                <i className="uil uil services icon"></i>
                <h3 className="services__title">one</h3>
            </div>
            <span className="services__button" onClick={() =>
            toggleTab(1)}>
                View More <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">one</h3>
                    <p className="services__modal-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quasi maxime et 
                        doloribus fugit, esse placeat? Nemo, placeat ipsam sunt, molestias dicta ab fugit 
                        laudantium voluptas repudiandae rem aspernatur quis.
                    </p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle"></i>
                            <p className="services__modal-info">Lorem ipsum, dolor sit amet 
                            consectetur adipisicing elit. Repellendus.</p>
                            </li>

                            <li className="services__modal-service">
                            <i className="uil uil-check-circle"></i>
                            <p className="services__modal-info">Lorem ipsum, dolor sit amet 
                            consectetur adipisicing elit. Repellendus.</p>
                            </li>

                            <li className="services__modal-service">
                            <i className="uil uil-check-circle"></i>
                            <p className="services__modal-info">Lorem ipsum, dolor sit amet 
                            consectetur adipisicing elit. Repellendus.</p>
                            </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="services__content">
            <div>
                <i className="uil uil services icon"></i>
                <h3 className="services__title">two</h3>
            </div>
            <span className="services__button" onClick={() =>
            toggleTab(2)}>
                View More <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">two</h3>
                    <p className="services__modal-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quasi maxime et 
                        doloribus fugit, esse placeat? Nemo, placeat ipsam sunt, molestias dicta ab fugit 
                        laudantium voluptas repudiandae rem aspernatur quis.
                    </p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle"></i>
                            <p className="services__modal-info">Lorem ipsum, dolor sit amet 
                            consectetur adipisicing elit. Repellendus.</p>
                            </li>

                            <li className="services__modal-service">
                            <i className="uil uil-check-circle"></i>
                            <p className="services__modal-info">Lorem ipsum, dolor sit amet 
                            consectetur adipisicing elit. Repellendus.</p>
                            </li>

                            <li className="services__modal-service">
                            <i className="uil uil-check-circle"></i>
                            <p className="services__modal-info">Lorem ipsum, dolor sit amet 
                            consectetur adipisicing elit. Repellendus.</p>
                            </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="services__content">
            <div>
                <i className="uil uil services icon"></i>
                <h3 className="services__title">tree</h3>
            </div>
            <span className="services__button" onClick={() =>
            toggleTab(3)}>
                View More <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">tree</h3>
                    <p className="services__modal-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quasi maxime et 
                        doloribus fugit, esse placeat? Nemo, placeat ipsam sunt, molestias dicta ab fugit 
                        laudantium voluptas repudiandae rem aspernatur quis.
                    </p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle"></i>
                            <p className="services__modal-info">Lorem ipsum, dolor sit amet 
                            consectetur adipisicing elit. Repellendus.</p>
                            </li>

                            <li className="services__modal-service">
                            <i className="uil uil-check-circle"></i>
                            <p className="services__modal-info">Lorem ipsum, dolor sit amet 
                            consectetur adipisicing elit. Repellendus.</p>
                            </li>

                            <li className="services__modal-service">
                            <i className="uil uil-check-circle"></i>
                            <p className="services__modal-info">Lorem ipsum, dolor sit amet 
                            consectetur adipisicing elit. Repellendus.</p>
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