<template>
    <v-card :style="cssVars" height="48px">
        <div class="cover" style="">
            <img :id="uuid" height="48px" :src="url" >
        </div>
        <div class="cover-overlay" :style="``"/>
    </v-card>
</template>

<script>
import { getAverageColor } from "fast-average-color-node";

import { v4 as uuidv4 } from 'uuid';
export default {
    name: "Game",
    props: ["depot","title","owned","folder","mounted","installed","height"],
    data() {
        return {
            width:0,
        }
    },
    computed: {
        url() {
            return 'https://cdn.cloudflare.steamstatic.com/steam/apps/'+this.depot+'/capsule_231x87.jpg'
        },
        uuid() {
            return uuidv4()
        },
        cssVars() {
            return {
                '--height': this.height,
                '--width': this.width+"px",
            }
        }
    },
    updated(){
        let img = $("#"+this.uuid)
        this.width = img.width()
        let color = getAverageColor(this.url).then(color=>color)
        img.parent().css("background-clor",`linear-gradient(90deg, ${color.rgba} 0%, rgba(${color.value[0]},${color.value[1]},${color.value[2]},0) 100%)`)
    },
}
</script>

<style lang="scss">
.cover {
    height: 48px;
    float: right;
    position: relative;
}
.cover-overlay {
    background: linear-gradient(90deg, var(--avrgColor) 0%, var(--avrgColorAlpha) 100%);
    width: var(--width);
    height: var(--heigth);
}
</style>