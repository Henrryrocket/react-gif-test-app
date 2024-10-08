import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }
    const onSubmit = (event ) => {
        event.preventDefault();
        const cleanValue = inputValue.trim();

        if ( cleanValue.length <= 1 ){
            
            return;
        }
        onNewCategory( cleanValue );
        setInputValue('');
        // setCategories(categories => [inputValue, ...categories])
    }

    
  return (
    <form onSubmit={onSubmit} aria-label="form">
        <input
            type="text"
            placeholder="Search gifs"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}
AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}
