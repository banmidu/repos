import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <footer className="footer">
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="widget">
                                            <h4 className="widget-title">My Account</h4>

                                            <ul className="links">
                                                <li><a href="https://portotheme.com/html/porto_ecommerce/demo-11/about.html">About Us</a></li>
                                                <li><a href="https://portotheme.com/html/porto_ecommerce/demo-11/contact.html">Contact Us</a></li>
                                                <li><a href="https://portotheme.com/html/porto_ecommerce/demo-11/my-account.html">My Account</a></li>
                                                <li><a href="https://portotheme.com/html/porto_ecommerce/demo-11/#">Orders History</a></li>
                                                <li><a href="https://portotheme.com/html/porto_ecommerce/demo-11/#">Advanced Search</a></li>
                                                <li><a href="https://portotheme.com/html/porto_ecommerce/demo-11/#" className="login-link">Login</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-5">
                                        <div className="widget">
                                            <ul className="contact-info">
                                                <li>
                                                    <span className="contact-info-label">Address:</span>123 Street Name, City, England
                                                </li>
                                                <li>
                                                    <span className="contact-info-label">Phone:</span>Toll Free <a href="tel:">(123) 456-7890</a>
                                                </li>
                                                <li>
                                                    <span className="contact-info-label">Email:</span> <a href="mailto:mail@example.com">mail@example.com</a>
                                                </li>
                                                <li>
                                                    <span className="contact-info-label">Working Days/Hours:</span>
                                                    Mon - Sun / 9:00AM - 8:00PM
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-5">
                                        <div className="widget">
                                            <h4 className="widget-title">Main Features</h4>
                                            
                                            <ul className="links">
                                                <li><a href="https://portotheme.com/html/porto_ecommerce/demo-11/#">Super Fast Magento Theme</a></li>
                                                <li><a href="https://portotheme.com/html/porto_ecommerce/demo-11/#">1st Fully working Ajax Theme</a></li>
                                                <li><a href="https://portotheme.com/html/porto_ecommerce/demo-11/#">20 Unique Homepage Layouts</a></li>
                                                <li><a href="https://portotheme.com/html/porto_ecommerce/demo-11/#">Powerful Admin Panel</a></li>
                                                <li><a href="https://portotheme.com/html/porto_ecommerce/demo-11/#">Mobile &amp; Retina Optimized</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="widget widget-newsletter">
                                    <h4 className="widget-title">Subscribe newsletter</h4>
                                    <p>Get all the latest information on Events,Sales and Offers. Sign up for newsletter today</p>
                                    <form action="https://portotheme.com/html/porto_ecommerce/demo-11/#">
                                        <input type="email" className="form-control" placeholder="Email address" required="" />

                                        <input type="submit" className="btn" value="Subscribe" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="footer-bottom">
                        <p className="footer-copyright">Porto eCommerce. ©  2018.  All Rights Reserved</p>
                        <img src="%PUBLIC_URL%/images/payments.png" alt="payment methods" className="footer-payments" />

                        <div className="social-icons">
                            <a href="https://portotheme.com/html/porto_ecommerce/demo-11/#" className="social-icon" target="_blank"><i className="icon-facebook"></i></a>
                            <a href="https://portotheme.com/html/porto_ecommerce/demo-11/#" className="social-icon" target="_blank"><i className="icon-twitter"></i></a>
                            <a href="https://portotheme.com/html/porto_ecommerce/demo-11/#" className="social-icon" target="_blank"><i className="icon-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;