import React from 'react';

function Specialities(props){

    return(
        <section className="expertise-wrapper section-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="section-title">
                            <h2>My Specialities</h2>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="expertise-item">
                                    <h3>Custom Web Application</h3>
                                    <p>
                                    Quickly repurpose reliable customer service with orthogonal ideas. Competently.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="expertise-item">
                                    <h3>Drupal Template Development</h3>
                                    <p>Interactively myocardinate high standards in initiatives rather than next-generation.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="expertise-item">
                                    <h3>WordPress Theme Development</h3>
                                    <p>
                                    Synergistically strategize customer directed resources rather than principle.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="expertise-item">
                                    <h3>Shopify Theme Design</h3>
                                    <p>Dynamically initiate client-based convergence vis-a-vis performance based.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Specialities;