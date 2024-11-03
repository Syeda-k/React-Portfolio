import React from 'react'
import heroImg from "./../../../assets/hero.png"
import headerCSS from "./../../Header/Header.module.css"
export default function Header() {
    return (
        <div className={headerCSS.headerWrapper}>
            <div className={headerCSS.headerContainer}>
                <img src={heroImg} alt="" />
                <h1>Hello, I am <span> Syeda Kiran</span></h1>
                <p>Welcome To my Portfolio
                    <strong> MERN Developer </strong> Based In Pakistan Over 3 Years of Professional Experience. I am Active learner.</p>
                  <div className={headerCSS.social}>
                    <i className="ri-facebook-line"></i>
                    <i className="ri-instagram-line"></i>
                    <i className="ri-github-line"></i>
                    <i className="ri-linkedin-line"></i>
                  </div>
                  <button>Download CV
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  </button>
                  
            </div>

        </div>
    )
}
