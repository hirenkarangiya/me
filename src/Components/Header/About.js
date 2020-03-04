import React from 'react';

import SocialChannel from './SocialMedia';

function About(props){

    const languages = ['English', 'Hindi', 'Gujarati'];

    return(

        <div className="col-md-9">

            {/* Name and Designation */}
            <div className="name-wrapper">
                <h1 className="name">{props.name}</h1>
                <span>{props.designation}</span>
            </div>

            {/* Short Info */}
            <p>{props.info}</p>
        
            <div className="row">
                <div className="col-md-3">
                    {/* Date of Birth */}
                    <div className="personal-details">
                        <strong>AUGUST 26, 1992</strong>
                        <small>BIRTH</small>
                    </div>
                </div>
                <div className="col-md-3">
                    {/* Nationality */}
                    <div className="personal-details">
                        <strong>INDIAN</strong>
                        <small>NATIONALITY</small>
                    </div>
                </div>
                <div className="col-md-6">
                    {/* Languages Know */}
                    <div className="personal-details">
                        <strong>
                        { 
                            languages.map( (item, key) => 
                                item +","
                            ) 
                        }
                        </strong>
                        <small>LANGUAGE</small>
                    </div>
                </div>
            </div>

            {/* Social Media Icons / Links */}
            <SocialChannel />
            
        </div>

    );
}

export default About;