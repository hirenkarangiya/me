import React from 'react';

//Profile
import Profile_image from '../../images/hiren_karangiya_profile.jpg';
import Profile from './Profile';

//About
import About from './About';


class Header extends React.Component {

    render(){
        return(

            <header className="header">
                <div className="container">
                    <div className="row">

                        <Profile url={Profile_image} />

                        <About 
                            name="Hiren H. Karangiya" 
                            designation="Frontend Developer" 
                            info="Hello! I am a UI developer with a bachelor’s degree from YCMOU university in Information Technology, specializing in developing websites. Having experience of more than 5 years. My skills include HTML5, CSS3, Javascript, jQuery, Ajax, Wordpress, Email Templates and API Integration."
                        />
                        
                    </div>
                </div>
            </header>

        );
    }

}

export default Header;