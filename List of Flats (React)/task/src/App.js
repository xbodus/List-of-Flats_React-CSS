import React, { useState, useEffect } from "react";

import "./App.css"
import FlatForm from "./FlatForm";

function App() {
    const [flats, setFlats] = useState(
        [
            {
                id: 1,
                name: 'Cozy Apartment',
                location: 'Downtown',
                price: '$1500/month',
                available: true,
                image: 'https://example.com/cozy-apartment.jpg',
            },
            {
                id: 2,
                name: 'Modern Loft',
                location: 'Midtown',
                price: '$1800/month',
                available: false,
                image: 'https://example.com/modern-loft.jpg',
            },
            {
                id: 3,
                name: 'Charming Studio',
                location: 'Uptown',
                price: '$1200/month',
                available: true,
                image: 'https://example.com/charming-studio.jpg',
            },
        ]
    )

    // Maps the data from the flats array
    const listItems = flats.map((flat, ind) => {
        return (<li key={ind} className="border p-4 my-4 first:mt-1">
            <h3 className="font-medium text-2xl">{flat.name}</h3>
            <p>Location: {flat.location}</p>
            <p>Price: {flat.price}</p>
            <p>Availability: {flat.available ? "Available" : "Not Available"}</p>
            <img src={flat.image} alt={flat.name} />
        </li>)
    });

    // Receives the data from the child component to add to the copy of the flats array
    const handleAddFlat = (data) => {
        setFlats([...flats, data])
    }

    return (
        <div className="p-10">
            <header>
                <h1 className="uppercase font-bold text-4xl pb-3">SuperFlats</h1>
                <hr />
            </header>
            <main>
                {/* pass the handleAddFlat function to collect the data from the child */}
                <FlatForm sendToParent={handleAddFlat} />
                <h2 className="font-medium uppercase text-lg">Flat Lists</h2>
                <ul>
                    {listItems}
                </ul>
            </main>
        </div>
    )
}

export default App;
