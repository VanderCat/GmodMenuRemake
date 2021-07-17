<template>
    <v-sheet class="fillViewPort" dark style="background-color:#121212;border-color:#121212">
        <v-row no-gutters style="flex-direction: column;height: 100%;">
            <v-col class="header">
                <v-img :src="mapimg" height="100%" :style='(blur?"filter: blur(4px);":"")+"position:absolute; height:var(--headerheight); width:100%"'></v-img>
                <div class="logocontainer" :style='"align-items: "+displayname.align.v+"; justify-content: "+displayname.align.h+";"+style.all'>
                    <div>
                        <div class="tag" :style="'text-align: '+tag.align+';'+ style.tag">{{tag.text}}</div>
                        <div class="displayname" :style='style.displayname'>{{displayname.text}}</div>
                    </div>
                </div>
                <v-sheet class="playcontainer pa-3" elevation="4">
                    <v-row>
                        <v-col>
                            <v-btn color="primary" @click="runGame()">
                                <v-icon left>
                                    mdi-play
                                </v-icon>
                                Play
                            </v-btn>
                        </v-col>
                        <v-col>
                            <div class="text-subtitle-2">
                                Gamemode:
                            </div>
                            <div class="text-body-2">
                                {{$store.state.gamemodes.list[$store.state.gamemodes.selectedId].title}}
                            </div>
                        </v-col>
                        <v-col>
                            <div class="text-subtitle-2">
                                Maxplayers:
                            </div>
                            <div class="text-body-2">
                                Singleplayer
                            </div>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-col>
            <v-col style="padding: 16px;overflow-y: auto;">
                <MapSettings :settings="$store.state.serversettings"/>
            </v-col>
        </v-row>
    </v-sheet>
</template>

<script>
import MapSettings from "../components/MapSettings.vue";
export default {
    
    data() {
        return {
        }
    },
    computed: {
        support() {
            return require('../../public/mapimglist/maps.json')[this.$route.params.map]
        },
        textparts() {
            return this.$route.params.map.split('_')
        },
        tag() {
            let Tag = {}
            if (this.textparts.length == 1) Tag.text = ""; else Tag.text = this.textparts[0]
            Tag.align = "center"
            if ((typeof this.support != 'undefined') && (typeof this.support.tag != 'undefined')) {
                if (typeof this.support.tag.text != 'undefined') Tag.text = this.support.tag.text
                if (typeof this.support.tag.align != 'undefined') {
                    if (this.support.tag.align == 0) {
                        Tag.align = "left"
                    }
                    else if (this.support.tag.align == 2) {
                        Tag.align = "right"
                    }
                }
            }
            return Tag
        },
        displayname() {
            let name = {}
            if (this.textparts.length == 1) name.text = this.$route.params.map; else name.text = this.textparts.slice(1).join(' ')
            name.align = {
                h: "center",
                v: "center"
            }
            if ((typeof this.support != 'undefined') && (typeof this.support.displayname != 'undefined')) {
                if (typeof this.support.displayname.text != 'undefined') name.text = this.support.displayname.text
                if (typeof this.support.displayname.align != 'undefined') {
                    switch (this.support.displayname.align[0]) {
                        case "0": name.align.v = "flex-start"; break;
                        case "1": name.align.v = "center"; break;
                        case "2": name.align.v = "flex-end"; break;
                    }
                    switch (this.support.displayname.align[1]) {
                        case "0": name.align.h = "flex-start"; break;
                        case "1": name.align.h = "center"; break;
                        case "2": name.align.h = "flex-end"; break;
                    }
                }
            }
            return name
        },
        mapimg() {
            if ((typeof this.support != 'undefined') && (typeof this.support.bgimg != 'undefined')) {
                return this.support.bgimg
            }
            else {
                return "asset://mapimage/"+this.$route.params.map
            }
        },
        blur() {
            if ((typeof this.support != 'undefined') && (typeof this.support.bgimg != 'undefined')) {
                return false
            }
            else {
                return true
            }
        },
        style() {
            let Style = {
                all: "",
                displayname: "",
                tag: ""
            }
            if (typeof this.support != 'undefined') {
                if (typeof this.support.style != 'undefined') 
                    Style.all = this.support.style
                if (typeof this.support.displayname != 'undefined') 
                    if (typeof this.support.displayname.style != 'undefined')
                        Style.displayname = this.support.displayname.style
                if (typeof this.support.tag != 'undefined') 
                    if (typeof this.support.tag.style != 'undefined')
                        Style.tag = this.support.tag.style
            }
            return Style
        },
    },
    components: {
        MapSettings
    },
    methods: {
        async runGame() {
            window.lua.runHook("StartGame")
            window.lua.runConsoleCommand("progress_enable")
            window.lua.runConsoleCommand("disconnect")
            window.lua.runConsoleCommand("maxplayers","1")
            let map = this.$route.params.map
            this.$router.push("/")
            await new Promise(resolve => setTimeout(resolve, 200));
            for (let id in this.$store.state.serversettings.settings) {
                let setting = this.$store.state.serversettings.settings[id]
                switch (setting.type) {
                    default:
                        window.lua.runConsoleCommand(setting.name, String(setting.Value))
                        break;
                    case "CheckBox":
                        window.lua.runConsoleCommand(setting.name, String(setting.Value))
                        break;
                }
            }
            window.lua.runConsoleCommand("hostname",this.$store.state.serversettings.hostname)
            window.lua.runConsoleCommand("p2p_enabled",this.$store.state.serversettings.p2p_enabled ? "1" : "0")
            window.lua.runConsoleCommand("p2p_friendsonly",this.$store.state.serversettings.p2p_friendsonly ? "1" : "0")
            window.lua.runConsoleCommand("sv_lan",this.$store.state.serversettings.sv_lan ? "1" : "0")
            window.lua.runConsoleCommand("maxplayers",String(this.$store.state.serversettings.sv_lan ? "1" : "0"))
            window.lua.runConsoleCommand("map",map)
        }
    }
}
</script>

