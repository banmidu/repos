import React from 'react';

class Header extends React.Component{
    render(){
        return(            
            <header className="header ">           
                <div className="header-middle">
                    <div className="container">
                        <div className="header-left">
                            <button className="mobile-menu-toggler" type="button">
                                <i className="icon-menu"></i>
                            </button>
                            <div className="header-search">
                                <a href="https://portotheme.com/html/porto_ecommerce/demo-11/#" className="search-toggle" role="button"><i className="icon-magnifier"></i></a>
                                <form action="https://portotheme.com/html/porto_ecommerce/demo-11/#" method="get">
                                    <div className="header-search-wrapper">
                                        <input type="search" className="form-control" name="q" id="q" placeholder="Tìm kiếm..." required="" />                                    
                                        <button className="btn" type="submit"><i className="icon-magnifier"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="header-center">
                            <a href="https://portotheme.com/html/porto_ecommerce/demo-11/index.html" className="logo">
                                <img src="/images/logo.png" alt="Porto Logo" />
                            </a>
                        </div>

                        <div className="header-right">
                            <div className="header-contact">
                                <span>Call us now</span>
                                <a href="tel:#"><strong>+123 5678 890</strong></a>
                            </div>

                            <div className="dropdown cart-dropdown">
                                <a href="https://portotheme.com/html/porto_ecommerce/demo-11/#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                    <span className="cart-count">2</span>
                                </a>                            
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sticky-wrapper">
                <div className="header-bottom sticky-header">
                    <div className="container">
                        <nav className="main-nav">
                            <ul className="menu sf-arrows sf-js-enabled">
                                <li className="active"><a href="https://portotheme.com/html/porto_ecommerce/demo-11/index.html">Trang chủ</a></li>                                                        
                                <li><a href="https://portotheme.com/html/porto_ecommerce/demo-11/index.html">Sản phẩm</a></li>                                                        
                                <li><a href="https://portotheme.com/html/porto_ecommerce/demo-11/index.html">Dự án</a></li>                                                        
                                <li><a href="https://portotheme.com/html/porto_ecommerce/demo-11/index.html">Giới thiệu</a></li>                                                        
                                <li><a href="https://portotheme.com/html/porto_ecommerce/demo-11/index.html">Liên hệ</a></li>                                                        
                                <li className="float-right"><a href="https://portotheme.com/html/porto_ecommerce/demo-11/#">Buy Porto!</a></li>
                                <li className="float-right"><a href="https://portotheme.com/html/porto_ecommerce/demo-11/#">Special Offer!</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                </div>
            </header>            
        )
    }
}

export default Header;