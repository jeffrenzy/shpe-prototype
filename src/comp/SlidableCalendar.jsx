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

const MonthNames = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];

// SAMPLE DUMMY DATA
const CalendarEvents = {
    "2026-11-12": [
        {
            name: "Shpetina sundaes",
            description: "3:00 PM - 4:00 PM | Enjoy sundaes and socialize."
        },
        {
            name: "Speech workshop",
            description: "5:00 PM - 6:30 PM | Practice public speaking skills."
        }
    ],
    "2026-11-15": [
        {
            name: "Nationals prep",
            description: "2:00 PM - 4:00 PM | Prepare for the national competition."
        }
    ],
    "2026-11-25": [
        {
            name: "Resume workshop",
            description: "1:00 PM - 2:30 PM | Improve your resume."
        }
    ],
    "2026-12-03": [
        {
            name: "Senior sendoff",
            description: "6:00 PM - 8:00 PM | Celebrate graduating seniors."
        }
    ],
    "2027-01-10": [
        {
            name: "Show-and-tell",
            description: "4:00 PM - 5:30 PM | Share and present your projects."
        }
    ]
};

function SlidableCalendar() {
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());

    

    const previousMonth = () => {
        if (month === 0) {
            setMonth(11);
            setYear(year - 1);
        } else {
            setMonth(month - 1);
        }
    };

    const nextMonth = () => {
        if (month === 11) {
            setMonth(0);
            setYear(year + 1);
        } else {
            setMonth(month + 1);
        }
    };

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    return (
        <section className="slidable-calendar">
           <div className="slidable-calendar__controls">
                <button type="button" onClick={previousMonth}>
                    ＜
                </button>

                <h4>{MonthNames[month]} {year}</h4>

                <button type="button" onClick={nextMonth}>
                    ＞
                </button>
            </div>

            <div className="slidable-calendar__grid">
                {Array.from({ length: 42 }, (_, index) => {
                    // this code is pretty much a loop that creates each individual cell

                    // First 7 cells contain weekday names
                    if (index < 7) {
                        return (
                            <div className="slidable-calendar__cell" key={index}>
                                {DayNames[index]}
                            </div>
                        );
                    }

                    // Calculate the day number
                    const dayNumber = index - 7 - firstDayOfMonth + 1;

                    // retrieve events for current cell
                    const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(dayNumber).padStart(2, "0")}`;
                    const events = CalendarEvents[dateKey] || [];
                    const eventsListDisplay = events.map((event, eventIndex) => (
                        <div
                            className="slidable-calendar__event"
                            key={eventIndex}
                        >
                            {event.name}

                            <div className="slidable-calendar__tooltip">
                                {event.description}
                            </div>
                        </div>
                    ));

                    return (
                        <div className="slidable-calendar__cell" key={index}>
                            {dayNumber >= 1 && dayNumber <= daysInMonth && (
                                <>
                                    <span className="slidable-calendar__date">
                                        {dayNumber}
                                    </span>

                                    <div className="slidable-calendar__events">
                                        {eventsListDisplay}
                                    </div>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}


export default SlidableCalendar;