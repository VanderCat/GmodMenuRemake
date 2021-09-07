<template>
    <v-dialog
      v-model="dialog"
      scrollable
      max-width="400px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-wrench</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>Game Mounting</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
            <Game depot="220" title="Half-Life 2" owned="1" folder="hl2" mounted="1" installed="1" height="48px"/>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import Game from '../Game.vue'
export default {
    name: "Mount",
    data() {
        return {
            dialog: false,
        }
    },
    computed: {
        Games() {
            return this.$store.state.problems //trick to enable reactivity
        }
    },
    components: {
        Game
    }
}
</script>