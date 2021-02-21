"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TickethistoryController = class TickethistoryController {
    constructor(tickethistoryRepository) {
        this.tickethistoryRepository = tickethistoryRepository;
    }
    async create(tickethistory) {
        return this.tickethistoryRepository.create(tickethistory);
    }
    async count(where) {
        return this.tickethistoryRepository.count(where);
    }
    async find(filter) {
        return this.tickethistoryRepository.find(filter);
    }
    async updateAll(tickethistory, where) {
        return this.tickethistoryRepository.updateAll(tickethistory, where);
    }
    async findById(id) {
        return this.tickethistoryRepository.findById(id);
    }
    async updateById(id, tickethistory) {
        await this.tickethistoryRepository.updateById(id, tickethistory);
    }
    async replaceById(id, tickethistory) {
        await this.tickethistoryRepository.replaceById(id, tickethistory);
    }
    async deleteById(id) {
        await this.tickethistoryRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/tickethistories', {
        responses: {
            '200': {
                description: 'Tickethistory model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Tickethistory) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Tickethistory, {
                    title: 'NewTickethistory',
                    exclude: ['tic_id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TickethistoryController.prototype, "create", null);
__decorate([
    rest_1.get('/tickethistories/count', {
        responses: {
            '200': {
                description: 'Tickethistory model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Tickethistory))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TickethistoryController.prototype, "count", null);
__decorate([
    rest_1.get('/tickethistories', {
        responses: {
            '200': {
                description: 'Array of Tickethistory model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Tickethistory) },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Tickethistory))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TickethistoryController.prototype, "find", null);
__decorate([
    rest_1.patch('/tickethistories', {
        responses: {
            '200': {
                description: 'Tickethistory PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Tickethistory, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Tickethistory))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Tickethistory, Object]),
    __metadata("design:returntype", Promise)
], TickethistoryController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/tickethistories/{id}', {
        responses: {
            '200': {
                description: 'Tickethistory model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Tickethistory) } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TickethistoryController.prototype, "findById", null);
__decorate([
    rest_1.patch('/tickethistories/{id}', {
        responses: {
            '204': {
                description: 'Tickethistory PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Tickethistory, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Tickethistory]),
    __metadata("design:returntype", Promise)
], TickethistoryController.prototype, "updateById", null);
__decorate([
    rest_1.put('/tickethistories/{id}', {
        responses: {
            '204': {
                description: 'Tickethistory PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Tickethistory]),
    __metadata("design:returntype", Promise)
], TickethistoryController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/tickethistories/{id}', {
        responses: {
            '204': {
                description: 'Tickethistory DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TickethistoryController.prototype, "deleteById", null);
TickethistoryController = __decorate([
    __param(0, repository_1.repository(repositories_1.TickethistoryRepository)),
    __metadata("design:paramtypes", [repositories_1.TickethistoryRepository])
], TickethistoryController);
exports.TickethistoryController = TickethistoryController;
//# sourceMappingURL=tickethistory.controller.js.map