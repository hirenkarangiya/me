import React from 'react';

function Profile(props){
    return(
        <div className="col-md-3">
            {/* Thumbnail */}
            <div className="profile-img">
                <img src={props.url} className="img-fluid" alt="" />
            </div>
        </div>
    );
}

export default Profile;