import React, { useState } from 'react'
import Proptypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    const [InputValue, setInputValue] = useState('Hola Mundo')


    const handleInputChange = (e) => {
        setInputValue (e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCategories(cats => [InputValue,...cats]);

    }
    return (
        <form onSubmit = {handleSubmit}>
            <input
                type='text'
                value = {InputValue}
                onChange = {handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes={
    setCategories: Proptypes.func.isRequired
}




export default AddCategory;
