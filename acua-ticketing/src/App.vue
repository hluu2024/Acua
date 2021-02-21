<template>
    <v-app>
        <!--This is the top of page -->
        <v-toolbar color='#117FA7' dark app>
            <v-img left :src="require('@/assets/acc-logo.png')"
                   contain
                   height="150px">
            </v-img>
            <v-toolbar-title>ACUA Ticketing Manager</v-toolbar-title>
            <v-spacer/>

            <span v-if="username !== null">
              Welcome, {{ username }}
              <v-tooltip bottom color="white">
                <template v-slot:activator="{ on }">
                  <v-btn flat icon v-on="on" @click="logout">
                    <v-icon>
                      exit_to_app
                    </v-icon>
                  </v-btn>
                </template>
                <span class="#117FA7--text">Logout</span>
              </v-tooltip>
            </span>
            <template v-slot:extension v-if="username !== null">
                <v-tabs color="#117FA7" grow>
                    <v-tabs-slider color="white"></v-tabs-slider>
                    <v-tab to="/manager/tickets">
                        Tickets
                    </v-tab>
                </v-tabs>
            </template>
        </v-toolbar>

        <v-content>
            <v-container fluid>
                <router-view/>
            </v-container>
        </v-content>

    </v-app>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import {User} from '@/store/models'
    import users from '@/store/modules/users'
    import io from 'socket.io-client'

    @Component
    export default class App extends Vue {
    public on: any
    private users = users

    private get user(): User | null {
        return this.users.currUser
    }

    public get username(): string | null {
        return this.users.username === null ? null : this.users.username
    }

    public logout(): void {
        this.users.logoutUser({user: this.user})
        this.users.logout()
        this.$router.push('/login')
    }

    public created() {
        window.addEventListener('beforeunload', this.handler)
    }

    private handler(event: any) {
        if (this.user !== null) {
        this.users.logoutUser({user: this.user})
        }
    }

    }
    </script>


    /*@Component({})
    export default class App extends Vue {
        public on: any;
        private socket = io.connect('https://acua-team.herokuapp.com/');
        private users = users;

        public thing(): void {
            this.socket.emit('message', 'HELLO WORLD');
            console.log('conntected')
        }


        private get user(): User | null {
            this.$socket.$subscribe('event_name', (payload: any) => {
                console.log(payload)
            });
            return this.users.currUser
        }

        public get username(): string | null {
            return this.users.username === null ? null : this.users.username
        }

        public logout(): void {
            this.users.logoutUser({user: this.user})
            this.users.logout()
            this.$router.push('/login')
            this.$socket.$unsubscribe('')
        }

        public created() {
            window.addEventListener('beforeunload', this.handler)
        }

        private handler(event: any) {
            if (this.user !== null) {
                this.users.logoutUser({user: this.user})
            }
        }


        public get dynamicColor() {
            return '#117FA7'
        }

    }
    console.log(io.connect('https://acua-team.herokuapp.com/'))
</script>*/
