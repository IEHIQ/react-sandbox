import { useEffect, useState } from 'react';
import './radiobutton.sass';

function RadioButton(props) {

    function handleChange() {
        if (props.handleChange)
            props.handleChange();
        console.log(`Option ${props.value} is now selected`);
    }

    return (
        <div 
            className="radio-button"
        >
            <input
                type='radio'
                className='radio-button__button'
                id={props.id}
                name={props.name}
                value={props.value}
                onChange={handleChange}
            />
            <label
                htmlFor={props.id}
                className='radio-button__label non-selectable'
            >
                {props.label}
            </label>
        </div>
    );
}

export default RadioButton;