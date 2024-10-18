import { Active, DragOverlay, useDndMonitor } from '@dnd-kit/core';
import { useState } from 'react';
import { formElements, layoutElements, TPickerElement } from './PickerElements';
import { PickerElement } from './Picker';
import styled from 'styled-components';

const Styled = styled.div`
    /* margin: 5px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 75px;
    height: 75px;
    font-size: 0.7rem;
    line-height: 1.2;
    background-color: transparent;
    border: 1px solid var(--grey-100);
    border-radius: 4px;
    transition: background-color 120ms ease;

    &:hover {
        background-color: var(--grey-100);
    }

    & svg {
        width: 20px;
    }

    & svg path {
        fill: var(--grey-800);
    }

    & span {
        margin-top: 0.4em;
        width: 80%;
        color: var(--grey-800);
        /* border: 1px solid black; */
        text-align: center;
    }
`;

function DragOverlayWrapper() {
    const [draggedElement, setDraggedElement] = useState<Active | null>(null);

    useDndMonitor({
        onDragStart: ({ active }) => setDraggedElement(active),
        // onDragMove: ({ active, over }) => {
        //     console.log('Dragged over:', over);
        // },
        onDragEnd: ({ active, over }) => {
            setDraggedElement(null);
            console.log(active);
            console.log(over);
        },
        onDragCancel: () => setDraggedElement(null)
    });

    if (draggedElement) {
        const id = draggedElement.id;
        const elem = [...layoutElements, ...formElements].find((e) => e.element === id) as TPickerElement;
        return (
            <DragOverlay>
                <Styled>
                    <PickerElement {...elem} />
                </Styled>
            </DragOverlay>
        );
    }

    return null;
}

export default DragOverlayWrapper;
