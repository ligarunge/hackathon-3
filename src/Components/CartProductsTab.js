import CartProduct from "./CartProduct";
import "./CartProduct.css";

function CartProductsTab() {

    return (
        <div>
            <div className="row pt-3 mb-3 mx-3 top-cart-row">
                <div className="col"></div>
                <div className="col fw-bold">Product</div>
                <div className="col fw-bold">Quantity</div>
                <div className="col fw-bold">Price</div>
                <div className="col fw-bold">Total</div>
                <div className="col"></div>
            </div>
            <div><CartProduct title="Product 1" price="29.99"/></div>
            <div><CartProduct title="Product 2" price="49.99"/></div>
            <div><CartProduct title="Product 3" price="99.99"/></div>
        </div>

    )
}

export default CartProductsTab;