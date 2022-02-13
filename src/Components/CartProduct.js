import "./CartProduct.css"
import { useState } from "react";

function CartProduct(props) {
    const title = props.title;
    const price = props.price;
    const image = props.image;
    
    const [quantity, setQuantity] = useState(1) 
    const [displayNone, setDisplay] = useState("")
    
    const countMinusOne = () => {
        let newQuantity = quantity - 1;
        if (newQuantity < 0) {
            newQuantity = 0;
        }
        setQuantity(newQuantity);
    }

    const countPlusOne = () => {
        let newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    const totalProductPrice = (price * quantity).toFixed(2);

     const onRemove = () => {
        setDisplay("none");
    }

    return (

            <div className="row mt-4 mb-3 mx-3 align-items-center row-item" style={{display: displayNone}}>
                <div className="col-2"><img src={image} className="cart-image" /></div>
                <div className="col-2"><h6>{title}</h6></div>
                <div className="col-2">
                    <div className="row d-flex justify-content-start">
                        <div className="col-auto counter"><button onClick={countMinusOne} type="button" className="btn btn-success btn-minus">-</button></div>
                        <div className="col-auto counter">{quantity}</div>
                        <div className="col-auto counter"><button onClick={countPlusOne} type="button" className="btn btn-success">+</button></div>
                    </div>
                </div>
                <div className="col"><span>{price} </span>EUR</div>
                <div className="col fw-bold"><span id="total2">{totalProductPrice} </span>EUR</div>
                <div className="col"><button type="button" class="btn btn-dark" onClick={onRemove}>Remove</button></div>
            </div>
            
            )
        }


export default CartProduct;