interface SeminarElement {
    id: number,
    title: string,
    description: string,
    date: string,
    time: string,
    photo: string
}

interface SeminarElementProp extends SeminarElement {
    editHandler: (id: number) => void,
    deleteHandler: (id: number) => void
}

interface ModalDeleteProp {
    closeWindow: () => void,
    acceptWindow: () => void
}

interface ModalEditProp {
    closeWindow: () => void,
    acceptWindow: (el) => void,
    element: SeminarElement
}

export {SeminarElement, SeminarElementProp, ModalDeleteProp, ModalEditProp}