import React, { useState } from 'react';
import * as Styled from './styles';
import { useBookings } from '../../hooks/useBookings';

export const AddBookingModal = ({ isOpen, onClose }) => {
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const hook = useBookings();

    const handleInputTitle = (event) => {
        setDescription(event.target.value);
    };

    const handleStartDate = (event) => {
        setStartDate(event.target.value);
    };

    const handleEndDate = (event) => {
        setEndDate(event.target.value);
    };

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const body = {
                eid: Math.floor(Math.random() * 1000),
                title: description,
                start: new Date(startDate),
                end_time: new Date(endDate),
            };
            const response = await fetch('http://localhost:5000/bookings', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })

            setDescription('');
            setStartDate('');
            setEndDate('');
            onClose();
            hook.hookBookings();

            console.log('Booking submitted successfully');
        } catch (err) {
            console.log('Error submitting data', err.message);
        }
    };

    if (!isOpen) {
        return null;
    }

    return (
        <Styled.PopUpBox>
            <Styled.ModalOverlay>
                <form>
                    <Styled.FormField>
                        <Styled.Label>Title:</Styled.Label>
                        <Styled.Input
                            type="text"
                            value={description}
                            onChange={handleInputTitle}
                        />
                    </Styled.FormField>
                    <Styled.FormField>
                        <Styled.Label>Start Time:</Styled.Label>
                        <Styled.Input
                            type="datetime-local"
                            value={startDate}
                            onChange={handleStartDate}
                        />
                    </Styled.FormField>
                    <Styled.FormField>
                        <Styled.Label>End Time:</Styled.Label>
                        <Styled.Input
                            type="datetime-local"
                            value={endDate}
                            onChange={handleEndDate}
                        />
                    </Styled.FormField>
                    <Styled.StyledButton type="submit" onClick={handleSubmit}>Submit</Styled.StyledButton>
                    <Styled.StyledCancelButton type="submit">Cancel</Styled.StyledCancelButton>
                </form>
            </Styled.ModalOverlay>
        </Styled.PopUpBox>
    );
};
