import { Entity } from '@loopback/repository';
export declare class Qticket extends Entity {
    tic_id: number;
    user_id?: number;
    loc_id: number;
    win_id?: number;
    time_created: string;
    time_serviced?: string;
    first_name: string;
    last_name?: string;
    email: string;
    phone: string;
    reason_of_visit: string;
    user_note?: string;
    constructor(data?: Partial<Qticket>);
}
export interface QticketRelations {
}
export declare type QticketWithRelations = Qticket & QticketRelations;
