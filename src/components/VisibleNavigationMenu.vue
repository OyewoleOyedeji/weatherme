<template>
  <CreditsMenu :device="currentDevice" :author="projectAuthor" />
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
            v-model="weatherSearchLocationMobile"
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
import CreditsMenu from "./CreditsMenu.vue";

// Initiate sessionStorage
var session = window.sessionStorage;

export default {
  data() {
    return {
      currentDevice: this.$props.device,
      projectAuthor: this.$props.author,
      weatherSearchLocationDesktop: "",
      weatherSearchLocationMobile: ""
    };
  },
  methods: {
    // Open the credits menu
    openCreditsMenu() {
      const device = this.currentDevice;
      if (device === "large") {
        var creditsMenuDesktop = document.getElementById(
          "credits-menu-desktop"
        );
        creditsMenuDesktop.style.width = "100%";
      } else {
        var creditsMenuMobile = document.getElementById("credits-menu-mobile");
        creditsMenuMobile.style.width = "100%";
      }
    },

    // Validate the location input data
    validateData() {
      var device = this.currentDevice;

      if (device === 'large') {
        var queryDesktop = this.weatherSearchLocationDesktop;
        
        if (queryDesktop === '') {
          session.setItem('queryDesktop', undefined)
          alert('You have to fill in a location!')
        } else {
          session.setItem('queryDesktop', queryDesktop)
          console.log(queryDesktop);
        }
      } else {
        var queryMobile = this.weatherSearchLocationMobile;
        if (queryMobile === '') {
          session.setItem('queryMobile', undefined)
          alert('You have to fill in a location!')
        } else {
          session.setItem('queryMobile', queryMobile)
          console.log(queryMobile);
        }
      }
    }
  },
  components: { CreditsMenu },
  props: {
    device: String,
    author: String
  }
};
</script>