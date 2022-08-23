import { useState } from 'react';
import clsx from 'clsx';

function Day(props) {

    const [isPast, setPast] = useState(props.past || false);
    const [isCurrent, setCurrent] = useState(props.current || false);
    const [weekday, setWeekday] = useState(props.weekday || 'пн');
    const [datenum, setDatenum] = useState(props.datenum || 0);

    function handleClick() {
        setCurrent(true);
    }

    return (
        <div 
            className={clsx('day', isPast && 'past', isCurrent && 'current')}
            onClick={handleClick}    
        >
            <div className="title">{weekday}</div>
            <div className="num">{datenum}</div>
        </div>
    );
}

export default Day;