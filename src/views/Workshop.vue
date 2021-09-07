<template>
    <v-app class="app" id="workshop">
        <v-navigation-drawer app permanent>
            <v-list-item>
                <v-list-item-title style="text-transform: capitalize;">{{$route.params.type}}</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
            <v-list dense>
                <v-list-group
                    v-for="(Category, i) in Controls.Categries" :key="i"
                    >
                    <template v-slot:activator>
                        <v-list-item-icon><v-icon>{{Category.icon}}</v-icon></v-list-item-icon>
                        <v-list-item-title>{{Category.name}}</v-list-item-title>
                    </template>
                    <v-list-item сolor="primary" :to="`/workshop/${$route.params.type}/${Category.name}/All`">
                        <v-list-item-icon><v-icon>mdi-expand-all</v-icon></v-list-item-icon>
                        <v-list-item-subtitle>All</v-list-item-subtitle>
                    </v-list-item>
                    <v-list-item v-for="(Type, i) in Controls.Types[$route.params.type]" :key="i" сolor="primary" :to="`/workshop/${$route.params.type}/${Category.name}/${Type.name}`">
                        <v-list-item-icon><v-icon>{{Type.icon}}</v-icon></v-list-item-icon>
                        <v-list-item-subtitle>{{Type.name}}</v-list-item-subtitle>
                    </v-list-item>
                </v-list-group>
                <v-divider></v-divider>
                <v-list-group
                    v-for="(Category, i) in Controls.CatSecondary" :key="i+10"
                    >
                    <template v-slot:activator>
                        <v-list-item-icon><v-icon>{{Category.icon}}</v-icon></v-list-item-icon>
                        <v-list-item-title>{{Category.name}}</v-list-item-title>
                    </template>
                    <v-list-item сolor="primary" :to="`/workshop/${$route.params.type}/${Category.name}/All`">
                        <v-list-item-icon><v-icon>mdi-expand-all</v-icon></v-list-item-icon>
                        <v-list-item-subtitle>All</v-list-item-subtitle>
                    </v-list-item>
                    <v-list-item v-for="(Type, i) in Controls.Types[$route.params.type]" :key="i" сolor="primary" :to="`/workshop/${$route.params.type}/${Category.name}/${Type.name}`">
                        <v-list-item-icon><v-icon>{{Type.icon}}</v-icon></v-list-item-icon>
                        <v-list-item-subtitle>{{Type.name}}</v-list-item-subtitle>
                    </v-list-item>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
        <div>
            <v-card>
                <Addon wsid="2553727051"/>
            </v-card>
        </div>
    </v-app>
</template>

<script>
import Addon from "../components/Addon.vue"
export default {
    data() {
        return {
            Controls: {
                Categries: [
                    {
                        icon: "mdi-plus-box-multiple",
                        name: "Subscribed"
                    },
                    {
                        icon: "mdi-fire",
                        name: "Trending"
                    },
                    {
                        icon: "mdi-trending-up",
                        name: "Popular"
                    },
                    {
                        icon: "mdi-new-box",
                        name: "Latest"
                    },
                ],
                CatSecondary: [
                    {
                        icon: "mdi-star-box-multiple",
                        name: "Favorite"
                    },
                    {
                        icon: "mdi-account-multiple",
                        name: "Friend Uploads"
                    },
                    {
                        icon: "mdi-account-box-multiple",
                        name: "My Uploads"
                    },
                ],
                Types: {
                    addons: [
                        {
                            icon: "mdi-gamepad-square",
                            name: "Gamemode"
                        },
                        {
                            icon: "mdi-map",
                            name: "Map"
                        },
                        {
                            icon: "mdi-pistol",
                            name: "Weapon"
                        },
                        {
                            icon: "mdi-hammer-wrench",
                            name: "Tool"
                        },
                        {
                            icon: "mdi-account-multiple",
                            name: "NPC"
                        },
                        {
                            icon: "mdi-toy-brick",
                            name: "Entity"
                        },
                        {
                            icon: "mdi-flare",
                            name: "Effects"
                        },
                        {
                            icon: "mdi-car",
                            name: "Vehicle"
                        },
                        {
                            icon: "mdi-cube-outline",
                            name: "Model"
                        },
                    ],
                    dupe: [
                        {
                            icon: "mdi-kabaddi",
                            name: "Posed"
                        },
                        {
                            icon: "mdi-image",
                            name: "Scenes"
                        },
                        {
                            icon: "mdi-robot",
                            name: "Machines"
                        },
                        {
                            icon: "mdi-car",
                            name: "Vehicles"
                        },
                        {
                            icon: "mdi-domain",
                            name: "Buildings"
                        },
                        {
                            icon: "mdi-expand-all",
                            name: "Other"
                        },
                    ],
                    saves: [
                        {
                            icon: "mdi-image",
                            name: "Scenes"
                        },
                        {
                            icon: "mdi-robot",
                            name: "Machines"
                        },
                        {
                            icon: "mdi-domain",
                            name: "Buildings"
                        },
                        {
                            icon: "mdi-golf",
                            name: "Courses"
                        },
                        {
                            icon: "mdi-expand-all",
                            name: "Other"
                        },
                    ]
                }
            }
        }
    },
    components: {
        Addon
    }
}
</script>