<template>
  <nav class="container mt-5 d-md-block d-none" id="visible-navigation-menu">
    <div class="row row-cols-1">
      <!-- First half of the visible navigation menu -->
      <div class="col-lg-10 order-lg-0 order-1">
        <div class="searchbox d-lg-block d-none">
          <i class="bi bi-pin-map"></i>
          <input
            type="text"
            placeholder="Enter city, e.g; Abuja"
            class="p-3 ps-3 pt-1 align-middle"
            id="location-search-desktop"
            v-model="weatherSearchLocationDesktop"
            @change="updateSession"
          />
        </div>
        <div class="searchbox d-block d-lg-none fixed-bottom container">
          <i class="bi bi-pin-map"></i>
          <input
            type="text"
            placeholder="Enter city, e.g; Abuja"
            class="p-3 ps-3 pt-1 align-middle"
            id="location-search-mobile"
            v-model="weatherSearchLocationTablet"
            @change="updateSession"
          />
        </div>
      </div>

      <!-- Other half of the visible navigation menu -->
      <div class="col-lg-2 order-lg-1 order-0">
        <!-- Large screen variation -->
        <div class="row">
          <div class="col-4 d-lg-block d-none">
            <button
              type="button"
              class="site-buttons p-3 rounded-circle"
              title="Click me to find the weather of the entered location"
              @click="validateData"
            >
              <i class="bi bi-search"></i>
            </button>
          </div>
          <div class="col-4 d-lg-block d-none">
            <button
              type="button"
              class="site-buttons p-3 rounded-circle"
              title="Navigation Menu"
              data-bs-toggle="modal"
              data-bs-target="#invisible-navigation-menu"
            >
              <i class="bi bi-grid-1x2"></i>
            </button>
          </div>
          <div class="col-4 d-lg-block d-none">
            <button
              type="button"
              id="toggle-navigation-menu-desktop"
              title="Credits"
              @click="openCreditsMenu"
            >
              <i class="bi bi-filter-right"></i>
            </button>
          </div>
        </div>

        <!-- Small screen variation -->
        <div class="row d-lg-none d-block">
          <div class="col text-center pb-3">
            <button
              type="button"
              class="site-buttons p-3 rounded-circle me-3"
              title="Navigation Menu"
              data-bs-toggle="modal"
              data-bs-target="#invisible-navigation-menu"
            >
              <i class="bi bi-grid-1x2"></i>
            </button>
            <button
              type="button"
              id="toggle-navigation-menu-mobile"
              title="Credits"
              @click="openCreditsMenu"
            >
              <i class="bi bi-filter-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
// Initiate sessionStorage
var session = window.sessionStorage;

export default {
  data() {
    return {
      weatherSearchLocationDesktop: null,
      weatherSearchLocationTablet: null,
    };
  },
  methods: {
    // Open the credits menu
    openCreditsMenu() {
      const device = this.$props.device;
      if (device === "desktop") {
        var creditsMenuDesktop = document.querySelector(
          "#credits-menu-desktop"
        );
        creditsMenuDesktop.style.width = "100%";
      } else if (device === "tablet") {
        var creditsMenuMobile = document.querySelector("#credits-menu-mobile");
        creditsMenuMobile.style.width = "100%";
      }
    },

    // Validate the location input data
    validateData() {
      var device = this.$props.device;

      if (device == "desktop") {
        // Location input for desktops
        var queryDesktop = this.weatherSearchLocationDesktop;

        if (queryDesktop === null || queryDesktop === "") {
          alert("You have to fill in a location!");
        } else {
          this.requestApi(device);
        }
      } else if (device == "tablet") {
        this.requestApi(device);
      }
    },

    // Request the weather api
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

    updateSession() {
      const device = this.$props.device;

      if (device === "desktop") {
        var queryDesktop = this.weatherSearchLocationDesktop;
        session.setItem("query", queryDesktop);
      } else if (device === "tablet") {
        var queryMobile = this.weatherSearchLocationTablet;
        session.setItem("query", queryMobile);
      }
    },
  },
  props: {
    device: String,
    settings: Object,
  },
};
</script>