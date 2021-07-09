<template>
  <v-app class="app">
    <v-main id="main">
      <router-view/>
    </v-main>
    <v-footer padless app>
      <v-toolbar dense dark>
        <v-btn icon @click="$router.push('/')" v-if="$router.currentRoute.path != '/'">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click="runProblems">
          <v-icon>mdi-alert</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-wrench</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-translate</v-icon>
        </v-btn>
        <Gamemode :gamemodes="gamemodes" :selectedItem="2"/>
      </v-toolbar>
    </v-footer>
  </v-app>
</template>

<script>

import gamemode from "./components/Gamemodes.vue";

export default {
  name: 'App',

  data: () => ({
    gamemodes: {
           "1": {
              "menusystem": false, 
              "maps": "", 
              "name": "base", 
              "title": "Base" 
              }, 
            "2": { 
              "menusystem": true, 
              "maps": "", 
              "name": "fretta", 
              "title": "Fretta Gamemode Base" 
              }, 
            "3": { 
              "menusystem": true, 
              "maps": "^gm_|^gmod_", 
              "name": "sandbox", 
              "title": "Sandbox"
              },
            "4": { 
              "menusystem": true, 
              "maps": "^ttt_", 
              "name": "terrortown", 
              "title": "Trouble In Terrorist Town"
              }}
    }),
    components: {
      'Gamemode': gamemode
    },
    methods: {
      runProblems() {
        window.lua.run('OpenProblemsPanel()')
      }
    },
    created() {
      this.$store.commit("UpdateEngine")
      if (this.$store.state.IN_ENGINE) {
        console.log("RUNLUA:LoadNewsList()")
      }
    }
  };
</script>

<style lang="scss">
html {
  overflow: hidden !important;
}

body {
  background: rgb(170, 204, 255);
}

.app {
  background: none !important;
  overflow: hidden;
}
#main {
  width: 100%;
  height: 100%;
}
</style>