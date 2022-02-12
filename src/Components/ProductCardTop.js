import React from "react"
import "./ProductCard.css"

export default function ProductCardTop() {
    
    return (
        <div>
            <h1 className="m-3 display-5">Mice</h1>
            <div className="category-top mt-5 me-5 mb-5">
                <img src="/images/product_images/mouse1-img-1.png" alt="mouse" className="category-image-left"/>
                <div className="category-text ms-5">
                    <p>A Swiss company focused on innovation and quality, Logitech designs products and experiences that have an everyday place in people's lives. </p>
                    <p>Founded in 1981 in Lausanne, Switzerland, and quickly expanding to the Silicon Valley, Logitech started connecting people through innovative computer peripherals and many industry firsts, including the infrared cordless mouse, the thumb-operated trackball, the laser mouse, and more.</p>
                </div>
            </div>
        </div>
    )

    
}
 