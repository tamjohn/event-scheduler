import React from "react";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useBookings } from "../hooks/useBookings";

const locales = {
    "en-CA": require("date-fns/locale/en-CA")
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

let formats = {
    timeGutterFormat: 'HH:mm'
}

// const testDateTime = "2023-07-02T15:30:00.000Z";

// function removeTimeZone(datetime) {
//     return datetime.slice(0, -5);
// }

// const events = [
//     {
//         id: '2',
//         title: "A303 Basketball",
//         start: new Date(removeTimeZone(testDateTime)),
//         end: new Date("2023-07-02T19:30:00"),
//     },
//     {
//         title: "Vacation",
//         start: new Date("2023-07-05T15:30:00"),
//         end: new Date("2023-07-05T19:30:00"),
//     },
//     {
//         title: "Conference",
//         start: new Date(2023, 7, 20),
//         end: new Date(2023, 7, 23),
//     },
// ];

function CalendarTemplate() {
    const hook = useBookings();
    const bookingsData = hook.hookBookings;

    function convertDate(data) {
        const modifiedData = data.map(item => {
            if (item.start) {
                item.start = new Date(item.start)
            }
            if (item.end) {
                item.end = new Date(item.end)
            }
            return item;
        });

        return modifiedData;
    }

    return (
        <div>
            <h1> EPS Multi-Court Booking</h1>
            <Calendar
                localizer={localizer}
                formats={formats}
                events={convertDate(bookingsData)}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 900, margin: "50px" }}
            />
        </div>
    )
}

export default CalendarTemplate;