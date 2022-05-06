export interface DialogFunctionsObject {
    title: string;
    text: string;
    btnTrue?: string;
    btnFalse?: string;
    btnTrueId?: string;
    btnFalseId?: string;
    fields?: Array<DialogFields>;
}

export interface DialogFields {
    label: string;
    value: string;
}