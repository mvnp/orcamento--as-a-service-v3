export interface DialogObject {
    title: string;
    text: string;
    btnTrue?: string;
    btnFalse?: string;
    btnTrueId?: string;
    btnFalseId?: string;
    fields?: Array<DialogFieldsFields>;
    classButton?: string;
    iconBtnFalse?: string;
    iconBtnTrue?: string;
    content?: string;
}

export interface DialogFieldsFields {
    label: string;
    value: string;
}