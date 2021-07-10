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
        <Gamemode :gamemodes="$store.state.gamemodes.list" :selectedItem="$store.state.gamemodes.selected"/> <!-- IDK why i passing it by properties but whatever -->
      </v-toolbar>
    </v-footer>
  </v-app>
</template>

<script>

import gamemode from "./components/Gamemodes.vue";

export default {
  name: 'App',

  data: () => ({
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
        $(document.body).css("background", "none")
        window.lua.run("LoadNewsList()")
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