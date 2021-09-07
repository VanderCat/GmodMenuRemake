//THIS MODULE IS BASICLY A BRIDGE BETWEEN VUE AND *VANILLA* GMOD MENU BACKEND
module.exports = {
    UpdateNewsList(news, hide) {
        window.Vue.$store.commit("UpdateNews",news,hide)
    },
    UpdateGamemodes( gamemodes ) {
        window.Vue.$store.commit("UpdateGamemodes" ,gamemodes)
    },
    UpdateCurrentGamemode(gamemode)
    {
        window.Vue.$store.commit("UpdateSelectedGamemode", gamemode)
    },
    UpdateServerSettings(settings)
    {
        settings.maxplayers = Number(settings.maxplayers)
        settings.sv_lan = Number( settings.sv_lan ) == 1;
        settings.p2p_enabled = Number(settings.p2p_enabled) == 1
        settings.p2p_frendsonly = Number(settings.p2p_frendsonly) == 1
        if (settings.settings)
            for (let id in settings.settings )
                if ( settings.settings[id].type == "CheckBox" )
                    settings.settings[id].Value = settings.settings[id].Value == "1"
        window.Vue.$store.commit("UpdateServerSettings", settings)
    },
    UpdateMaps(maps)
    {
        window.Vue.$store.commit("UpdateMaps", maps)
    },
    SetProblemCount(count, severe)
    {
        window.Vue.$store.commit("UpdateProblems", {count,severe})
    },
    UpdateAddonDisabledState(noaddons, noworkshop) {
        console.log("noaddons:", JSON.stringify(noaddons))
        console.log("noworkshop:", JSON.stringify(noworkshop))
    },
    ReceivedChildAddonInfo(json) {
        console.log(JSON.stringify(json))
    },
    lua: {
        run(command) {
            console.debug("DEBUG:"+command)
            console.log("RUNLUA:"+command)
        },
        runUICommand(command) {
            this.run("RunGameUICommand(\""+command+"\")")
        },
        playSound(soundName) {
            this.run("surface.PlaySound(\""+soundName+"\")")
        },
        runHook(hook) {
            this.run("hook.Run(\""+hook+"\")")
        },
        runConsoleCommand(command,arg) {
            this.run("RunConsoleCommand(\""+command+((typeof arg === "undefined" || arg === null)? "" : "\", \""+arg)+"\")")
        },
    },
    subscriptions: {
        Update(json) {
            console.log(JSON.stringify(json))
        },
        UpdateUGC(json) {
            console.log(JSON.stringify(json))
        }
    }
  }