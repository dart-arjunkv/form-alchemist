import { useEffect, useRef, useState } from 'react';
import { FormElement } from './types/FormElements';
import Picker from './Picker';
import { PreviewIcon, SaveIcon } from './assets/Icons';
import styled from 'styled-components';

type BuilerProps = {
    title?: string;
    formData?: FormElement[];
    onSave: (formData: FormElement[]) => void;
};

type DragElement = {
    type: FormElement['elementType'];
    uid: string;
    isWidget: boolean;
} | null;

type DStart = { type: FormElement['elementType']; uid: string; isWidget: boolean };

const StyledBuilder = styled.div`
    & .form-alcmst__header {
        padding: 0.8em 1em;
        background-color: var(--grey-50);
        border-bottom: 1px solid var(--grey-100);
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > div:first-child {
            font-size: 0.9rem;
            color: var(--grey-800);
        }

        & > div:first-child > span {
            font-size: 1rem;
            color: var(--grey-1000);
        }

        & > div:last-child {
            display: flex;
        }

        & > div:last-child > button {
            margin-left: 0.8em;
        }
    }

    & .form-alcmst__body {
        display: flex;

        & > div:first-child {
            padding: 1em;
            width: calc(100% - 200px);
            background-color: var(--grey-50);
            /* background-image: linear-gradient(to right, #80808012 1px, transparent 1px),
                linear-gradient(to bottom, #80808012 1px, transparent 1px);
            background-size: 6px 6px; */
            /* background-image: radial-gradient(var(--grey-200) 1px, transparent 1px);
            background-size: 10px 10px; */
            background-image: linear-gradient(var(--grey-100) 2px, transparent 2px),
                linear-gradient(90deg, var(--grey-100) 2px, transparent 2px),
                linear-gradient(var(--grey-100) 1px, transparent 1px),
                linear-gradient(90deg, var(--grey-100) 1px, var(--grey-50) 1px);
            background-size: 50px 50px, 50px 50px, 10px 10px, 10px 10px;
            background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
            border-right: 1px solid var(--grey-100);
            display: flex;
            justify-content: center;
            align-items: center;
        }

        & > div:first-child > div {
            width: 80%;
            height: 100%;
            background-color: var(--white);
            border-radius: 4px;
        }
    }
`;

const Builder: React.FC<BuilerProps> = (props) => {
    const [formData, setFormData] = useState<FormElement[]>(() => props.formData || []);

    const [dragElement, setDragElement] = useState<DragElement>(null);
    const dropZoneRef = useRef<HTMLDivElement>(null);

    // const [elementEditor, setElementEditor] = useState<ElementEditor>({ show: false, element: null });

    // useEffect(() => {
    //     if (props.formData && Array.isArray(props.formData)) setFormData(props.formData);
    // }, [props.formData]);

    // useEffect(() => {
    //     if (formData.length === 0) dropZoneRef.current?.classList.add('empty');
    //     else dropZoneRef.current?.classList.remove('empty');
    // }, [formData]);

    const dragStart = (props: DStart) => setDragElement(props);
    const dragEnd = () => setDragElement(null);

    return (
        <StyledBuilder>
            <div className='form-alcmst__header'>
                <div>
                    Form: <span>{props.title || 'Custom Form'}</span>
                </div>
                <div>
                    <button>
                        <span>{PreviewIcon}</span>
                        Preview
                    </button>
                    <button>
                        <span>{SaveIcon}</span>
                        Save
                    </button>
                </div>
            </div>
            <div className='form-alcmst__body'>
                <div>
                    <div></div>
                </div>
                <div>
                    <Picker dStart={(type, uid, isWidget) => dragStart({ type, uid, isWidget })} dStop={dragEnd} />
                </div>
            </div>
        </StyledBuilder>
    );
};

export default Builder;
