import { Children, useEffect, useState } from 'react';
import './SlidableCalendar.css';

const DayNames = {
    [0]: 'Mon',
    [1]: 'Tue',
    [2]: 'Wed',
    [3]: 'Thu',
    [4]: 'Fri',
    [5]: 'Sat',
    [6]: 'Sun',
};

function SlidableCalendar() {
    return (
        <section className="slidable-calendar">
            <div className="slidable-calendar__controls">
                <button type="button">
                    ＜
                </button>

                <h4>Month Name</h4>

                <button type="button">
                    ＞
                </button>
            </div>

            <div className="slidable-calendar__grid">
                {Array.from({ length: 49 }, (_, index) => (
                    <div className="slidable-calendar__cell" key={index}>
                        {((index >= 0 && index <= 6) && DayNames[index])}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default SlidableCalendar;