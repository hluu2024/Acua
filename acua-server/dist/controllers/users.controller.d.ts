import { Count, Filter, Where } from '@loopback/repository';
import { Users } from '../models';
import { UsersRepository } from '../repositories';
export declare class UsersController {
    usersRepository: UsersRepository;
    constructor(usersRepository: UsersRepository);
    create(users: Users): Promise<Users>;
    login(userSubmit: Users): Promise<Users | null>;
    logout(userSubmit: Users): Promise<void>;
    count(where?: Where<Users>): Promise<Count>;
    find(filter?: Filter<Users>): Promise<Users[]>;
    updateAll(users: Users, where?: Where<Users>): Promise<Count>;
    findById(id: number): Promise<Users>;
    updateById(id: number, users: Users): Promise<void>;
    replaceById(id: number, users: Users): Promise<void>;
    deleteById(id: number): Promise<void>;
}
