import React from 'react'
import heroImg from "./../../../assets/hero.png"
import headerCSS from "./../Header/Header.module.css"
export default function Header() {
  return (
    <div className={HeaderCSS.headerWrapper} id='home'>
     <div className={headerCSS.headerContainer}>
        <img src={heroImg} alt=""/>
        <h1>Hello, I am Syeda </h1>
        <p>Welcome To mhy Portfolio</p>
       <strong>React Developer Based In Pakistan</strong>
     </div>
    </div>
  )
}
