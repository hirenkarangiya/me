import React from 'react';

function Skills(props){

    return(
        <section className="section-wrapper skills-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="section-title">
                            <h2>Skills</h2>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="progress-wrapper">
                                    <h3>CODING SKILLS</h3>
                                    <div className="progress-item">
                                        <span className="progress-title">HTML5</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: "85%"}}><span className="progress-percent"> 85%</span></div>
                                        </div>
                                    </div>
                                    <div className="progress-item">
                                        <span className="progress-title">CSS3</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}><span className="progress-percent"> 80%</span></div>
                                        </div>
                                    </div>
                                    <div className="progress-item">
                                        <span className="progress-title">JavaScript / jQuery / Ajax</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}><span className="progress-percent"> 75%</span></div>
                                        </div>
                                    </div>
                                    <div className="progress-item">
                                        <span className="progress-title">React JS</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}><span className="progress-percent"> 60%</span></div>
                                        </div>
                                    </div>
                                    <div className="progress-item">
                                        <span className="progress-title">Wordpress / Shopify</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}><span className="progress-percent"> 80%</span></div>
                                        </div>
                                    </div>
                                    <div className="progress-item">
                                        <span className="progress-title">PHP</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style={{width: "55%"}}><span className="progress-percent"> 55%</span></div>
                                        </div>
                                    </div>
                                    <div className="progress-item">
                                        <span className="progress-title">MySql / Postgresql</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: "50%"}}><span className="progress-percent"> 50%</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="progress-wrapper">
                                    <h3>DESIGN TOOLS</h3>
                                    <div className="progress-item">
                                        <span className="progress-title">Photoshop</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="62" aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}}><span className="progress-percent"> 70%</span></div>
                                        </div>
                                    </div>
                                    <div className="progress-item">
                                        <span className="progress-title">Figma</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: "50%"}}><span className="progress-percent"> 50%</span></div>
                                        </div>
                                    </div>
                                    <div className="progress-item">
                                        <span className="progress-title">Illustrator</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: "40%"}}><span className="progress-percent"> 40%</span></div>
                                        </div>
                                    </div>
                                    
                                    <h3 className="mt-4">VERSION CONTROL TOOLS</h3>
                                    <div className="progress-item">
                                        <span className="progress-title">Git</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: "40%"}}><span className="progress-percent"> 40%</span></div>
                                        </div>
                                    </div>
                                    <div className="progress-item">
                                        <span className="progress-title">Webpack / Gulp</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{width: "45%"}}><span className="progress-percent"> 45%</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Skills;