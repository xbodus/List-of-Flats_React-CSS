import React from 'react';
import { useState } from 'react';

function FlatForm({sendToParent}) {
    // Stores the initial visibility of the form
    const [visible, setVisible] = useState(false);
    // Stores the checkbox state
    const [isChecked, setIsChecked] = useState(false);
    // Stores the inputted user data
    const [newData, setData] = useState(
        {
            name: '',
            location: '',
            price: '',
            image: '',
            available: false,
        }
    )

    const handleInputChange = (e) => {
        // takes the name and value attributes from the event target based on the name of the target
        let { name, value } = e.target;

        // because the checkbox works on different standards:
        //      1. First we check if the target being changed is the checkbox input
        //      2. Because we have to have more control of the checkbox state for the reset, when the user interacts with the input we set the change here
        //      3. Then we change the value for the newData avaiablility attribute to it's opposite
        if (name === "available") {
            setIsChecked(!isChecked)
            value = !newData.available;
        }

        // Then we set the rest of the input data. Because the input takes into account each target one at a time we need to make sure we have a copy of the previously entered data
        setData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    // 1. Prevent the site from refreshing
    // 2. Send the newly entered data to the parent component
    // 3. Reset the checkbox and data to clear the input fields for the next entry
    const handleSubmit = (e) => {
        e.preventDefault()
        sendToParent(newData)
        setIsChecked(!isChecked)
        setData(
            {
                name: '',
                location: '',
                price: '',
                image: '',
                available: false,
            }
        )
    }


    // // handle the intial state of the form (display: none;)
    // if (visible === false) {
    //     return (
    //         <button id="addFlatButton" className='btn-fade-in' onClick={() => setVisible(!visible)}>Add Flat</button>
    //     )
    // }
    // // handles the state of the form after the add flat button is clicked revealing the form
    // else {
    return (
        <>
            <div id="formContainer" className={`form-container ${visible ? 'open' : ''}`}>
                <form>
                    <label htmlFor="name">Name: </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder='name'
                        value={newData.name}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="location">Location: </label>
                    <input
                        id="location"
                        name="location"
                        type="text"
                        placeholder='location'
                        value={newData.location}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="price">Price: </label>
                    <input
                        id="price"
                        name="price"
                        type="text"
                        placeholder='price'
                        value={newData.price}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="image">Image URL: </label>
                    <input
                        id="image"
                        name="image"
                        type="text"
                        placeholder='image'
                        alt={newData.name}
                        value={newData.image}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="available">Available: </label>
                    <input
                        id="available"
                        name="available"
                        type="checkbox"
                        value={newData.available}
                        onChange={handleInputChange}
                        checked={isChecked ? "checked" : ""}
                    />
                </form>
            </div>
            <button id="addFlatButton" type='submit' value='Submit' onClick={visible ? (e) => handleSubmit(e) : () => setVisible(!visible)}>Add Flat</button>
        </>
    )
    // }
}

export default FlatForm;