import React from 'react';

class SocialMedia extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            social_media : [
                {'url': 'https://www.facebook.com/', 'name': 'facebook'},
                {'url': 'https://twitter.com/', 'name': 'twitter'},
                {'url': 'https://www.linkedin.com', 'name': 'linkedin'},
                {'url': 'https://slack.com/intl/en-in/', 'name': 'slack'},
                {'url': 'https://dribbble.com/', 'name': 'dribbble'}
            ]
        }
    }

    render(){

        const items = this.state.social_media.map( (item, key) => 
            <li key={item.id}><a href={item.url} target="_blank" rel="noopener noreferrer"><span>{item.name}</span><i className={"fa fa-"+ item.name} aria-hidden="true"></i></a></li>
        );

        return(
            <ul className="social-icon">
                {items}
            </ul>
        );

    }
    
}

export default SocialMedia;

