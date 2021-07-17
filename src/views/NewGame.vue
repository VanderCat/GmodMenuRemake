<template>
    <v-app class="app" id="newGameMenu">
        <v-navigation-drawer app permanent>
            <v-list-item>
            </v-list-item>
            <v-divider></v-divider>
            <v-list dense>
                <v-list-group
                    v-for="(groups, name, i) in $store.state.maps" :key="i"
                    >
                    <template v-slot:activator>
                        <v-list-item-title>{{name}}</v-list-item-title>
                    </template>
                    <v-list-item v-for="(map, i) in groups" :key="i" сolor="primary" :to="'/newgame/'+map">
                        <v-list-item-title>{{map}}</v-list-item-title>
                    </v-list-item>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
        <router-view></router-view>
    </v-app>
</template>

<style lang="scss" scope>
#newGameContainer {
    padding: 16px;
    height: 100%;
}
#mapContainer {
    overflow: scroll;
    max-height: 100%;
}

#mapSelector {
    max-height: 100%;
}

li {
    display: inline-block;
    vertical-align: top;
    margin: 16px
}
</style>

<script>
//import Map from '../components/Map.vue'

export default {
    data: () => ({
        sel: 1,
        btnText: "Sandbox"
    }),
    components: {
        //Map
    }
}
</script>