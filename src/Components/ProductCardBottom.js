import React from 'react';
import ProductCard from '../Components/ProductCard';
import data from '../data.js'
import "./ProductCard.css"


export default function ProductCardBottom() {
    const cards = data.map(item => {
        return (
            <ProductCard
                key={item.id}
                item={item}
            />
        )
    })        
    
    return (
        <div className="all-cards mt-5">
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}