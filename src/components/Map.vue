<template>
    <v-card elevation="4" max-width="128">
        <v-img :src="mapimg" height="128px"/>
        <v-card-subtitle>
        {{mapname}}
        </v-card-subtitle>
    </v-card>
</template>

<script>
export default {
    name:"Map",
    data: () => ({
    }),
    props: ['mapname','mapimg']
}
</script>