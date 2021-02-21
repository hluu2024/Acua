import { Entity } from '@loopback/repository';
export declare class Tickethistory extends Entity {
    tic_id?: number;
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
    [prop: string]: any;
    constructor(data?: Partial<Tickethistory>);
}
export interface TickethistoryRelations {
}
export declare type TickethistoryWithRelations = Tickethistory & TickethistoryRelations;
