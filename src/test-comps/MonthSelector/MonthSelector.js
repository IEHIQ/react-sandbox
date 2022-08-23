import { useState } from 'react';
import './monthselector.sass';
import Month from './Month/Month';

function MonthSelector(props) {

    const [month, setMonth] = useState(0);
    const year = props.year;
    const [monthName, setMonthName] = useState('');

    function setupMonthName() {
        new Date(year, month).toLocaleDateString('ru', { month: 'long' });
    }

    return (
        <div className="month-selector">
            <button className='month-selector__back-button'>{'<'}</button>
            <Month monthName={monthName}/>
            <button className='month-selector__forward-button'>{'>'}</button>
        </div>
    );
}

export default MonthSelector;