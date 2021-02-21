import { Entity, model, property } from '@loopback/repository';

@model({ settings: {} })
export class Qticket extends Entity {
  @property({
    type: 'number',
    id: true,
    // required: false,
    // generated: true,
  })
  tic_id: number;

  @property({
    type: 'number',
  })
  user_id?: number;

  @property({
    type: 'number',
    required: true,
  })
  loc_id: number;

  @property({
    type: 'number',
  })
  win_id?: number;

  @property({
    type: 'string',
    required: true,
  })
  time_created: string;

  @property({
    type: 'string',
  })
  time_serviced?: string;

  @property({
    type: 'string',
    required: true,
  })
  first_name: string;

  @property({
    type: 'string',
  })
  last_name?: string;

  @property({
    type: 'string',
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  phone: string;

  @property({
    type: 'string',
    required: true,
  })
  reason_of_visit: string;

  @property({
    type: 'string',
  })
  user_note?: string;

  constructor(data?: Partial<Qticket>) {
    super(data);
  }
}

export interface QticketRelations {
  // describe navigational properties here
}

export type QticketWithRelations = Qticket & QticketRelations;
