import styled from 'styled-components';
import { TPicker } from './types/TBuilder';
import { FormElement } from './types/FormElements';
import {
    CalendarIcon,
    CheckboxGroupIcon,
    CheckboxIcon,
    CursorClickIcon,
    LocationIcon,
    MailIcon,
    NumberIcon,
    ParagraphIcon,
    PersonIcon,
    PhoneIcon,
    RadioIcon,
    SectionIcon,
    SelectIcon,
    SeparatorIcon,
    SpacerIcon,
    TextBoxIcon,
    TextFieldIcon,
    TimePickerIcon,
    TitleIcon
} from './assets/Icons';
import { Draggable } from './Draggable';

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

const Picker: React.FC<TPicker> = ({ dStart, dStop }: TPicker) => {
    return (
        <StyledPicker>
            <h2>Layout Elements</h2>
            <div>
                <Draggable id={'Title'}>
                    {TitleIcon}
                    <span>Title</span>
                </Draggable>
                <div>
                    {ParagraphIcon}
                    <span>Paragraph</span>
                </div>
                <div>
                    {SeparatorIcon}
                    <span>Separator</span>
                </div>
                <div>
                    {SpacerIcon}
                    <span>Spacer</span>
                </div>
                <div>
                    {SectionIcon}
                    <span>Section</span>
                </div>
            </div>
            <h2>Form Elements</h2>
            <div>
                <div>
                    {PersonIcon}
                    <span>Name</span>
                </div>
                <div>
                    {LocationIcon}
                    <span>Address</span>
                </div>
                <div>
                    {MailIcon}
                    <span>Email</span>
                </div>
                <div>
                    {PhoneIcon}
                    <span>Phone No.</span>
                </div>
                <div>
                    {TextFieldIcon}
                    <span>Text</span>
                </div>
                <div>
                    {TextBoxIcon}
                    <span>TextArea</span>
                </div>
                <div>
                    {NumberIcon}
                    <span>Number</span>
                </div>
                <div>
                    {SelectIcon}
                    <span>Dropdown</span>
                </div>
                <div>
                    {CheckboxIcon}
                    <span>Checkbox</span>
                </div>
                <div>
                    {CheckboxGroupIcon}
                    <span>Checkbox Group</span>
                </div>
                <div>
                    {RadioIcon}
                    <span>Radio</span>
                </div>
                <div>
                    {CalendarIcon}
                    <span>Date</span>
                </div>
                <div>
                    {TimePickerIcon}
                    <span>Time</span>
                </div>
                <div>
                    {CursorClickIcon}
                    <span>Button</span>
                </div>
            </div>
        </StyledPicker>
    );
};

export default Picker;
