import React from 'react'
import aboutCSS from './../About/About.module.css'


export default function About() {
  return (
    <div className={`${aboutCSS.AboutWrapper} section ` } id='about'>
      <div className={aboutCSS.aboutContainer}>
        <h2>About Me</h2>
        <p>I am Syeda Kiran Mern Developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloremque, consequuntur voluptates cum quis voluptatibus!</p>
        <div className={aboutCSS.Skils}>
          <h2>My Skills</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem praesentium reiciendis deserunt in? Fugiat, maiores.</p>
          <div className={aboutCSS.skilWrapper}>
            <div className={aboutCSS.skill}>
              <h3>HTML</h3>
              <div className={aboutCSS.line}>
              </div>
            </div>
            <div className={aboutCSS.skill}>
              <h3>CSS</h3>
              <div className={aboutCSS.line}>

              </div>
            </div>
            <div className={aboutCSS.skill}>
              <h3>JavaScript</h3>
              <div className={aboutCSS.line}>

              </div>
            </div>
            <div className={aboutCSS.skill}>
              <h3>React</h3>
              <div className={aboutCSS.line}>

              </div>
            </div>

          </div>

        </div>
      </div>

    </div>


  )
}

