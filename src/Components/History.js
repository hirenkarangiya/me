import React from 'react';

function History(props){
    return(

        <section className="work-history-wrapper section-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="section-title">
                            <h2>Work History</h2>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="item-stats">
                                    <div className="item-stats-value">15096</div>
                                    <div className="item-stats-name">hours worked</div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="item-stats">
                                    <div className="item-stats-value">687</div>
                                    <div className="item-stats-name">Work Done</div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="item-stats">
                                    <div className="item-stats-value">30</div>
                                    <div className="item-stats-name">Hours weekly Available</div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="item-stats">
                                    <div className="item-stats-value">24</div>
                                    <div className="item-stats-name">Hour Response Time</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default History;