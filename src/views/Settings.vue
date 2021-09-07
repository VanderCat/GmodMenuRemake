<template>
  <v-app class="app" id="mainMenu">
    <v-navigation-drawer app permanent>
      <v-list nav dense>
          <v-list-item v-for="(entry, i) in entries" :key="i" :to="entry.to" color="primary">
            <v-list-item-icon>
              <v-icon>{{entry.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title v-text="entry.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-on:click="legacySettings" color="primary">
            <v-list-item-icon>
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>Legacy Menu</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default { 
    data: () => ({
        entries: [
            {
                icon:"mdi-keyboard",
                name:"Keyboard", 
                to: "keyboard"
            },
            {
                icon:"mdi-mouse",
                name:"Mouse", 
                to: "mouse"
            },
            {
                icon:"mdi-volume-high",
                name:"Audio", 
                to: "audio"
            },
            {
                icon:"mdi-monitor",
                name:"Video", 
                to: "video"
            },
            {
                icon:"mdi-microphone",
                name:"Voice", 
                to: "voice"
            },
            {
                icon:"mdi-account-multiple",
                name:"Multiplayer", 
                to: "multiplayer"
            }
        ],
        
    }),
    methods: {
        legacySettings() {
            window.lua.run('OpenProblemsPanel()')
        }
    }
}
</script>

<style lang="scss" scope>
</style>