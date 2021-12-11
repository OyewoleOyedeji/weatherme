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
      currentDevice: this.$props.device,
      weatherSearchLocationDesktop: session.getItem('queryDesktop'),
      weatherSearchLocationMobile: session.getItem('queryMobile'),
    };
  },
  methods: {
    // Validate the data and recall apiRequest()
    /** Note: all items stored in the sessionStorage object
     * have data types of string. Hence the use of == instead of ===
     */
    refreshWeatherStatistics() {
      const device = this.currentDevice;
      if (device === "large") {
        const searchTerm = this.weatherSearchLocationDesktop;
        if (searchTerm == undefined) {
          alert("You have to fill in a location!");
        } else {
          const invisibleNavigationMenu = document.getElementById(
            "invisible-navigation-menu"
          );
          const selectModal = bootstrap.Modal.getInstance(
            invisibleNavigationMenu
          );
          selectModal.hide();
          console.log(this.weatherSearchLocationDesktop);
        }
      } else {
        const searchTerm = this.weatherSearchLocationMobile;
        if (searchTerm == undefined) {
          alert("You have to fill in a location!");
        } else {
          console.log(this.weatherSearchLocationMobile);
        }
      }
    },
  },
  props: {
    device: String
  }
};
</script>