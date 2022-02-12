import "./Cart.css"
import CartAddressTab from "../Components/CartAddressTab";
import CartProductsTab from "../Components/CartProductsTab";
import CartSummaryTab from "../Components/CartSummaryTab";

function Cart() {
    return (
        <div className="container">

            <div className="col mt-3 mb-4">
                <h2>Cart</h2>
            </div>

            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="products-tab" data-bs-toggle="tab" data-bs-target="#products" type="button" role="tab" aria-controls="home" aria-selected="true">Products</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="address-tab" data-bs-toggle="tab" data-bs-target="#address" type="button" role="tab" aria-controls="profile" aria-selected="false">Address</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="summary-tab" data-bs-toggle="tab" data-bs-target="#summary" type="button" role="tab" aria-controls="contact" aria-selected="false">Summary</button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="products" role="tabpanel" aria-labelledby="products-tab"><CartProductsTab/></div>
                <div className="tab-pane fade" id="address" role="tabpanel" aria-labelledby="address-tab"><CartAddressTab/></div>
                <div className="tab-pane fade" id="summary" role="tabpanel" aria-labelledby="summary-tab"><CartSummaryTab/></div>
            </div>
        </div>



    )
}

export default Cart;