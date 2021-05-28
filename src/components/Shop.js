import React from 'react'
import data from '../data/Data';
import { Carousel } from 'react-bootstrap';

const Shop = () => {
    return (
        <div>
            <Carousel>
            {data.map((preke, index) => (
                <Carousel.Item>
                <img className="d-block w-100" src={preke.imageUrl}/>
                <Carousel.Caption>
                    <h3>{preke.name}</h3>
                    <p>{preke.description}</p>
                </Carousel.Caption>
            </Carousel.Item>
            ))}
            </Carousel>
        </div>
    )
}

export default Shop;