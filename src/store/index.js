import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    IN_ENGINE: false,
    news: [
      { 
        HeaderImage: 'img/whatsnew.png', 
        Title: 'December 2018 Hotfix', 
        SummaryHtml: 'A security hotfix', 
        Url: 'https://google.com/?q=1', 
        Date: Date.now() 
      },
      { 
        HeaderImage: 'img/whatsnew.png', 
        Title: 'December 2018 Coldfix', 
        SummaryHtml: 'A very long security hotfix example indeed like it is so long that i dont know how I will fit this stuff in the box', 
        Url: 'https://google.com/?q=4' , 
        Date: 0 
      },
      { 
        Title: 'Post without an image', 
        SummaryHtml: 'They are very hard to make', 
        Url: 'https://google.com/?q=2', 
        Date: Date.now() - 604800000 - 10000 
      },
       { 
        HeaderImage: 'img/whatsnew.png', 
        Title: 'December 2018 is a very long Security Hotfix that means we need to handle this', 
        SummaryHtml: 'A security hotfix', 
        Url: 'https://google.com/?q=3', 
        Date: Date.now() - 604800000 + 10000 
      },
    ],
    gamemodes: {
      list: {
        "1": {
          "menusystem": false, 
          "maps": "", 
          "name": "base", 
          "title": "Base" 
          }, 
        "2": { 
          "menusystem": true, 
          "maps": "", 
          "name": "fretta", 
          "title": "Fretta Gamemode Base" 
          }, 
        "3": { 
          "menusystem": true, 
          "maps": "^gm_|^gmod_", 
          "name": "sandbox", 
          "title": "Sandbox"
          },
        "4": { 
          "menusystem": true, 
          "maps": "^ttt_", 
          "name": "terrortown", 
          "title": "Trouble In Terrorist Town"
          }
        },
      selected: "sandbox",
      selectedId: "3"
      },
  },
  mutations: {
    UpdateNews( state, news )
    {
      Vue.set(state, "news", news) // Reactivity
    },
    UpdateEngine(state)
    {
      state.IN_ENGINE = navigator.userAgent.indexOf( "Valve Source Client" ) != -1;
    },
    UpdateGamemodes( state, gms )
    {
      Vue.set(state.gamemodes, "list", gms) // Reactivity
    },
    UpdateSelectedGamemode( state, gm )
    {
      Vue.set(state.gamemodes, "selected", gm) // Reactivity
      for (var id in state.gamemodes.list) {
        if (state.gamemodes.list[id].name == gm) Vue.set(state.gamemodes, "selectedId", id);
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
