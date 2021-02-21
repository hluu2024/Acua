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
let QticketController = class QticketController {
    constructor(qticketRepository) {
        this.qticketRepository = qticketRepository;
    }
    async create(qticket) {
        return this.qticketRepository.create(qticket);
    }
    async count(where) {
        return this.qticketRepository.count(where);
    }
    async find(filter) {
        return this.qticketRepository.find(filter);
    }
    async updateAll(qticket, where) {
        return this.qticketRepository.updateAll(qticket, where);
    }
    async findById(id) {
        return this.qticketRepository.findById(id);
    }
    async updateById(id, qticket) {
        await this.qticketRepository.updateById(id, qticket);
    }
    async replaceById(id, qticket) {
        await this.qticketRepository.replaceById(id, qticket);
    }
    async deleteById(id) {
        await this.qticketRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/qtickets', {
        responses: {
            '200': {
                description: 'Qticket model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Qticket) } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Qticket]),
    __metadata("design:returntype", Promise)
], QticketController.prototype, "create", null);
__decorate([
    rest_1.get('/qtickets/count', {
        responses: {
            '200': {
                description: 'Qticket model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Qticket))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QticketController.prototype, "count", null);
__decorate([
    rest_1.get('/qtickets', {
        responses: {
            '200': {
                description: 'Array of Qticket model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Qticket, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Qticket))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QticketController.prototype, "find", null);
__decorate([
    rest_1.patch('/qtickets', {
        responses: {
            '200': {
                description: 'Qticket PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Qticket, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Qticket))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Qticket, Object]),
    __metadata("design:returntype", Promise)
], QticketController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/qtickets/{id}', {
        responses: {
            '200': {
                description: 'Qticket model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Qticket) } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QticketController.prototype, "findById", null);
__decorate([
    rest_1.patch('/qtickets/{id}', {
        responses: {
            '204': {
                description: 'Qticket PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Qticket, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Qticket]),
    __metadata("design:returntype", Promise)
], QticketController.prototype, "updateById", null);
__decorate([
    rest_1.put('/qtickets/{id}', {
        responses: {
            '204': {
                description: 'Qticket PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Qticket]),
    __metadata("design:returntype", Promise)
], QticketController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/qtickets/{id}', {
        responses: {
            '204': {
                description: 'Qticket DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QticketController.prototype, "deleteById", null);
QticketController = __decorate([
    __param(0, repository_1.repository(repositories_1.QticketRepository)),
    __metadata("design:paramtypes", [repositories_1.QticketRepository])
], QticketController);
exports.QticketController = QticketController;
//# sourceMappingURL=qticket.controller.js.map