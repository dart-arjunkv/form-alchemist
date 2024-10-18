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

export type TPickerElement = { element: FormElement['elementType']; text: string; icon: JSX.Element };

export const layoutElements: TPickerElement[] = [
    {
        element: 'Title',
        text: 'Title',
        icon: TitleIcon
    },
    {
        element: 'Paragraph',
        text: 'Paragraph',
        icon: ParagraphIcon
    },
    {
        element: 'Separator',
        text: 'Separator',
        icon: SeparatorIcon
    },
    {
        element: 'Spacer',
        text: 'Spacer',
        icon: SpacerIcon
    },
    {
        element: 'Section',
        text: 'Section',
        icon: SectionIcon
    }
];

export const formElements: TPickerElement[] = [
    {
        element: 'Name',
        text: 'Name',
        icon: PersonIcon
    },
    {
        element: 'Address',
        text: 'Address',
        icon: LocationIcon
    },
    {
        element: 'Email',
        text: 'Email',
        icon: MailIcon
    },
    {
        element: 'PhoneNumber',
        text: 'Phone No.',
        icon: PhoneIcon
    },
    {
        element: 'Text',
        text: 'Text',
        icon: TextFieldIcon
    },
    {
        element: 'TextArea',
        text: 'TextArea',
        icon: TextBoxIcon
    },
    {
        element: 'Number',
        text: 'Number',
        icon: NumberIcon
    },
    {
        element: 'Dropdown',
        text: 'Dropdown',
        icon: SelectIcon
    },
    {
        element: 'Checkbox',
        text: 'Checkbox',
        icon: CheckboxIcon
    },
    {
        element: 'CheckboxGroup',
        text: 'Checkbox Group',
        icon: CheckboxGroupIcon
    },
    {
        element: 'Radio',
        text: 'Radio',
        icon: RadioIcon
    },
    {
        element: 'Date',
        text: 'Date',
        icon: CalendarIcon
    },
    {
        element: 'Time',
        text: 'Time',
        icon: TimePickerIcon
    },
    {
        element: 'Button',
        text: 'Button',
        icon: CursorClickIcon
    }
];
