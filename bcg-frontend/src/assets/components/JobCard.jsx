import React from 'react';
import { Carousel } from 'react-bootstrap';

const JobCard = () => {
    return (
        <div className="container">

            <Carousel >
                <Carousel.Item>
                    <img style={{height:'35em'}}
                        className="d-block w-100"
                        src="https://sociology.plus/wp-content/uploads/2022/08/Blue-Collar-Worker-Sociology-Definition-669x350.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>What we provide</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{height:'35em'}}
                        className="d-block w-100"
                        src="https://blog.vantagecircle.com/content/images/2021/07/blue-collar-workers-examples.png"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default JobCard;
