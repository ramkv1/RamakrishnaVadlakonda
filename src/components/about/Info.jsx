import React, { useState, useEffect } from 'react';
const Info = () => {
    const [experience, setExperience] = useState('');
    useEffect(() => {
        const startDate = "2022-06-01"; // Start date in YYYY-MM-DD format
        const calculatedExperience = calculateExperience(startDate);
        setExperience(calculatedExperience);
    }, []);
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className="bx bx-award about__icon"></i>
                <h3 className='about__title'>Experience</h3>
                <span className="abput__subtitle">{experience}</span>
                </div>
            <div className="about__box" id='#portfolio'>
                <i className="bx bx-briefcase-alt about__icon"></i>
                <h3 className='about__title'>Completed</h3>
                <span className='abput__subtitle'>8 + Projects</span>
            </div>
            <div className="about__box">
                <i className="bx bx-support about__icon"></i>
                <h3 className='about__title'>Support</h3>
                <span className='abput__subtitle'>1 Year Working</span>
            </div>
            {/* <div className="about__box">
                <i className="bx bx-brain about__icon"></i>
                <h3 className='about__title'>Research Article</h3>
                <span className='abput__subtitle'>Under Review <a href="https://www.researchsquare.com/article/rs-2605399/v2.pdf">Click Here</a> </span>
            </div> */}
        </div>
    )
}
function calculateExperience(startDate) {
    // Get the current date
    const currentDate = new Date();
    
    // Calculate the difference in months
    const start = new Date(startDate);
    const yearsDifference = currentDate.getFullYear() - start.getFullYear();
    const monthsDifference = currentDate.getMonth() - start.getMonth();
    const totalMonths = yearsDifference * 12 + monthsDifference;
    
    // Calculate years and remaining months
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    
    // Format the output
    let experience = "";
    if (years > 0) {
        experience += `${years} Year${years > 1 ? 's' : ''}`;
    }
    if (months > 0) {
        experience += ` ${months} Month${months > 1 ? 's' : ''}`;
    }
    experience += " Working";
    
    return experience.trim();
}

// Usage
const startDate = "2022-06-01"; // Start date in YYYY-MM-DD format
const experience = calculateExperience(startDate);
console.log(experience); // Output: "1 Year _ Months Working" or "1 Year Working"

export default Info