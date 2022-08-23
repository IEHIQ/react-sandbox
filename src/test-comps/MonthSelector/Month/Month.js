import { useState } from 'react';
import './month.sass';

function Month(props) {

    return (
        <div className="month">
            {props.monthName}
        </div>
    );
}

export default Month;