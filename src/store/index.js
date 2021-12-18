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
      _status: 0
    }
  },
  mutations: {
    setQuery(state, query) {
      state.query = query
    },
    setOnlinePresenceInitialPageLoad(state, presence) {
      state.online = presence
      state.initialPageLoad = false
    },
    setRequestError(state, {_status, code}) {
      state.request.error = _status
      state.request._status = code
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
        context.commit('setOnlinePresenceInitialPageLoad', true);
        console.log(response);
      }).catch(error => {
        const statusCode = error.request.status;
        if (statusCode === 0) {
          context.commit('setOnlinePresenceInitialPageLoad', false);
        } else if (statusCode === 400) {
          const payload = {
            _status: statusCode,
            error: 400,
          }
          context.commit('setOnlinePresenceInitialPageLoad', true);
          context.commit('setRequestError', payload);
        } else if (statusCode === 403) {
          const payload = {
            _status: statusCode,
            error: 403,
          }
          context.commit('setOnlinePresenceInitialPageLoad', true);
          context.commit("setRequestError", payload)
        }
      })
    }
  },
  modules: {
  }
})
