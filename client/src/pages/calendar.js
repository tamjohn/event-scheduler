import React, { useState } from "react";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useBookings } from "../hooks/useBookings";
import { AddBookingModal } from "../components/AddBookingModal/addBookingModal";

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

function CalendarTemplate() {
    const hook = useBookings();
    const [isSlotOpen, setIsSlotOpen] = useState(false);

    const handleSlotClick = () => {
        setIsSlotOpen(!isSlotOpen);
    };

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
            <div>
                {isSlotOpen && <AddBookingModal />}
            </div>
            <Calendar
                localizer={localizer}
                formats={formats}
                events={convertDate(hook.hookBookings)}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 900, margin: "50px" }}
                onSelectSlot={handleSlotClick}
                selectable
            />
        </div>
    )
}

export default CalendarTemplate;