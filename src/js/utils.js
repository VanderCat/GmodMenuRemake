module.exports = {
    UpdateNewsList(news, hide) {
        window.Vue.$store.commit("UpdateNews",news,hide)
    },
    lua: {
        run(command) {
            console.log("RUNLUA:"+command)
        },
        runUICommand(command) {
            this.run("RunGameUICommand('"+command+"')")
        },
        playSound(soundName) {
            this.run("surface.PlaySound('"+soundName+"')")
        },
        runHook(hook) {
            this.run("hook.Run("+hook+")")
        },
        runConsoleCommand(command,arg) {
            this.run("RunConsoleCommand('"+command+((typeof arg === 'undefined' || arg === null)? "" : ", '"+arg+"'")+")")
        },
    }
  }