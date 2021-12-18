import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    query: '',
    repositoryURL: 'https://github.com/OyewoleOyedeji/weatherme.git',
    surveyURL: 'https://somesurveysite.org',
    author: 'Oyewole Oyedeji',
    settings: {
      requestConfig: {
        baseURL: "https://api.weatherapi.com",
        params: {
          key: process.env.VUE_APP_WEATHER_API_KEY,
          days: 3,
        },
      },
      targetURL: "/v1/forecast.json",
    },
    initialPageLoad: true,
    online: true,
    request: {
      results: [],
      error: false,
    }
  },
  mutations: {
    setQuery(state, query) {
      state.query = query
    },
    setOnlinePresenceInitialPageLoad(state, presence) {
      state.online = presence,
        state.initialPageLoad = false
    },
    setRequestError(state, payload) {
      state.request.error = payload
    }
  },
  actions: {
    callApi(context) {
      axios.get(context.state.settings.targetURL, {
        baseURL: context.state.settings.requestConfig.baseURL,
        params: {
          days: context.state.settings.requestConfig.params.days,
          q: context.state.query,
          key: context.state.settings.requestConfig.params.key,
        },
      }).then(response => {
        context.commit("setOnlinePresenceInitialPageLoad", true),
          console.log(response)
      }).catch(error => {
        context.commit("setOnlinePresenceInitialPageLoad", false),
          console.log(error)
      })
    }
  },
  modules: {
  }
})
