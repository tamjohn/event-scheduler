import React from 'react';
import * as Styled from './styles';

export const AddBookingModal = (props) => {
    return (
        <Styled.PopUpBox>
            <Styled.ModalOverlay>
                <form>
                    <Styled.FormField>
                        <Styled.Label>Title:</Styled.Label>
                        <Styled.Input
                            type="text"
                        />
                    </Styled.FormField>
                    <Styled.FormField>
                        <Styled.Label>Start Time:</Styled.Label>
                        <Styled.Input
                            type="datetime-local"
                        />
                    </Styled.FormField>
                    <Styled.FormField>
                        <Styled.Label>End Time:</Styled.Label>
                        <Styled.Input
                            type="datetime-local"
                        />
                    </Styled.FormField>
                    <Styled.StyledButton type="submit">Submit</Styled.StyledButton>
                    <Styled.StyledCancelButton type="submit">Cancel</Styled.StyledCancelButton>
                </form>
            </Styled.ModalOverlay>
        </Styled.PopUpBox>
    );
};