<style lang="scss">
body {
    --headerheight: 384px;
}
.logocontainer {
    display: flex;
    flex-direction: column;
    align-items: center; // X
    justify-content: center; //Y
    width: 100%;
    height: calc(var(--headerheight) - 64px);
    text-shadow: -4px 4px 8px rgba($color: #000000, $alpha: 0.6);
    padding: 24px;
    div {
        z-index: 1;
        overflow-wrap: break-word;
        hyphens: auto;
        text-align: center;
    }
}
.tag {
    font-weight: 900;
    font-size: 24pt;
    text-transform: uppercase;
    line-height: 0.75;
    margin-bottom: 16px;
    @media (max-width: 900px) {
        font-size:12pt;
        margin-bottom: 4px;
    }
}
.displayname {
    font-weight: 800;
    font-size: 72pt;
    text-transform: uppercase;
    line-height: 0.75;
    @media (min-width: 1280px) {
        font-size:96pt
    }
    @media (max-width: 900px) {
        font-size:48pt
    }
}
.playcontainer {
    height: 64px;
    width: 100%;
    background-color: rgba($color: #1A237E, $alpha: 0.3) !important;
    backdrop-filter: blur(4px);
    .row {
        align-content: center;
        align-items: center;
        height: 64px;
        .col {
            flex-grow: 0;
            flex-shrink: 0;
            line-height: 1.2;
        }
    }
}
.header {
    --headerheight: 512px;
    flex: 0 0 var(--headerheight);
        max-height: var(--headerheight);
    @media (max-width: 1360px) {
        --headerheight: 384px;
    }
    @media (max-height: 768px) {
        --headerheight: 384px;
    }
    @media (max-height: 600px) {
        --headerheight: 256px;
    }
}
</style>