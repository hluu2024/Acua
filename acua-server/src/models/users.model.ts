import { Entity, model, property } from '@loopback/repository';

@model({ settings: {} })
export class Users extends Entity {
  @property({
    type: 'number',
    id: true,
    required: false,
    generated: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string'
  })
  first_name: string;

  @property({
    type: 'string'
  })
  last_name: string;


  @property({
    type: 'number',
    default: 0,
  })
  win_id?: number;


  @property({
    type: 'number',
  })
  loc_id?: number;



  // @property({
  //   type: 'boolean',
  //   default: false,
  // })
  // loggedIn: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Users>) {
    super(data);
  }
}

export interface UsersRelations {
  // describe navigational properties here
}

export type UsersWithRelations = Users & UsersRelations;
