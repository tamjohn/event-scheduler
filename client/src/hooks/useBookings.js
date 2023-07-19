import { useEffect, useState } from "react";

export const useBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [selectedBooking, setSelectedBooking] = useState();
    const [adID, setAdID] = useState()
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

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
            setStartDate(data.start)
            setEndDate(data.end_time)
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