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
let LocationController = class LocationController {
    constructor(locationRepository) {
        this.locationRepository = locationRepository;
    }
    async create(location) {
        return this.locationRepository.create(location);
    }
    async count(where) {
        return this.locationRepository.count(where);
    }
    async find(filter) {
        return this.locationRepository.find(filter);
    }
    async updateAll(location, where) {
        return this.locationRepository.updateAll(location, where);
    }
    async findById(id) {
        return this.locationRepository.findById(id);
    }
    async updateById(id, location) {
        await this.locationRepository.updateById(id, location);
    }
    async replaceById(id, location) {
        await this.locationRepository.replaceById(id, location);
    }
    async deleteById(id) {
        await this.locationRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/locations', {
        responses: {
            '200': {
                description: 'Location model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Location) } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Location]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "create", null);
__decorate([
    rest_1.get('/locations/count', {
        responses: {
            '200': {
                description: 'Location model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Location))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "count", null);
__decorate([
    rest_1.get('/locations', {
        responses: {
            '200': {
                description: 'Array of Location model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Location) },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Location))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "find", null);
__decorate([
    rest_1.patch('/locations', {
        responses: {
            '200': {
                description: 'Location PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Location, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Location))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Location, Object]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/locations/{id}', {
        responses: {
            '200': {
                description: 'Location model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Location) } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "findById", null);
__decorate([
    rest_1.patch('/locations/{id}', {
        responses: {
            '204': {
                description: 'Location PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Location, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Location]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "updateById", null);
__decorate([
    rest_1.put('/locations/{id}', {
        responses: {
            '204': {
                description: 'Location PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Location]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/locations/{id}', {
        responses: {
            '204': {
                description: 'Location DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "deleteById", null);
LocationController = __decorate([
    __param(0, repository_1.repository(repositories_1.LocationRepository)),
    __metadata("design:paramtypes", [repositories_1.LocationRepository])
], LocationController);
exports.LocationController = LocationController;
//# sourceMappingURL=location.controller.js.map