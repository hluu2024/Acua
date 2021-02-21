<template>
  <v-content>
    <v-container fluid fill-height @keydown.enter="login">
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="#117FA7">
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form @submit="login">
                <v-text-field color="#117FA7" prepend-icon="person" name="login" label="Username" type="text" v-model="username"/>
                <v-text-field color="#117FA7" prepend-icon="lock" name="password" label="Password" type="password" v-model="password"/>
              </v-form>
              <span class="error-text">
                {{loginError}}
              </span>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn dark color="#117FA7" @click="login">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import users from '@/store/modules/users'

@Component
export default class Login extends Vue {
  public username: string = ''
  public password: string = ''
  public loginError: string = ''

  public login(): void {
    users.login({
      username: this.username,
      password: this.password
    })
    .then(() => {
      if (users.user === null) {
        this.loginError = 'Invalid name or password'
        // this.$router.push('/manager/tickets')
      } else {
        this.$router.push('/manager/tickets')
      }
    })
  }
}
</script>

<style scoped>
  .error-text {
    color: red;
  }
</style>

