import React, { useEffect, useState } from "react";

export const useBookings = () => {
    const [bookings, setBookings] = useState([]);

    const getBookings = async () => {
        try {
            const response = await fetch('http://localhost:5000/bookings');
            const data = await response.json();
            setBookings(data);
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        getBookings();
    }, [bookings]);

    return {
        hookBookings: bookings
    };
};