import { Count, Filter, Where } from '@loopback/repository';
import { Qticket } from '../models';
import { QticketRepository } from '../repositories';
export declare class QticketController {
    qticketRepository: QticketRepository;
    constructor(qticketRepository: QticketRepository);
    create(qticket: Qticket): Promise<Qticket>;
    count(where?: Where<Qticket>): Promise<Count>;
    find(filter?: Filter<Qticket>): Promise<Qticket[]>;
    updateAll(qticket: Qticket, where?: Where<Qticket>): Promise<Count>;
    findById(id: number): Promise<Qticket>;
    updateById(id: number, qticket: Qticket): Promise<void>;
    replaceById(id: number, qticket: Qticket): Promise<void>;
    deleteById(id: number): Promise<void>;
}
