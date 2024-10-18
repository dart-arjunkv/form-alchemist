import styled from 'styled-components';
import { TPicker } from './types/TBuilder';
import { Draggable } from './Draggable';
import { formElements, layoutElements, TPickerElement } from './PickerElements';

const StyledPicker = styled.div`
    padding: 10px;
    width: 200px;
    height: 100%;
    overflow: auto;

    h2 {
        font-size: 0.8rem;
        font-weight: normal;
        color: var(--grey-600);
    }

    & > div {
        margin-top: 0.4em;
        margin-bottom: 1em;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        place-items: center;
        gap: 10px;
    }

    & > div > div {
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
    }
`;

export const PickerElement: React.FC<TPickerElement> = ({ icon, text }) => {
    return (
        <>
            {icon}
            <span>{text}</span>
        </>
    );
};

const Picker: React.FC<TPicker> = (props: TPicker) => {
    return (
        <StyledPicker>
            <h2>Layout Elements</h2>
            <div>
                {layoutElements.map((el) => (
                    <Draggable key={el.element} id={el.element} uid='' isWidget={true}>
                        <PickerElement {...el} />
                    </Draggable>
                ))}
            </div>
            <h2>Form Elements</h2>
            <div>
                {formElements.map((el) => (
                    <Draggable key={el.element} id={el.element} uid='' isWidget={true}>
                        <PickerElement {...el} />
                    </Draggable>
                ))}
            </div>
        </StyledPicker>
    );
};

export default Picker;
