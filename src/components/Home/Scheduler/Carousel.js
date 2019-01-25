import React, { Component } from "react";
import {Carousel} from 'react-bootstrap'
import './Carousel.css'

class carousel extends Component {
  render() {
    return (
      <div className="carousel">
        <Carousel>
          <Carousel.Item className='carousel-img'>
            <img src="https://dcpd6wotaa0mb.cloudfront.net/owenscorning.com/assets/main/roofing/highlight-roofing-warranties@2x-69dc8d87bed6a74c93321a9ffc2ed777ff8fdebf56b4ccfbb374353cf81d40db.jpg" />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item className='carousel-img'>
            <img src="https://static1.squarespace.com/static/5b75d9b5697a98dee0304524/5b75e4d0562fa74cf88c3caf/5b76f46f032be43ac7263aa4/1534523617827/ElliottRoofing_101117-60-%282%29.jpg?format=2500w" />
            {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item className='carousel-img'>
            <img src="https://3sdwfb1xa06f3y7ie9255ali-wpengine.netdna-ssl.com/wp-content/uploads/sites/6/2017/06/4-iko-roofing-components-BP-PRO-4-hip-n-ridge_4.jpg" />
            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default carousel;
