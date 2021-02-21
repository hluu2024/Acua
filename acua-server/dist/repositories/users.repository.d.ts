import { DefaultCrudRepository } from '@loopback/repository';
import { Users, UsersRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class UsersRepository extends DefaultCrudRepository<Users, typeof Users.prototype.id, UsersRelations> {
    constructor(dataSource: MysqlDataSource);
}
