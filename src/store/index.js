/* eslint-disable no-redeclare */

import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    query: '',
    repositoryURL: 'https://github.com/OyewoleOyedeji/weatherme.git',
    surveyURL: 'https://somesurveysite.org',
    author: 'Oyewole Oyedeji',
    device: '',
    comments: '',
    axios: {
      config: {
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
      results: {},
      error: null,
      _status: null
    },
  },
  mutations: {
    setQuery(state, query) {
      state.query = query
    },

    setOnlinePresenceInitialPageLoad(state, connectivityStatus) {
      state.online = connectivityStatus
      state.initialPageLoad = false
    },

    setRequestError(state, isValid) {
      state.request.error = isValid
    },

    setResults(state, results) {
      state.request.results = results
    },

    setStatusCode(state, statusCode) {
      state.request._status = statusCode
    },

    setComments(state, comment) {
      state.comments = comment
    }
  },
  actions: {
    callApi({ commit, state, dispatch }) {
      axios.get(state.axios.targetURL, {
        baseURL: state.axios.config.baseURL,
        params: {
          days: state.axios.config.params.days,
          q: state.query,
          key: state.axios.config.params.key,
        },
      }).then(response => {
        dispatch('formatResults', {
          raw: response.data,
          _status: response.status
        });
      }).catch(error => {
        if (error.response) {
          console.log(error.response.status)
        } else if (error.request) {
          commit('setRequestError', true);
          commit('setStatusCode', 0);
          commit('setComments', "c'mon your offline")
          commit('setOnlinePresenceInitialPageLoad', false);
        }
      })
    },
    formatResults({ commit }, { raw, _status }) {
      console.log('Working')
      const processData = {
        name: raw.location.name,
        region: raw.location.region,
        country: raw.location.country,
        readableDate: () => {
          const weekdayNameMap = {
            0: "Sunday",
            1: "Monday",
            2: "Tuesday",
            3: "Wednesday",
            4: "Thursday",
            5: "Friday",
            6: "Saturday"
          };
          const monthNameMap = {
            0: "January",
            1: "February",
            2: "March",
            3: "April",
            4: "May",
            5: "June",
            6: "July",
            7: "August",
            8: "September",
            9: "October",
            10: "November",
            11: "December"
          };
          const date = new Date(raw.location.localtime);
          const year = date.getFullYear();
          const day = date.getUTCDate();
          let currentWeekday = date.getUTCDay();
          currentWeekday = weekdayNameMap[currentWeekday];
          let currentMonth = date.getUTCMonth();
          currentMonth = monthNameMap[currentMonth];
          const formattedDate = `${currentWeekday} ${day} ${currentMonth}, ${year}`;
          return formattedDate;
        },
        temperature: {
          celsius: raw.current.temp_c,
          fahrenheit: raw.current.temp_f,
        },
        is_day: raw.current.is_day,
        condition: {
          icon: () => {
            if (raw.current.condition.code === 1000) {
              var iconClass = 'bi bi-cloud-sun';
              return iconClass;
            } else if (raw.current.condition.code === 1003) {
              var iconClass = 'bi bi-cloudy';
              return iconClass;
            } else if (raw.current.condition.code === 1006 ||
              raw.current.condition.code === 1009) {
              var iconClass = 'bi bi-cloud-sun';
              return iconClass;
            } else if (raw.current.condition.code === 1030 ||
              raw.current.condition.code === 1135) {
              var iconClass = 'bi bi-cloud-fog';
              return iconClass;
            } else if (raw.current.condition.code === 1063 ||
              raw.current.condition.code === 1072 ||
              raw.current.condition.code === 1150 ||
              raw.current.condition.code === 1153 ||
              raw.current.condition.code === 1168 ||
              raw.current.condition.code === 1180 ||
              raw.current.condition.code === 1183 ||
              raw.current.condition.code === 1198 ||
              raw.current.condition.code === 1201 ||
              raw.current.condition.code === 1240) {
              var iconClass = 'bi bi-cloud-drizzle';
              return iconClass;
            } else if (raw.current.condition.code === 1066 ||
              raw.current.condition.code === 1210 ||
              raw.current.condition.code === 1213 ||
              raw.current.condition.code === 1216 ||
              raw.current.condition.code === 1219 ||
              raw.current.condition.code === 1222 ||
              raw.current.condition.code === 1225 ||
              raw.current.condition.code === 1255 ||
              raw.current.condition.code === 1258) {
              var iconClass = 'bi bi-cloud-snow';
              return iconClass;
            } else if (raw.current.condition.code === 1069 ||
              raw.current.condition.code === 1117 ||
              raw.current.condition.code === 1204 ||
              raw.current.condition.code === 1207 ||
              raw.current.condition.code === 1237 ||
              raw.current.condition.code === 1249 ||
              raw.current.condition.code === 1252 ||
              raw.current.condition.code === 1261 ||
              raw.current.condition.code === 1264) {
              var iconClass = 'bi bi-cloud-sleet';
              return iconClass;
            } else if (raw.current.condition.code === 1087) {
              var iconClass = 'bi bi-cloud-lightning';
              return iconClass;
            } else if (raw.current.condition.code === 1114) {
              var iconClass = 'bi bi-wind';
              return iconClass;
            } else if (raw.current.condition.code === 1147) {
              var iconClass = 'bi bi-cloud-fog2';
              return iconClass;
            } else if (raw.current.condition.code === 1171 ||
              raw.current.condition.code === 1192 ||
              raw.current.condition.code === 1195 ||
              raw.current.condition.code === 1243) {
              var iconClass = 'bi bi-cloud-rain-heavy';
              return iconClass;
            } else if (raw.current.condition.code === 1186 ||
              raw.current.condition.code === 1246) {
              var iconClass = 'bi bi-cloud-rain';
              return iconClass;
            } else if (raw.current.condition.code === 1273 ||
              raw.current.condition.code === 1276 ||
              raw.current.condition.code === 1279 ||
              raw.current.condition.code === 1282) {
              var iconClass = 'bi bi-cloud-lightning-rain';
              return iconClass;
            }
          },
          description: () => {
            if (raw.current.condition.code === 1000) {
              if (raw.current.is_day === 1) {
                const description = "Sunny";
                return description;
              } else if (raw.current.is_day === 0) {
                const description = "Clear";
                return description;
              }
            } else if (raw.current.condition.code === 1003) {
              const description = "Partly cloudy";
              return description;
            } else if (raw.current.condition.code === 1006) {
              const description = "Cloudy";
              return description;
            } else if (raw.current.condition.code === 1009) {
              const description = "Overcast";
              return description;
            } else if (raw.current.condition.code === 1030) {
              const description = "Mist";
              return description;
            } else if (raw.current.condition.code === 1063) {
              const description = "Patchy rain possible";
              return description;
            } else if (raw.current.condition.code === 1066) {
              const description = "Patchy snow possible";
              return description;
            } else if (raw.current.condition.code === 1069) {
              const description = "Patchy sleet possible";
              return description;
            } else if (raw.current.condition.code === 1072) {
              const description = "Patchy freezing dribble possible";
              return description;
            } else if (raw.current.condition.code === 1087) {
              const description = "Thundery outbreaks possible";
              return description;
            } else if (raw.current.condition.code === 1114) {
              const description = "Blowing snow";
              return description;
            } else if (raw.current.condition.code === 1117) {
              const description = "Blizzard";
              return description;
            } else if (raw.current.condition.code === 1135) {
              const description = "Fog";
              return description;
            } else if (raw.current.condition.code === 1147) {
              const description = "Freezing fog";
              return description;
            } else if (raw.current.condition.code === 1150) {
              const description = "Patchy light drizzle";
              return description;
            } else if (raw.current.condition.code === 1153) {
              const description = "Light drizzle";
              return description;
            } else if (raw.current.condition.code === 1168) {
              const description = "Freezing drizzle";
              return description;
            } else if (raw.current.condition.code === 1171) {
              const description = "Heavy freezing drizzle";
              return description;
            } else if (raw.current.condition.code === 1180) {
              const description = "Patchy light rain";
              return description;
            } else if (raw.current.condition.code === 1183) {
              const description = "Light rain";
              return description;
            } else if (raw.current.condition.code === 1186) {
              const description = "Moderate rain at times";
              return description;
            } else if (raw.current.condition.code === 1189) {
              const description = "Moderate rain";
              return description;
            } else if (raw.current.condition.code === 1192) {
              const description = "Heavy rain at times";
              return description;
            } else if (raw.current.condition.code === 1195) {
              const description = "Heavy rain";
              return description;
            } else if (raw.current.condition.code === 1198) {
              const description = "Light freezing rain";
              return description;
            } else if (raw.current.condition.code === 1201) {
              const description = "Moderate or heavy freezing rain";
              return description;
            } else if (raw.current.condition.code === 1204) {
              const description = "Light sleet";
              return description;
            } else if (raw.current.condition.code === 1207) {
              const description = "Moderate or heavy sleet";
              return description;
            } else if (raw.current.condition.code === 1210) {
              const description = "Patchy light snow";
              return description;
            } else if (raw.current.condition.code === 1213) {
              const description = "Light snow";
              return description;
            } else if (raw.current.condition.code === 1216) {
              const description = "Patchy moderate snow";
              return description;
            } else if (raw.current.condition.code === 1219) {
              const description = "Moderate snow";
              return description;
            } else if (raw.current.condition.code === 1222) {
              const description = "Patchy heavy snow";
              return description;
            } else if (raw.current.condition.code === 1225) {
              const description = "Heavy snow";
              return description;
            } else if (raw.current.condition.code === 1237) {
              const description = "Ice pellets";
              return description;
            } else if (raw.current.condition.code === 1240) {
              const description = "Light rain shower";
              return description;
            } else if (raw.current.condition.code === 1243) {
              const description = "Moderate or heavy rain shower";
              return description;
            } else if (raw.current.condition.code === 1246) {
              const description = "Torrential rain shower";
              return description;
            } else if (raw.current.condition.code === 1249) {
              const description = "Light sleet showers";
              return description;
            } else if (raw.current.condition.code === 1252) {
              const description = "Moderate or heavy sleet showers";
              return description;
            } else if (raw.current.condition.code === 1255) {
              const description = "Light snow showers";
              return description;
            } else if (raw.current.condition.code === 1258) {
              const description = "Moderate or heavy snow showers";
              return description;
            } else if (raw.current.condition.code === 1261) {
              const description = "Light showers of ice pellets";
              return description;
            } else if (raw.current.condition.code === 1264) {
              const description = "Moderate or heavy showers of ice pellets";
              return description;
            } else if (raw.current.condition.code === 1273) {
              const description = "Patchy light rain with thunder";
              return description;
            } else if (raw.current.condition.code === 1276) {
              const description = "Moderate or heavy rain with thunder";
              return description;
            } else if (raw.current.condition.code === 1279) {
              const description = "Patchy light snow with thunder";
              return description;
            } else if (raw.current.condition.code === 1282) {
              const description = "Moderate or heavy snow with thunder";
              return description;
            }
          }
        },
        wind: {
          speed_mph: raw.current.wind_mph,
          direction: {
            text: () => {
              var unformattedWindDirection = raw.current.wind_dir;
              if (unformattedWindDirection === "W") {
                return "West";
              } else if (unformattedWindDirection === "S") {
                return "South";
              } else if (unformattedWindDirection === "E") {
                return "East";
              } else if (unformattedWindDirection === "N") {
                return "North";
              }
            },
            iconClass: () => {
              if (raw.current.wind_dir === "W") {
                var iconClass = 'bi bi-arrow-left';
                return iconClass;
              } else if (raw.current.wind_dir === "S") {
                var iconClass = 'bi bi-arrow-down';
                return iconClass;
              } else if (raw.current.wind_dir === "E") {
                var iconClass = 'bi bi-arrow-right';
                return iconClass;
              } else if (raw.current.wind_dir === "N") {
                var iconClass = 'bi bi-arrow-up';
                return iconClass;
              }
            }
          },
          wind_degree: raw.current.wind_degree
        }
      };
      commit('setResults', processData);
      commit('setRequestError', false);
      commit('setStatusCode', _status);
      commit('setOnlinePresenceInitialPageLoad', true);
    }
  },
  modules: {
  }
})
