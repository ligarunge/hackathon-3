import CartProduct from "./CartProduct";
import "./CartProduct.css";

function CartSummaryTab() {


    return (
        <div>
            <div className="row">
                <div className="col-2">
                    <div className="row">
                        <div className="col mx-3 mt-5">
                        <h6>Shipping address</h6>
                        <p>
                        8 Apple Park Way, California, United States
                        </p>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col mx-3 mt-3">
                    <h6>Billing address</h6>
                    <p>
                        9 Pear Park Way, California, United States
                        </p>
                        </div>
                    </div>
                </div>
                <div className="col">
            <div className="row pt-3 mb-3 mx-3 top-cart-row">
                <div className="col"></div>
                <div className="col fw-bold">Product</div>
                <div className="col fw-bold">Quantity</div>
                <div className="col fw-bold">Price</div>
                <div className="col fw-bold">Total</div>
                <div className="col"></div>
            </div>
            <div><CartProduct title="Pop Mouse" price="29.99" image="images/cart_images/cartImg1.png"/></div>
            <div><CartProduct title="Bright Mouse" price="49.99" image="images/cart_images/cartImg2.png"/></div>
            <div><CartProduct title="Pink Mouse" price="99.99"image="images/cart_images/cartImg3.png"/></div>
            </div>
        </div>
        </div>

    )
}

export default CartSummaryTab;