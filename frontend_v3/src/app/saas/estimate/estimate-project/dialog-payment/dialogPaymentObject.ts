export interface DialogPaymentObject {
    title: string;
    text: string;
    btnTrue?: string;
    btnFalse?: string;
    btnTrueId?: string;
    btnFalseId?: string;
    fields?: Array<DialogPaymentFields>;
    payments?: Array<PaymentFields>;
    classButton?: string;
    task?: Array<any>;
}

export interface DialogPaymentFields {
    label: string;
    value: string;
}

export interface PaymentFields {
    id: number;
    project_id: string;
    description_of_service: string;
    date_task_executed: string;
    total_amount_task: string;
}