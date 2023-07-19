import React, { useState, useEffect } from "react";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import { useBookings } from "../hooks/useBookings";
import { AddBookingModal } from "../components/AddBookingModal/addBookingModal";
import { GetBookingModal } from "../components/GetBookingModal/getBookingModal";

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
    const [isEventModalOpen, setIsEventModalOpen] = useState(false);

    const handleSlotClick = () => {
        setIsSlotOpen(!isSlotOpen);
    };

    const handleCloseSlotModal = () => {
        setIsSlotOpen(false);
    };

    const handleCloseEventModal = () => {
        setIsEventModalOpen(false);
    };

    const handleEventClick = () => {
        setIsEventModalOpen(!isEventModalOpen);
    };

    function convertDate(data) {
        const modifiedData = data.map(item => {
            if (item.start) {
                item.start = new Date(item.start)
            }
            if (item.end_time) {
                item.end_time = new Date(item.end_time)
            }
            return item;
        });

        return modifiedData;
    }

    return (
        <div>

            <h1> EPS Multi-Court Booking</h1>
            <div>
                {isSlotOpen && (
                    <AddBookingModal isOpen={isSlotOpen} onClose={handleCloseSlotModal} />
                )}
                {isEventModalOpen && (
                    <GetBookingModal isOpen={isEventModalOpen} onClose={handleCloseEventModal} />
                )}
            </div>
            <Calendar
                localizer={localizer}
                formats={formats}
                events={convertDate(hook.hookBookings)}
                startAccessor="start"
                endAccessor="end_time"
                style={{ height: 900, margin: "50px" }}
                onSelectSlot={handleSlotClick}
                onSelectEvent={handleEventClick}
                selectable
            />
        </div>
    )
}

export default CalendarTemplate;