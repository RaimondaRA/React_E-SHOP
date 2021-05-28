import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import {Navbar, Nav} from 'react-bootstrap';
import Products from './Products';
import Cart from './Cart';
import Shop from './Shop';

const Main = () => {
    //prekiu krepselis
    const [item, setItem] = useState([]);

    //prekes pridejimas i krepseli
    const addToCart = (product) => {
        //console.log(product);
        let newCart = [...item];
        let arYra = newCart.find((preke)=> product.name === preke.name);
        if(arYra && arYra.kiekis < product.countInStock){
            arYra.kiekis++;
        } else if (arYra===undefined && product.countInStock > 0){
            arYra = {
                ...product,
                kiekis: 1
            }
            newCart.push(arYra);
        } else {
            alert('No item left in stock');
        }
    setItem(newCart);
    }
    //console.log(item);

    //metodas krepselio isvalymui
    const clearCart = () => {
    setItem([]);
    }

    //konkrecios prekes trynimo metodas
    const deleteProduct = (product) => {
    console.log(product);
    setItem(item.filter((p) => p !==product));
    }

    //konkrecios prekes kiekio mazinimas
    const decreaseQuantity = (product) => {
    console.log("kiekio mazinimas "+product)
    let newCart = [...item];
    let arYra = newCart.find((preke) => product.name === preke.name);
    if(arYra.kiekis > 1){
        arYra.kiekis--;
        setItem(newCart.splice(arYra));
    } else {
        setItem(item.filter((p) => p !== arYra))
    }
    }

    //konkrecios prekes kiekio didnimas
    const increaseQuantity = (product) => {
        //console.log(`kiekio didinimo funkcija ${product}`)
        let newCart = [...item];
        let arYra = newCart.find((preke) => product.name === preke.name);
        if(arYra && arYra.kiekis < product.countInStock) {
            arYra.kiekis++;
        } else{
            alert("Sorry, there is no item left in stock")
        }
        setItem(newCart)
    }

    return (
        <Router>
            <Navbar bg="light" variant="light" className="sticky-top">
                <Link to="/"><Navbar.Brand>E-Shop</Navbar.Brand></Link>
                <Nav className="mr-auto">
                    <Nav.Link><Link to ="/products">Product List</Link></Nav.Link>
                    <Nav.Link><Link to ="/cart">Cart</Link></Nav.Link>
                </Nav>
            </Navbar>
            <Switch>
                <Route path="/cart">
                    <Cart item={item} clearCart={clearCart} deleteProduct={deleteProduct} decreaseQuantity={decreaseQuantity} increaseQuantity={increaseQuantity}/>
                </Route>
                <Route path="/products">
                    <Products addToCart={addToCart} />
                </Route>
                <Route path="/">
                    <Shop />
                </Route>
            </Switch>
        </Router>
    )
}

export default Main;