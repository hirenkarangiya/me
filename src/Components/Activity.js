import React from 'react';

function Activity(props){

    return(

        <section className="section-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="section-title">
                            <h2>My Activity</h2>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="item-stats">
                                    <div className="item-stats-value">100%</div>
                                    <div className="item-stats-name">Jobs Success</div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="item-stats">
                                    <div className="item-stats-value">96%</div>
                                    <div className="item-stats-name">On Budget</div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="item-stats">
                                    <div className="item-stats-value">99%</div>
                                    <div className="item-stats-name">On Time</div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="item-stats">
                                    <div className="item-stats-value">89%</div>
                                    <div className="item-stats-name">Repeat Hire Rate</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );

}

export default Activity;