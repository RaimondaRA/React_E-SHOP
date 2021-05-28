import React from 'react';
import {Table} from 'react-bootstrap';

const Cart = ({item, clearCart, deleteProduct, decreaseQuantity, increaseQuantity}) => {
        
    const getTotal = () => {
        return item.reduce((sum, {price, kiekis}) => sum + price*kiekis, 0).toFixed(2); 

    }

    return (
        <div>
            <h2>Your Cart</h2>
            <Table striped bordered hover>
                {item.length > 0 &&
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Remove</th>
                    </tr>
                </thead>
}
<tbody>
                    {
                    
                        item && item.map((preke, index) =>(
                            <tr key ={index}>
                            <td>{index+1}</td>
                            <td><img className="img-thumbnail" style={{width: '90px'}} src={preke.imageUrl}/></td>
                            <td>{preke.name}</td>
                            <td className="d-flex"><button className="btn btn-secondary mr-2" onClick={()=>decreaseQuantity(preke)}>-</button>{preke.kiekis}<button className="btn btn-secondary ml-2" onClick={()=>increaseQuantity(preke)}>+</button></td>
                            <td>{preke.price}</td>
                            <td><button className="btn btn-danger" onClick={()=> deleteProduct(preke)}>Delete</button></td>
                            </tr>
                                ))
                        }
                        {item.length > 0 &&
                            <tr>
                                <td colSpan="4">Total Price: {getTotal()} $</td>
                                <td><button className="btn btn-success" onClick={clearCart}>Buy Now</button></td>
                                <td><button className="btn btn-danger" onClick={clearCart}>Clear Cart</button></td>
                            </tr>
                        }
                    </tbody>
            </Table>
        </div>
    )
}

export default Cart;
