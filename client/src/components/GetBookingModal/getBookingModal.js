import React, { useEffect } from 'react';
import * as Styled from './styles';
import { useBookings } from '../../hooks/useBookings';

export const GetBookingModal = ({ isOpen, onClose, eid }) => {
    const hook = useBookings();

    useEffect(() => {
        hook.hookSetSelectedBooking(eid);
    }, [eid]);

    if (!isOpen) {
        return null;
    }

    const handleSubmit = async e => {
        e.preventDefault();
        hook.hookUpdateSingleBooking();
        onClose();
    }

    return (
        <Styled.PopUpBox>
            <Styled.ModalOverlay>
                <form>
                    <Styled.FormField>
                        <Styled.Label>Title:</Styled.Label>
                        <Styled.Input
                            type="text"
                            value={hook.hookDescription}
                            onChange={hook.hookSetDescriptionHandler}
                        />
                    </Styled.FormField>
                    <Styled.FormField>
                        <Styled.Label>Start Time:</Styled.Label>
                        <Styled.Input
                            type="datetime-local"
                            value={hook.hookStartDate}
                            onChange={hook.hookSetStartDateHandler}
                        />
                    </Styled.FormField>
                    <Styled.FormField>
                        <Styled.Label>End Time:</Styled.Label>
                        <Styled.Input
                            type="datetime-local"
                            value={hook.hookEndDate}
                            onChange={hook.hookSetEndDateHandler}
                        />
                    </Styled.FormField>
                    <Styled.StyledButton type="submit" onClick={handleSubmit}>Save</Styled.StyledButton>
                    <Styled.StyledCancelButton type="submit">Cancel</Styled.StyledCancelButton>
                </form>
            </Styled.ModalOverlay>
        </Styled.PopUpBox>
    );
}