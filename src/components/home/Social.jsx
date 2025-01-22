import React from 'react';
import "./Social.css";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.instagram.com/ramakrishna_vadlakonda/" className="home__social-icon">
            <i class='uil uil-instagram'></i>
            </a>
            <a href="https://twitter.com/Ramakri65374486" className="home__social-icon">
            <i class='uil uil-twitter'></i>
            </a>
            <a href="https://github.com/ramkv1" className="home__social-icon" >
            <i class='uil uil-github-alt'></i>
            </a>
            <a href="https://www.linkedin.com/in/ramakrishna777/" className="home__social-icon">
                <i class='uil uil-linkedin'></i>
            </a>
            <a href="https://www.youtube.com/@ramakrishnavadlakonda7933" className="home__social-icon">
                <i className='uil uil-youtube'></i>
            </a>
        </div>
    )
}

export default Social
