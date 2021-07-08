<template>
    <div class="text-center">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-gamepad-square</v-icon>
          </v-btn>
        </template>
      <v-list>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(gamemode, i) in gamemodes" :key="i">
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
    props: ["gamemodes", "selectedItem"]
}
</script>