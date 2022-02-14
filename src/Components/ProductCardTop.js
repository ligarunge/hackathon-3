import React from "react"
import "./ProductCard.css"
 
export default function ProductCardTop() {
   
    return (
        <div className="header-colored">
            <div className="row pt-4 ps-5">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a className="link-none" href="/">Home</a></li>
                            <li className="breadcrumb-item"><a className="link-none" href="/categories">Categories</a></li>
                            <li className="breadcrumb-item active" aria-current="category">Mice</li>
                        </ol>
                    </nav>
                </div>
            <div className="category-top-header">
                <h1 className="category-header mt-3 display-3">Mice</h1>
            </div>
           
            <div className="category-top mt-5 pb-5">
                <img src="/images/product_images/mouse1-img-3.png" alt="mouse" className="category-image-left"/>
                <div className="category-text ms-5" style={{textAlign: 'justify'}}>
                    <p>Shop wireless and wired mice. Choose from the Bluetooth®, performance, ergonomic, business, EDU, travel, compact, and WFH product range. </p>
                    <p>Founded in 1981 in Lausanne, Switzerland, and quickly expanding to the Silicon Valley, Logitech started connecting people through innovative computer peripherals and many industry firsts, including the infrared cordless mouse, the thumb-operated trackball, the laser mouse, and more.</p>
                </div>
            </div>
        </div>
    )
}
