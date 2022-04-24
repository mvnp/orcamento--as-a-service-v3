export interface Budget {
    id: number,
    contractor_id: number,
    partner_id: number,
    project_id: number,
    budget_cat_id: number,
    subject: string,
    accepted: boolean,
    created_at: string,
    updated_at: string
}