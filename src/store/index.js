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
    ]
  },
  mutations: {
    UpdateNews( state, news )
    {
      state.news = news
    },
    UpdateEngine(state)
    {
      state.IN_ENGINE = navigator.userAgent.indexOf( "Valve Source Client" ) != -1;
    }
  },
  actions: {
  },
  modules: {
  }
})
