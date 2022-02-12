function CartAddressTab() {


    return (
        <div className="tab-pane p-4" id="address" role="tabpanel" aria-labelledby="address-tab">
        <div className="tab-card">
            <form>
                <div className="row row-shop">
                    <div className="col-6">
                        <div className="form-group">
                            <label for="shippingAddress" className="mb-2"><h6>Shipping Address</h6></label>
                            <textarea className="form-control" id="shippingAddress"
                                rows="12"></textarea>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="form-group">
                            <label for="billingAddress" className="mb-2"><h6>Billing Address</h6></label>
                            <textarea className="form-control" id="billingAddress"
                                rows="12"></textarea>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    </div>
    )
}

export default CartAddressTab;