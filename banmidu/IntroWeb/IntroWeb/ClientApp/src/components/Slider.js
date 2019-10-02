import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
export default class Slider extends Component {
    render() {
        return (                      
            <div className="App-margin">    
                <Carousel showIndicators={false} showThumbs={false} showArrows={false} infiniteLoop={true} autoPlay={true}> 
                     
                        <div>
                            <img src="/images/slider/slide-1.jpg" />                       
                        </div>
                        <div>
                            <img src="/images/slider/slide-2.jpg" />                        
                        </div>
                        <div>
                            <img src="/images/slider/slide-1.jpg" />                        
                        </div>                  
                </Carousel>   
            </div>         
        );
    }
};