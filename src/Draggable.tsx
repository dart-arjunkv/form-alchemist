import { useDraggable } from '@dnd-kit/core';

type TDraggable = {
    children: React.ReactNode;
    id: string;
    uid: string;
    isWidget: boolean;
};

export function Draggable({ id, uid, isWidget, children }: TDraggable) {
    const { attributes, listeners, setNodeRef } = useDraggable({
        id,
        data: {
            uid,
            isWidget
        }
    });

    return (
        <div ref={setNodeRef} {...listeners} {...attributes}>
            {children}
        </div>
    );
}
