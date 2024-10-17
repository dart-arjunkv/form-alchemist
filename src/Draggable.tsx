import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

type TDraggable = {
    children: React.ReactNode;
    id: string;
};

export function Draggable({ id, children }: TDraggable) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
    const style = {
        transform: CSS.Translate.toString(transform)
    };

    return (
        <div ref={setNodeRef} {...listeners} {...attributes} style={style}>
            {children}
        </div>
    );
}
