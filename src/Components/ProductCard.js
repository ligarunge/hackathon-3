import React from "react"
import "./ProductCard.css"

export default function ProductCard(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="/images/star-red.png" className="card--star" />
                <span>{props.item.stats.rating} </span>
                <span className="gray">({props.item.stats.reviewCount}) </span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold"> ${props.item.price}</span></p>
        </div>
    )
}