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
let UsersController = class UsersController {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async create(users) {
        return this.usersRepository.create(users);
    }
    //-------------------------------
    async login(userSubmit) {
        let user = await this.usersRepository.findOne({ where: { username: userSubmit.username } });
        if (!user || user.password !== userSubmit.password)
            return null;
        //user.loggedIn = true
        await this.usersRepository.replaceById(user.id, user);
        return user;
    }
    async logout(userSubmit) {
        let user = await this.usersRepository.findOne({ where: { username: userSubmit.username } });
        if (user !== null) {
            //user.loggedIn = false
            await this.usersRepository.replaceById(user.id, user);
        }
    }
    //-------------------------------
    async count(where) {
        return this.usersRepository.count(where);
    }
    async find(filter) {
        return this.usersRepository.find(filter);
    }
    async updateAll(users, where) {
        return this.usersRepository.updateAll(users, where);
    }
    async findById(id) {
        return this.usersRepository.findById(id);
    }
    async updateById(id, users) {
        await this.usersRepository.updateById(id, users);
    }
    async replaceById(id, users) {
        await this.usersRepository.replaceById(id, users);
    }
    async deleteById(id) {
        await this.usersRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/users', {
        responses: {
            '200': {
                description: 'Users model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Users) } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Users]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    rest_1.patch('/users/login', {
        responses: {
            '204': {
                description: 'User login',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Users } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Users]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "login", null);
__decorate([
    rest_1.patch('/users/logout', {
        responses: {
            '204': {
                description: 'User logout',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Users } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Users]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "logout", null);
__decorate([
    rest_1.get('/users/count', {
        responses: {
            '200': {
                description: 'Users model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Users))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "count", null);
__decorate([
    rest_1.get('/users', {
        responses: {
            '200': {
                description: 'Array of Users model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Users) },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Users))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "find", null);
__decorate([
    rest_1.patch('/users', {
        responses: {
            '200': {
                description: 'Users PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Users, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Users))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Users, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/users/{id}', {
        responses: {
            '200': {
                description: 'Users model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Users) } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findById", null);
__decorate([
    rest_1.patch('/users/{id}', {
        responses: {
            '204': {
                description: 'Users PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Users, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Users]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateById", null);
__decorate([
    rest_1.put('/users/{id}', {
        responses: {
            '204': {
                description: 'Users PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Users]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/users/{id}', {
        responses: {
            '204': {
                description: 'Users DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteById", null);
UsersController = __decorate([
    __param(0, repository_1.repository(repositories_1.UsersRepository)),
    __metadata("design:paramtypes", [repositories_1.UsersRepository])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map