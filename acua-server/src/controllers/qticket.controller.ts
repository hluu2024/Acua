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
import { Qticket } from '../models';
import { QticketRepository } from '../repositories';

export class QticketController {
    constructor(
        @repository(QticketRepository)
        public qticketRepository: QticketRepository,
    ) {
    }

    @post('/qtickets', {
        responses: {
            '200': {
                description: 'Qticket model instance',
                content: { 'application/json': { schema: getModelSchemaRef(Qticket) } },
            },
        },
    })
    async create(@requestBody() qticket: Qticket): Promise<Qticket> {
        return this.qticketRepository.create(qticket);
    }

    @get('/qtickets/count', {
        responses: {
            '200': {
                description: 'Qticket model count',
                content: { 'application/json': { schema: CountSchema } },
            },
        },
    })
    async count(
        @param.query.object('where', getWhereSchemaFor(Qticket)) where?: Where<Qticket>,
    ): Promise<Count> {
        return this.qticketRepository.count(where);
    }

    @get('/qtickets', {
        responses: {
            '200': {
                description: 'Array of Qticket model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: getModelSchemaRef(Qticket, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    })
    async find(
        @param.query.object('filter', getFilterSchemaFor(Qticket)) filter?: Filter<Qticket>,
    ): Promise<Qticket[]> {
        return this.qticketRepository.find(filter);
    }

    @patch('/qtickets', {
        responses: {
            '200': {
                description: 'Qticket PATCH success count',
                content: { 'application/json': { schema: CountSchema } },
            },
        },
    })
    async updateAll(
        @requestBody({
            content: {
                'application/json': {
                    schema: getModelSchemaRef(Qticket, { partial: true }),
                },
            },
        })
        qticket: Qticket,
        @param.query.object('where', getWhereSchemaFor(Qticket)) where?: Where<Qticket>,
    ): Promise<Count> {
        return this.qticketRepository.updateAll(qticket, where);
    }

    @get('/qtickets/{id}', {
        responses: {
            '200': {
                description: 'Qticket model instance',
                content: { 'application/json': { schema: getModelSchemaRef(Qticket) } },
            },
        },
    })
    async findById(@param.path.number('id') id: number, ): Promise<Qticket> {
        return this.qticketRepository.findById(id);
    }

    @patch('/qtickets/{id}', {
        responses: {
            '204': {
                description: 'Qticket PATCH success',
            },
        },
    })
    async updateById(
        @param.path.number('id') id: number,
        @requestBody({
            content: {
                'application/json': {
                    schema: getModelSchemaRef(Qticket, { partial: true }),
                },
            },
        })
        qticket: Qticket,
    ): Promise<void> {
        await this.qticketRepository.updateById(id, qticket);
    }

    @put('/qtickets/{id}', {
        responses: {
            '204': {
                description: 'Qticket PUT success',
            },
        },
    })
    async replaceById(
        @param.path.number('id') id: number,
        @requestBody() qticket: Qticket,
    ): Promise<void> {
        await this.qticketRepository.replaceById(id, qticket);
    }

    @del('/qtickets/{id}', {
        responses: {
            '204': {
                description: 'Qticket DELETE success',
            },
        },
    })
    async deleteById(@param.path.number('id') id: number): Promise<void> {
        await this.qticketRepository.deleteById(id);
    }
}
