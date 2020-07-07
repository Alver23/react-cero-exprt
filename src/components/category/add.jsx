import React, {useState} from "react";
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
    const [ inputValue, setInputValue ] = useState('');

    const onChangeValue = event => setInputValue(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();
        if (inputValue.trim().length > 2 ) {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={onChangeValue} value={inputValue}/>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}



export default AddCategory;