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

    // Validate the input data
    validateData() {
      var device = this.$props.device;

      if (device == "desktop") {
        // Location input for desktops
        var queryDesktop = this.weatherSearchLocationDesktop;

        if (queryDesktop === null || queryDesktop === "") {
          alert("You have to fill in a location!");
        } else {
          let queryDesktop = this.weatherSearchLocationDesktop;
          this.$store.commit("setQuery", queryDesktop);
          this.$store.dispatch("callApi");
        }
      } else if (device == "tablet") {
        // Location input for tablets
        let queryMobile = this.weatherSearchLocationTablet;

        if (queryMobile === null || queryDesktop === "") {
          alert("You have to fill in a location!");
        } else {
          let queryMobile = this.weatherSearchLocationTablet;
          this.$store.commit("setQuery", queryMobile);
          this.$store.dispatch("callApi");
        }
      }
    },
  },
  props: {
    device: String,
  },
};
</script>