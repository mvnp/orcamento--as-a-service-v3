export interface DialogMessageObject {
    title: string;
    text: string;
    btnTrue?: string;
    btnFalse?: string;
    btnTrueId?: string;
    btnFalseId?: string;
    fields?: Array<DialogMessageFields>
    classButton?: string;
}

export interface DialogMessageFields {
    label: string;
    value: string;
}