import { useEffect, useState } from 'react';
import DaySelector from '../DaySelector/DaySelector';
import MonthSelector from '../MonthSelector/MonthSelector';
import './dateselector.sass';

function DateSelector(props) {

    return (
        <div className="date-selector">
            <MonthSelector />
            <DaySelector />
        </div>
    );
}

export default DateSelector;