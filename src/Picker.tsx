import styled from 'styled-components';
import { TPicker } from './types/Builder';
import { FormElement } from './types/FormElements';
import {
    CalendarIcon,
    CheckboxGroupIcon,
    CheckboxIcon,
    CursorClickIcon,
    LocationIcon,
    MailIcon,
    NumberIcon,
    PersonIcon,
    PhoneIcon,
    RadioIcon,
    SelectIcon,
    TextBoxIcon,
    TextFieldIcon,
    TimePickerIcon
} from './assets/Icons';

const StyledPicker = styled.div`
    & {
        /* background-color: skyblue; */
        padding: 10px !important;
        width: 200px;
    }

    & .title {
        margin-left: 0.6em;
        font-size: 0.9rem;
        font-weight: normal;
        color: var(--grey-700);
        align-self: flex-start;
    }

    & .elements {
        /* background-color: #f5f5f5; */
        align-self: center;
        margin-top: 0.2em;
        width: 100%; //160px
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
    }

    & .element {
        margin: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 80px;
        font-size: 0.7rem;
        line-height: 1.2;
        background-color: transparent;
        border: 1px solid var(--grey-200);
        border-radius: 4px;
        transition: background-color 120ms ease;

        &:hover {
            background-color: var(--grey-100);
        }

        & svg path {
            fill: var(--grey-900);
        }

        & span {
            margin-top: 0.4em;
            width: 80%;
            color: var(--grey-900);
            /* border: 1px solid black; */
            text-align: center;
        }
    }
`;

const Picker: React.FC<TPicker> = ({ dStart, dStop }: TPicker) => {
    const getAttrs = (elementType: FormElement['elementType']) => ({
        className: 'element',
        draggable: true,
        onDragStart: () => dStart(elementType, '', true),
        onDragEnd: dStop
    });

    return (
        <StyledPicker>
            <h2 className='title'>Form Elements</h2>
            <div className='elements'>
                <div {...getAttrs('Name')}>
                    {PersonIcon}
                    <span>Name</span>
                </div>
                <div {...getAttrs('Address')}>
                    {LocationIcon}
                    <span>Address</span>
                </div>
                <div {...getAttrs('Email')}>
                    {MailIcon}
                    <span>Email</span>
                </div>
                <div {...getAttrs('PhoneNumber')}>
                    {PhoneIcon}
                    <span>Phone No.</span>
                </div>
                <div {...getAttrs('Text')}>
                    {TextFieldIcon}
                    <span>Text</span>
                </div>
                <div {...getAttrs('TextArea')}>
                    {TextBoxIcon}
                    <span>TextArea</span>
                </div>
                <div {...getAttrs('Number')}>
                    {NumberIcon}
                    <span>Number</span>
                </div>
                <div {...getAttrs('Dropdown')}>
                    {SelectIcon}
                    <span>Dropdown</span>
                </div>
                <div {...getAttrs('Checkbox')}>
                    {CheckboxIcon}
                    <span>Checkbox</span>
                </div>
                <div {...getAttrs('CheckboxGroup')}>
                    {CheckboxGroupIcon}
                    <span>Checkbox Group</span>
                </div>
                <div {...getAttrs('Radio')}>
                    {RadioIcon}
                    <span>Radio</span>
                </div>
                <div {...getAttrs('Date')}>
                    {CalendarIcon}
                    <span>Date</span>
                </div>
                <div {...getAttrs('Time')}>
                    {TimePickerIcon}
                    <span>Time</span>
                </div>
                <div {...getAttrs('Button')}>
                    {CursorClickIcon}
                    <span>Button</span>
                </div>
            </div>
        </StyledPicker>
    );
};

export default Picker;
