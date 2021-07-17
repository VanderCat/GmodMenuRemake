<template>
    <div class="text-center">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-gamepad-square</v-icon>
          </v-btn>
        </template>
      <v-list>
        <v-list-item-group v-model="selectedId" color="primary">
          <v-list-item v-for="(gamemode, i) in filteredGamemodes" :key="i">
            <v-list-item-avatar height="32" width="32">
              <img :src="'../gamemodes/'+gamemode.name+'/icon24.png'"> <!-- ../ WHEN GMOD -->
            </v-list-item-avatar>
            <v-list-item-title>{{gamemode.title}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
    name: "gamemode",
    props: ["gamemodes", "selectedItem"],
    data: () => ({
      selectedId: 0
    }),
    computed: {
      filteredGamemodes () {
        var filtered = {}
        for (var id in this.gamemodes) {
          if (this.gamemodes[id].menusystem) filtered[id] = this.gamemodes[id];
        }
        return filtered
      }
    },
    watch: {
      selectedItem(New, old) {
        window.lua.runConsoleCommand("gamemode", New)
        console.log("Changed gamemode: "+old+"=>"+New)
        var counter = 0;
        for (var id in this.filteredGamemodes) {
          if (this.filteredGamemodes[id].name!=New) counter++; else {this.selectedId=counter; return;}
        }
      },
      selectedId(New, old) {
        var counter = 0;
        for (var id in this.filteredGamemodes) {
          if (counter==this.selectedId) {
            window.UpdateCurrentGamemode(this.filteredGamemodes[id].name)
            return;
            }
          else counter++;
        }
      }
    }
}
</script>