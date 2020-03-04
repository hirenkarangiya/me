import React from 'react';

function Contact(props){

    return(

        <section className="section-contact section-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="section-title">
                            <h2>Contact</h2>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-3">
                                <address>
                                    <strong>Address</strong><br/>
                                    A/603, Saideep Plaza bld no 5, CHS, nr D-Mart,  Vasai (East) 401209
                                </address>
                            </div>
                            <div className="col-md-5">
                                <address>
                                    <strong>Mobile Number</strong><br/>
                                    +91 865-541-4792 / +91 835-689-4831
                                </address>
                            </div>
                            
                            <div className="col-md-4">
                                <address>
                                    <strong>Email</strong><br/>
                                    <a href="mailto:hiren.karangiya92@gmail.com">hiren.karangiya92@gmail.com</a>
                                </address>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        
    );

}

export default Contact;