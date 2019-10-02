import React from 'react';

class Categories extends React.Component{
    render(){
        return(
            <React.Fragment>
                 <div className="row">
                    <div className="col-md-4">
                        <h3 className="subtitle">SHOP LIVING ROOM</h3>
                        <div className="banner banner-image">
                            <a href="https://portotheme.com/html/porto_ecommerce/demo-11/#">
                                <img src="/images/banner-living.jpg" alt="banner" />
                            </a>
                            <div className="banner-meta">
                                <a href="https://portotheme.com/html/porto_ecommerce/demo-11/#">LIVING ROOM </a>

                                <span className="banner-price">Starting at <span>$999</span></span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <h3 className="subtitle">SHOP DINING ROOM</h3>
                        <div className="banner banner-image">
                            <a href="https://portotheme.com/html/porto_ecommerce/demo-11/#">
                                <img src="/images/banner-dining.jpg" alt="banner" />
                            </a>
                            <div className="banner-meta">
                                <a href="https://portotheme.com/html/porto_ecommerce/demo-11/#">DINING ROOM </a>

                                <span className="banner-price">Starting at <span>$859</span></span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <h3 className="subtitle">SHOP BEDROOM</h3>
                        <div className="banner banner-image">
                            <a href="https://portotheme.com/html/porto_ecommerce/demo-11/#">
                                <img src="/images/banner-bedroom.jpg" alt="banner" />
                            </a>
                            <div className="banner-meta">
                                <a href="https://portotheme.com/html/porto_ecommerce/demo-11/#">BEDROOM</a>

                                <span className="banner-price">Starting at <span>$888</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Categories;