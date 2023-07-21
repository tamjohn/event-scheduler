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
        console.log(modifiedDate);
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

    useEffect(() => {
        getBookings();
        getSingleBooking();
    }, [bookings]);

    return {
        hookBookings: bookings,
        hookGetBookings: getBookings,

        hookSelectedBooking: selectedBooking,
        hookSetSelectedBooking: getSingleBooking,

        hookAdId: adID,
        hookDescription: description,
        hookStartDate: startDate,
        hookEndDate: endDate
    };
};