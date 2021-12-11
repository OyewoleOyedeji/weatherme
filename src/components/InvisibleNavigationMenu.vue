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

export default {
  data() {
    return {
      repositoryURL: "https://github.com/OyewoleOyedeji/weatherme.git",
      surveyURL: "https://mygreatsurveysite.org",
      currentDevice: "",
      weatherSearchLocationDesktop: this.$props.query,
      weatherSearchLocationMobile: this.$props.query,
    };
  },
  methods: {
    refreshWeatherStatistics() {
      const device = this.currentDevice;
      if (device === "large") {
        const searchTerm = this.weatherSearchLocationDesktop;
        if (searchTerm === "") {
          alert("Sorry, the location field cannot be empty");
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
        if (searchTerm === "") {
          alert("Sorry, the location field cannot be empty");
        } else {
          console.log(this.weatherSearchLocationMobile);
        }
      }
    },
  },
  mounted() {
    const deviceWidth = window.innerWidth;
    if (deviceWidth >= 992) {
      this.currentDevice = "large";
    } else {
      this.currentDevice = "small";
    }
  },
  props: ['query']
};
</script>