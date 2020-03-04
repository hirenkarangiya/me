import React from 'react';

function Experience(props){

    return(
        <section className="section-wrapper section-experience">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="section-title">
                            <h2>Work Experience</h2>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="content-item">
                                    <small>2018 - Present</small>
                                    <h3>Senior Web Developer</h3>
                                    <h4>Redchillies VFX</h4>
                                    <p>Mumbai, India</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="content-item">
                                    <small>2016 - 2018</small>
                                    <h3>Senior Web Developer</h3>
                                    <h4>Destylio Communication &amp; Design LLP</h4>
                                    <p>Mumbai, India</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="content-item">
                                    <small>2014 - 2016</small>
                                    <h3>Web Developer</h3>
                                    <h4>Alfa KPO Pvt. Ltd.</h4>
                                    <p>Mumbai, India</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="content-item">
                                    <small>2013 - 2014</small>
                                    <h3>Trainee-Web Developer </h3>
                                    <h4>Maquettez Dream Production Pvt. Ltd.</h4>
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

export default Experience;