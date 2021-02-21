import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import { Tickethistory } from '../models';
import { TickethistoryRepository } from '../repositories';

export class TickethistoryController {
  constructor(
    @repository(TickethistoryRepository)
    public tickethistoryRepository: TickethistoryRepository,
  ) { }

  @post('/tickethistories', {
    responses: {
      '200': {
        description: 'Tickethistory model instance',
        content: { 'application/json': { schema: getModelSchemaRef(Tickethistory) } },
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tickethistory, {
            title: 'NewTickethistory',
            exclude: ['tic_id'],
          }),
        },
      },
    })
    tickethistory: Omit<Tickethistory, 'tic_id'>,
  ): Promise<Tickethistory> {
    return this.tickethistoryRepository.create(tickethistory);
  }


  @get('/tickethistories/count', {
    responses: {
      '200': {
        description: 'Tickethistory model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Tickethistory)) where?: Where<Tickethistory>,
  ): Promise<Count> {
    return this.tickethistoryRepository.count(where);
  }

  @get('/tickethistories', {
    responses: {
      '200': {
        description: 'Array of Tickethistory model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: getModelSchemaRef(Tickethistory) },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Tickethistory)) filter?: Filter<Tickethistory>,
  ): Promise<Tickethistory[]> {
    return this.tickethistoryRepository.find(filter);
  }

  @patch('/tickethistories', {
    responses: {
      '200': {
        description: 'Tickethistory PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tickethistory, { partial: true }),
        },
      },
    })
    tickethistory: Tickethistory,
    @param.query.object('where', getWhereSchemaFor(Tickethistory)) where?: Where<Tickethistory>,
  ): Promise<Count> {
    return this.tickethistoryRepository.updateAll(tickethistory, where);
  }

  @get('/tickethistories/{id}', {
    responses: {
      '200': {
        description: 'Tickethistory model instance',
        content: { 'application/json': { schema: getModelSchemaRef(Tickethistory) } },
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Tickethistory> {
    return this.tickethistoryRepository.findById(id);
  }

  @patch('/tickethistories/{id}', {
    responses: {
      '204': {
        description: 'Tickethistory PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tickethistory, { partial: true }),
        },
      },
    })
    tickethistory: Tickethistory,
  ): Promise<void> {
    await this.tickethistoryRepository.updateById(id, tickethistory);
  }

  @put('/tickethistories/{id}', {
    responses: {
      '204': {
        description: 'Tickethistory PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tickethistory: Tickethistory,
  ): Promise<void> {
    await this.tickethistoryRepository.replaceById(id, tickethistory);
  }

  @del('/tickethistories/{id}', {
    responses: {
      '204': {
        description: 'Tickethistory DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tickethistoryRepository.deleteById(id);
  }
}
