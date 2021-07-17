<template>
  <v-app class="app" id="mainMenu">
    <v-navigation-drawer app permanent>
        <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Garry's Mod
          </v-list-item-title>
          <v-list-item-subtitle v-text="$store.state.gamemodes.list[$store.state.gamemodes.selectedId].title">
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense v-for="(groups, i) in entries" :key="i" nav>
          <v-list-item v-for="(entry, i) in groups" :key="i" @click="entry.action">
            <v-list-item-icon>
              <v-icon>{{entry.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title v-text="entry.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <div style="display: flex;flex-direction: row-reverse;">
      <div/>
      <div style="margin:64px;">
        <news :news="this.$store.state.news"/>
      </div>
    </div>
  </v-app>
</template>

<script>
import news from '../components/News.vue';
export default { 
    data: () => ({
        entries: [
          [
            {
                icon:"mdi-gamepad-variant",
                name:"New Game", 
                action: ()=>{window.Vue.$router.push("/newgame")}
            },
            {
                icon:"mdi-account-multiple",
                name:"Find Game", 
                action: ()=>{window.Vue.$router.push("/servers")}
            }
          ],
          [
            {
                icon:"mdi-toy-brick-search",
                name:"Addons", 
                action: ()=>{window.Vue.$router.push("/workshop/addons")}
            },
            {
                icon: "mdi-content-copy",
                name:"Dupes", 
                action: ()=>{window.Vue.$router.push("/workshop/dupes")}
            },
            {
                icon: "mdi-content-save-all",
                name:"Saves", 
                action: ()=>{window.Vue.$router.push("/workshop/saves")}
            },
            {
                icon: "mdi-video",
                name:"Demos", 
                action: ()=>{window.Vue.$router.push("/workshop/demos")}
            },
          ],
          [
            {
                icon: "mdi-cog",
                name: "Options", 
                action: ()=>{window.lua.runUICommand("OpenOptionsDialog")}
            },
          ],
          [
            {
                icon: "mdi-exit-to-app",
                name:"Quit", 
                action: ()=>{window.lua.runUICommand("Quit")}
            },
            {
                icon: "mdi-exit-run",
                name:"Disconnect", 
                action: ()=>{window.lua.runUICommand("Disconnect")}
            }
          ]
        ],
    }),
    components: {
      news
    }
}
</script>

<style lang="scss" scope>
</style>