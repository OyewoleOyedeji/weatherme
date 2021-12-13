<template>
  <nav
    class="modal fade"
    id="invisible-navigation-menu"
    tabindex="-1"
    aria-labelledby="invisible-navigation-menu"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <span class="badge rounded-pill bg-light text-dark"
            >Control Panel</span
          >
          <div class="pt-4"></div>
          <div class="menu-group pb-2 pt-2 mt-1">
            <a
              id="refresh-statistics"
              @click="refreshWeatherStatistics"
              class="text-white pt-3"
            >
              <i class="bi bi-arrow-repeat align-middle ms-3 menu-icons"></i>
              <span class="me-3 float-end align-middle h4 pb-1"
                >Refresh the current readings</span
              >
            </a>
          </div>
          <div class="menu-group pb-2 pt-2">
            <a :href="repositoryURL" target="_blank" class="text-white pt-3">
              <i class="bi bi-box align-middle ms-3 menu-icons"></i>
              <span class="me-3 float-end align-middle h4 pb-1"
                >Contribute to the project</span
              >
            </a>
          </div>
          <div class="menu-group pb-2 pt-2">
            <a :href="surveyURL" target="_blank" class="text-white pt-3">
              <i
                class="bi bi-chat-square-dots align-middle ms-3 menu-icons"
              ></i>
              <span class="me-3 float-end align-middle h4 pb-1"
                >Take a quick survey</span
              >
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";

// Initiate sessionStorage
var session = window.sessionStorage;

export default {
  data() {
    return {
      repositoryURL: "https://github.com/OyewoleOyedeji/weatherme.git",
      surveyURL: "https://mygreatsurveysite.org",
    };
  },
  methods: {
    // Validate the data and recall apiRequest()
    refreshWeatherStatistics() {
      const device = this.$props.device;
      var searchTerm = session.getItem("query");
      if (device === "desktop") {
        if (searchTerm === "undefined") {
          alert("You have to fill in a location!");
        } else {
          const invisibleNavigationMenu = document.querySelector(
            "#invisible-navigation-menu"
          );
          const selectModal = bootstrap.Modal.getInstance(
            invisibleNavigationMenu
          );
          selectModal.hide();
          console.log(searchTerm);
          this.requestApi("desktop");
        }
      } else if (device === "tablet") {
        if (searchTerm === "undefined") {
          alert("You have to fill in a location!");
        } else {
          const invisibleNavigationMenu = document.querySelector(
            "#invisible-navigation-menu"
          );
          const selectModal = bootstrap.Modal.getInstance(
            invisibleNavigationMenu
          );
          selectModal.hide();
          console.log(searchTerm);
          this.requestApi("tablet");
        }
      }
    },
    requestApi(deviceType) {
      if (deviceType === "desktop") {
        // Set query in sessionStorage
        session.setItem("query", this.weatherSearchLocationDesktop);

        // Send out request
        this.axios
          .get(this.$props.settings.targetURL, {
            baseURL: this.$props.settings.requestConfig.baseURL,
            params: {
              key: this.$props.settings.requestConfig.params.key,
              q: this.$props.settings.requestConfig.params.q(),
              days: this.$props.settings.requestConfig.params.days,
            },
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      } else if (deviceType === "tablet") {
        // Location input for tablets
        var queryTablet = this.weatherSearchLocationTablet;

        if (queryTablet === null || queryTablet === "") {
          alert("You have to fill in a location!");
        } else {
          // Set query in sessionStorage
          session.setItem("query", this.weatherSearchLocationTablet);

          // Send out the request
          this.axios
            .get(this.$props.settings.targetURL, {
              baseURL: this.$props.settings.requestConfig.baseURL,
              params: {
                key: this.$props.settings.requestConfig.params.key,
                q: this.$props.settings.requestConfig.params.q(),
                days: this.$props.settings.requestConfig.params.days,
              },
            })
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    },
  },
  props: {
    device: String,
    settings: Object,
  },
};
</script>