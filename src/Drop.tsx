import styled from 'styled-components';
import { FormElement } from './types/FormElements';
import { useDroppable } from '@dnd-kit/core';

type DropZProps = {
    dStart?: (type: FormElement['elementType'], uid: string, isWidget: boolean) => void;
    dStop?: () => void;
    data?: FormElement[];
    // updateData:
};

const StyledDrop = styled.div`
    padding: 1em;
    height: 100%;
    width: 100%;
    background-color: var(--grey-50);
    display: flex;
    justify-content: center;
    align-items: center;

    & div {
        width: 80%;
        height: 100%;
        background-color: var(--white);
        border-radius: 4px;
        overflow: auto;
    }
`;

const Drop: React.FC<DropZProps> = (props: DropZProps) => {
    const { setNodeRef } = useDroppable({
        id: 'section',
        data: {
            type: 'main'
        }
    });
    return (
        <StyledDrop>
            <div ref={setNodeRef}></div>
        </StyledDrop>
    );
};

export default Drop;
