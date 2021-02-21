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
import { Users } from '../models';
import { UsersRepository } from '../repositories';

export class UsersController {
  constructor(
    @repository(UsersRepository)
    public usersRepository: UsersRepository,
  ) { }

  @post('/users', {
    responses: {
      '200': {
        description: 'Users model instance',
        content: { 'application/json': { schema: getModelSchemaRef(Users) } },
      },
    },
  })
  async create(@requestBody() users: Users): Promise<Users> {
    return this.usersRepository.create(users);
  }
  //-------------------------------
  @patch('/users/login', {
    responses: {
      '204': {
        description: 'User login',
        content: { 'application/json': { schema: { 'x-ts-type': Users } } },
      },
    },
  })
  async login(@requestBody() userSubmit: Users): Promise<Users | null> {
    let user = await this.usersRepository.findOne({ where: { username: userSubmit.username } })

    if (!user || user.password !== userSubmit.password)
      return null

    //user.loggedIn = true

    await this.usersRepository.replaceById(user.id, user)

    return user
  }

  @patch('/users/logout', {
    responses: {
      '204': {
        description: 'User logout',
        content: { 'application/json': { schema: { 'x-ts-type': Users } } },
      },
    },
  })
  async logout(@requestBody() userSubmit: Users): Promise<void> {
    let user = await this.usersRepository.findOne({ where: { username: userSubmit.username } })

    if (user !== null) {
      //user.loggedIn = false

      await this.usersRepository.replaceById(user.id, user)
    }
  }

  //-------------------------------

  @get('/users/count', {
    responses: {
      '200': {
        description: 'Users model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Users)) where?: Where<Users>,
  ): Promise<Count> {
    return this.usersRepository.count(where);
  }

  @get('/users', {
    responses: {
      '200': {
        description: 'Array of Users model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: getModelSchemaRef(Users) },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Users)) filter?: Filter<Users>,
  ): Promise<Users[]> {
    return this.usersRepository.find(filter);
  }

  @patch('/users', {
    responses: {
      '200': {
        description: 'Users PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Users, { partial: true }),
        },
      },
    })
    users: Users,
    @param.query.object('where', getWhereSchemaFor(Users)) where?: Where<Users>,
  ): Promise<Count> {
    return this.usersRepository.updateAll(users, where);
  }

  @get('/users/{id}', {
    responses: {
      '200': {
        description: 'Users model instance',
        content: { 'application/json': { schema: getModelSchemaRef(Users) } },
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Users> {
    return this.usersRepository.findById(id);
  }

  @patch('/users/{id}', {
    responses: {
      '204': {
        description: 'Users PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Users, { partial: true }),
        },
      },
    })
    users: Users,
  ): Promise<void> {
    await this.usersRepository.updateById(id, users);
  }

  @put('/users/{id}', {
    responses: {
      '204': {
        description: 'Users PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() users: Users,
  ): Promise<void> {
    await this.usersRepository.replaceById(id, users);
  }

  @del('/users/{id}', {
    responses: {
      '204': {
        description: 'Users DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.usersRepository.deleteById(id);
  }
}
