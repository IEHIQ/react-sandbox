import { useState } from 'react';
import './dateview.sass';
import Day from './day/Day';

function DateView(props) {

    const [today] = useState(new Date());
    const [week, setWeek] = useState([]);

    function buildWeek() {
        let curWeekday = today.getDay();
        let day = new Date();
        for (let i = -curWeekday + 1; i + curWeekday < 8; i++ % 7) {
            day.setDate(today.getDate() + i);
            week.push(
                <Day
                    past={i < 0}
                    current={i === 0}
                    weekday={day.toLocaleDateString('ru', { weekday: 'short' })}
                    datenum={day.getDate()}
                />
            );
        }
    }

    buildWeek();

    return (
        <div className="date">
            <div className="month">
                <p>{today.toLocaleDateString('ru', { month: 'long' })}</p>
            </div>
            <div className="week">
                {week}
            </div>
        </div>
    );
}

export default DateView;