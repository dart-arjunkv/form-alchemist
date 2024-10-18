import { useDraggable } from '@dnd-kit/core';

type TDraggable = {
    children: React.ReactNode;
    id: string;
    dropId: string;
};

export function Droppable({ id, dropId, children }: TDraggable) {
    const { setNodeRef } = useDraggable({
        id,
        data: {
            dropId
        }
    });

    return <div ref={setNodeRef}>{children}</div>;
}
