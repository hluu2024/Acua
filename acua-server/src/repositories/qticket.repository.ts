import { DefaultCrudRepository } from '@loopback/repository';
import { Qticket, QticketRelations } from '../models';
import { MysqlDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class QticketRepository extends DefaultCrudRepository<Qticket,
    typeof Qticket.prototype.tic_id,
    QticketRelations> {
    constructor(
        @inject('datasources.mysql') dataSource: MysqlDataSource,
    ) {
        super(Qticket, dataSource);
    }
}
