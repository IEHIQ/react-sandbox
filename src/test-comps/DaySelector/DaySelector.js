import { useState } from 'react';
import Day from './Day/Day';
import './dayselector.sass';

function getMonthDays(year, month, day) {
    let result = [];
    let monthDaysNum = new Date(year, month, 0).getDate();

    let curDate = new Date(year, month, day);
    let aDate = new Date(curDate);

    let weekNum = 1;

    let aDay = {};

    for (let i = -day + 1; i < monthDaysNum - day + 1; i++) {
        aDate.setDate(curDate.getDate() + i);

        console.log(aDate);

        if (aDate.getDay() === 1)
            weekNum++;

        aDay = {
            weekNum: weekNum,
            weekdayNum: (aDate.getDay() + 6) % 7,
            weekdayName: aDate.toLocaleDateString('ru', { weekday: 'short' }),
            dayNum: aDate.getDate()
        }

        result.push(
            <Day
                day={aDay}
                key={'|' + aDay.weekNum + aDay.weekdayName + aDay.dayNum}
            />
            // {
            //     dayNum: aDate.getDate(),
            //     weekNum: weekNum,
            //     weekdayNum: (aDate.getDay() + 6) % 7,
            //     weekdayName: aDate.toLocaleDateString('ru', { weekday: 'short' })
            // }
        );

        //const {weekNum, weekdayNum, weekdayName, dayNum} = props.day;
    }

    return result;
}

function DaySelector(props) {

    const year = props.year || new Date().getFullYear();
    const month = props.month || 0;
    const day = props.day || 1;

    const JSXdays = getMonthDays(year, month, day);

    return (
        <div className="day-selector">
            {JSXdays}
        </div>
    );
}

export default DaySelector;