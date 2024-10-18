import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { FormElement } from './types/FormElements';
import Picker from './Picker';
import { PreviewIcon, SaveIcon } from './assets/Icons';
import Properties from './Properties';
import Drop from './Drop';
import { DndContext, UniqueIdentifier } from '@dnd-kit/core';
import DragOverlayWrapper from './DragOverlayWrapper';

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
    height: 100%;

    .form-alcmst__header {
        height: 50px;
        padding: 0 0.5em 0 1em;
        background-color: var(--white);
        border-bottom: 1px solid var(--grey-100);
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > div:first-child {
            font-size: 0.9rem;
            color: var(--grey-600);
        }

        & > div:first-child > span {
            font-size: 0.95rem;
            color: var(--grey-1000);
        }

        & > div:last-child {
            display: flex;
        }

        & > div:last-child > button {
            margin-left: 0.8em;
            background-color: transparent;
            color: var(--grey-800);
            border-color: var(--grey-100);

            &:hover {
                background-color: var(--grey-50);
            }

            & svg path {
                fill: var(--grey-800);
            }
        }
    }

    .form-alcmst__body {
        height: calc(100% - 50px);
        display: flex;

        & > .form-alcmst__drop-wrap {
            width: calc(100% - 200px - 250px); // calc with with with of picker and properties
            border-right: 1px solid var(--grey-100);
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
                    <button>{PreviewIcon}Preview</button>
                    <button>{SaveIcon}Save</button>
                </div>
            </div>

            <div className='form-alcmst__body'>
                <DndContext>
                    <Picker dStart={(type, uid, isWidget) => dragStart({ type, uid, isWidget })} dStop={dragEnd} />
                    <div className='form-alcmst__drop-wrap'>
                        <Drop />
                    </div>
                    <DragOverlayWrapper />
                </DndContext>
                <Properties />
            </div>
        </StyledBuilder>
    );
};

export default Builder;
