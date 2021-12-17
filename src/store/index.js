import { createStore } from 'vuex'

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
    forecastInfo: [],
  },
  mutations: {
    setQuery(state, query) {
      state.query = query
    }
  },
  actions: {
  },
  modules: {
  }
})
