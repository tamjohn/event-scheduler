import React from 'react';
import * as Styled from './styles';
import { useBookings } from '../../hooks/useBookings';

export const GetBookingModal = ({ isOpen, onClose }) => {
    const hook = useBookings();

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
                            value={hook.hookDescription}
                        // onChange={handleInputTitle}
                        />
                    </Styled.FormField>
                    <Styled.FormField>
                        <Styled.Label>Start Time:</Styled.Label>
                        <Styled.Input
                            type="datetime-local"
                            value={hook.hookStartDate}
                        // onChange={handleStartDate}
                        />
                    </Styled.FormField>
                    <Styled.FormField>
                        <Styled.Label>End Time:</Styled.Label>
                        <Styled.Input
                            type="datetime-local"
                            value={hook.hookEndDate}
                        // onChange={handleEndDate}
                        />
                    </Styled.FormField>
                    <Styled.StyledButton type="submit">Save</Styled.StyledButton>
                    <Styled.StyledCancelButton type="submit">Cancel</Styled.StyledCancelButton>
                </form>
            </Styled.ModalOverlay>
        </Styled.PopUpBox>
    );
}