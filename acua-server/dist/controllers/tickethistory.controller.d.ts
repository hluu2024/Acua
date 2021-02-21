import { Count, Filter, Where } from '@loopback/repository';
import { Tickethistory } from '../models';
import { TickethistoryRepository } from '../repositories';
export declare class TickethistoryController {
    tickethistoryRepository: TickethistoryRepository;
    constructor(tickethistoryRepository: TickethistoryRepository);
    create(tickethistory: Omit<Tickethistory, 'tic_id'>): Promise<Tickethistory>;
    count(where?: Where<Tickethistory>): Promise<Count>;
    find(filter?: Filter<Tickethistory>): Promise<Tickethistory[]>;
    updateAll(tickethistory: Tickethistory, where?: Where<Tickethistory>): Promise<Count>;
    findById(id: number): Promise<Tickethistory>;
    updateById(id: number, tickethistory: Tickethistory): Promise<void>;
    replaceById(id: number, tickethistory: Tickethistory): Promise<void>;
    deleteById(id: number): Promise<void>;
}
