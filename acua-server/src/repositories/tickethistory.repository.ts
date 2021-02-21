import {DefaultCrudRepository} from '@loopback/repository';
import {Tickethistory} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TickethistoryRepository extends DefaultCrudRepository<
  Tickethistory,
  typeof Tickethistory.prototype.tic_id
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Tickethistory, dataSource);
  }
}
