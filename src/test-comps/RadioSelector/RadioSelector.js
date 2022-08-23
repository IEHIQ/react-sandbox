import { useEffect, useState } from 'react';
import RadioButton from './RadioButton/RadioButton';
import './radioselector.sass';

function RadioSelector(props) {

    return (
        <div className="radio-selector">
            <RadioButton
                id={'choice_#1'}
                name={'radio'}
                value={1}
                label={'#1'}
            />

            <RadioButton
                id={'choice_#2'}
                name={'radio'}
                value={2}
                label={'#2'}
            />

            <RadioButton
                id={'choice_#3'}
                name={'radio'}
                value={3}
                label={'#3'}
            />
        </div>
    );
}

export default RadioSelector;