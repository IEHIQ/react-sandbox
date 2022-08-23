import clsx from 'clsx';
import { useState } from 'react';
import './day.sass';

function Day(props) {

    const { weekNum, weekdayNum, weekdayName, dayNum } = props.day;
    const [selected, setSelected] = useState(props.selected || false);

    function handleClick(e) {
        if (props.handleClick)
            props.handleClick(dayNum);
    }

    return (
        <div
            className={clsx('day', selected && 'selected')}
            style={{
                gridRow: weekNum,
                gridColumn: weekdayNum + 1
            }}
            onClick={handleClick}
        >
            <div className='day__weekday-name'>{weekdayName}</div>
            <div className='day__day-num'>{dayNum}</div>
        </div>
    );

}

export default Day;