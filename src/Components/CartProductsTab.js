import CartProduct from "./CartProduct";
import "./CartProduct.css";

function CartProductsTab() {

    return (
        <div>
            <div className="row pt-3 pb-0 mx-3 mb-3 top-cart-row">
                <div className="col-2"><img src="images/cart_images/cartImgBlank.png" className="blank-image" /></div>
                <div className="col-2 fw-bold">Product</div>
                <div className="col-2 fw-bold">Quantity</div>
                <div className="col fw-bold">Price</div>
                <div className="col fw-bold">Total</div>
                <div className="col"></div>
            </div>
            <div><CartProduct title="Pop Mouse" price="29.99" image="images/cart_images/cartImg1.png"/></div>
            <div><CartProduct title="Bright Mouse" price="49.99" image="images/cart_images/cartImg2.png"/></div>
            <div><CartProduct title="Black Mouse" price="99.99"image="images/cart_images/cartImg3.png"/></div>
        </div>

    )
}

export default CartProductsTab;