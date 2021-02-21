import {
  getModule,
  Module,
  MutationAction,
  VuexModule,
  Mutation,
  Action
} from 'vuex-module-decorators'
import store from '@/store'
import { User, UserSubmit } from '../models'
// import { loginUser } from '@/services/FakeUserService'
import { loginUser, logoutUser } from '../api'

@Module({
  namespaced: true,
  name: 'users',
  store,
  dynamic: true
})
class UsersModule extends VuexModule {
  public user: User | null = null

  @MutationAction
  public async login(userSubmit: UserSubmit) {
    const user = await loginUser(userSubmit)
    return { user }
  }

  @Mutation
  public logout(): void {
    this.user = null
  }

  @Action
  public async logoutUser({ user }: any) {
    await logoutUser(user)
  }

  public get currUser(): User | null {
    return this.user
  }

  public get username(): string | null {
    if (this.user !== null) {
      return this.user.username
    }
    return null
  }

  public get first_name(): string | null {
    if (this.user !== null) {
      return this.user.first_name
    }
    return null
  }

  public get window(): number | null {
    if (this.user !== null) {
      return this.user.win_id
    }
    return null
  }

  public get id(): number | null {
    if (this.user !== null) {
      return this.user.id
    }
    return null
  }
}

export default getModule(UsersModule)
