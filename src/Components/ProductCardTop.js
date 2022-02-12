import React from "react"
import "./ProductCard.css"
 
export default function ProductCardTop() {
   
    return (
        <div>
            <div className="category-top-header">
                <h1 className="category-header mt-3">Mice</h1>
            </div>
           
            <div className="category-top mt-5 me-5 mb-5">
                <img src="/images/product_images/mouse1-img-3.png" alt="mouse" className="category-image-left"/>
                <div className="category-text ms-5">
                    <p>Shop wireless and wired mice. Choose from the Bluetooth®, performance, ergonomic, business, EDU, travel, compact, and WFH product range. </p>
                    <p>Founded in 1981 in Lausanne, Switzerland, and quickly expanding to the Silicon Valley, Logitech started connecting people through innovative computer peripherals and many industry firsts, including the infrared cordless mouse, the thumb-operated trackball, the laser mouse, and more.</p>
                </div>
            </div>
        </div>
    )
}
