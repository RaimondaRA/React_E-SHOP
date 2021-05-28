import React from 'react'
import data from '../data/Data';
import { Card, Button} from 'react-bootstrap';

const Products = ({addToCart}) => {
    return (
        <div className="d-flex flex-wrap">
            {data.map((preke, index) => (
                <Card className="col-4" key={index} style={{ width: '18rem' }}>
                <Card.Img variant="top" height="300" src={preke.imageUrl}/>
                <Card.Body>
                    <Card.Title>{preke.name}</Card.Title>
                    <Card.Text>{preke.description}</Card.Text>
                    <Card.Text>Price: {preke.price} $</Card.Text>
                    <Button variant="info" className = "btn btn-lg ml-auto" onClick={()=>addToCart(preke)}>Add to Cart</Button>
                </Card.Body>
            </Card>
            ))}
        </div>
    )
}

export default Products;
