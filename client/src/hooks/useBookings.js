import { useEffect, useState } from "react";

export const useBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [selectedBooking, setSelectedBooking] = useState();
    const [adID, setAdID] = useState()
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const formatDateToInput = (date) => {

        const adjustDate = new Date(date);

        const year = adjustDate.getFullYear();
        const month = String(adjustDate.getMonth() + 1).padStart(2, '0');
        const day = String(adjustDate.getDate()).padStart(2, '0');
        const hours = String(adjustDate.getHours()).padStart(2, '0');
        const minutes = String(adjustDate.getMinutes()).padStart(2, '0');

        const modifiedDate = `${year}-${month}-${day}T${hours}:${minutes}`;
        return modifiedDate;
    };

    const getBookings = async () => {
        try {
            const response = await fetch('http://localhost:5000/bookings');
            const data = await response.json();
            setBookings(data);
        } catch (err) {
            console.log(err.message);
        }
    };

    const getSingleBooking = async eid => {
        try {
            const response = await fetch(`http://localhost:5000/bookings/${eid}`);
            const data = await response.json();
            setSelectedBooking(data);
            setAdID(data.eid)
            setDescription(data.title)
            setStartDate(formatDateToInput(data.start))
            setEndDate(formatDateToInput(data.end_time))
        } catch (err) {
            console.log(err.message);
        }
    };

    const setDescriptionHandler = (e) => {
        setDescription(e.target.value);
    };

    const setStartDateHandler = (e) => {
        setStartDate(formatDateToInput(new Date(e.target.value)));
    }

    const setEndDateHandler = (e) => {
        setEndDate(formatDateToInput(new Date(e.target.value)));
    }

    useEffect(() => {
        getBookings();
    }, [bookings]);

    return {
        hookBookings: bookings,
        hookGetBookings: getBookings,

        hookSelectedBooking: selectedBooking,
        hookSetSelectedBooking: getSingleBooking,

        hookDescription: description,
        hookSetDescriptionHandler: setDescriptionHandler,

        hookStartDate: startDate,
        hookSetStartDateHandler: setStartDateHandler,

        hookEndDate: endDate,
        hookSetEndDateHandler: setEndDateHandler,

        hookAdId: adID,
    };
};