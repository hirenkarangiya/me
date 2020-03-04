import React from 'react';

function Education(props){

    return(

        <section className="section-education section-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="section-title">
                            <h2>Education</h2>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="content-item">
                                    <small>2010 - 2013</small>
                                    <h3>Bachelor of Computer Application</h3>
                                    <h4>University of YCMOU</h4>
                                    <p>Maharashtra, India</p>
                                </div>
                                <div className="content-item">
                                    <small>2008 - 2010</small>
                                    <h3>HSC</h3>
                                    <h4>University of Maharashtra</h4>
                                    <p>Mumbai, India</p>
                                </div>
                                <div className="content-item">
                                    <small>1998 - 2008</small>
                                    <h3>SSC</h3>
                                    <h4>University of Maharashtra</h4>
                                    <p>Mumbai, India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );

}

export default Education;