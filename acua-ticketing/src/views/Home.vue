<template>
  <div app>
    <section>
      <v-parallax :src="require('@/assets/dog-photo-1.jpg')">
        <v-layout
          column
          align-center
          justify-center
          class="white--text"
        >
          <router-link to="/login">
            <v-btn
              color="#117FA7"
              dark
              large
            >
              Login
            </v-btn>
          </router-link>
                    <router-link to="/queue">
            <v-btn
              color="#117FA7"
              dark
              large
            >
              View Queue
            </v-btn>
          </router-link>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Powered By</div>
              </v-card-title>
              <v-img
                :src="require('@/assets/logo.png')"
              ></v-img>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Contact us</div>
              </v-card-title>
              <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
              </v-card-text>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>California, US</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {}
</script>

