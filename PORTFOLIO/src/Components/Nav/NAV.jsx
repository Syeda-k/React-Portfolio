import React, { useState, useRef, useEffect } from 'react';
import navCSS from './../Nav/Nav.module.css'; // Import CSS module for scoped styling

export default function Nav() {
    
    // Create a reference for the <ul> element
    const Menu = useRef();

    // Initialize theme state based on the body data-theme attribute
    const [darkMode, setDarkMode] = useState(
        document.querySelector('body').getAttribute('data-theme') === 'Dark'
    );

    // Function to set dark mode
    const DarkMood = () => {
        document.querySelector('body').setAttribute('data-theme', 'Dark');
        setDarkMode(true); // Update the state to reflect dark mode
    }

    // Function to set light mode
    const LightMood = () => {
        document.querySelector('body').setAttribute('data-theme', 'Light');
        setDarkMode(false); // Update the state to reflect light mode
    }

    // Toggle theme between dark and light
    const ThemeHandler = () => {
        if (darkMode) {
            LightMood();
        } else {
            DarkMood();
        }
    }

    // Function to toggle the 'activeNav' class on the <ul> element
    const menuHandler = () => {
        Menu.current.classList.toggle(navCSS.activeNav);
    }

    // Ensure the component correctly reflects the initial theme state
    useEffect(() => {
        if (darkMode) {
            DarkMood();
        } else {
            LightMood();
        }
    }, [darkMode]);

    return (
        <div className={navCSS.Nav}> {/* Apply scoped styles to the main container */}
            <div className={navCSS.logo}> {/* Apply scoped styles to the logo section */}
                <a href="#home">Syeda</a> {/* Logo text/link */}
            </div>

            <ul ref={Menu}> {/* Apply scoped styles to the menu list and attach the ref */}
                <li><a href="#home"><i className='ri-home-3-line'></i>Home</a></li> {/* Home link with icon */}
                <li><a href="#about"><i className='ri-user-line'></i>About</a></li> {/* About link with icon */}
                <li><a href="#service"><i className='ri-instance-line'></i>Services</a></li> {/* Services link with icon */}
                {/* <li><a href="#"><i className='ri-sd-card-fill'></i>Portfolio</a></li> Portfolio link with icon */}
                {/* <li><a href="#"><i className='ri-group-line'></i>Testimonial</a></li> Testimonial link with icon */}
                {/* <li><a href="#"><i className='ri-news-line'></i>Blogs</a></li> Blogs link with icon */}
                <li><a href="#contact"><i className='ri-phone-line'></i>Contact</a></li> {/* Contact link with icon */}
            </ul>

            <div className={navCSS.NavBtns}> {/* Apply scoped styles to the button section */}
                <i className='ri-moon-line' onClick={ThemeHandler}></i> {/* Icon for dark mode toggle */}
                <i className='ri-menu-4-line' onClick={menuHandler}></i> {/* Menu icon with click handler to toggle menu visibility */}
            </div>
        </div>
    );
}
