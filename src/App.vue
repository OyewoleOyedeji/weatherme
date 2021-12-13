<template>
  <CurrentStatus />
  <CreditsMenu :device="currentDeviceType" :author="author" />
  <InvisibleNavigationMenu :device="currentDeviceType" />
  <VisibleNavigationMenu :device="currentDeviceType" />
  <MainVue />
</template>

<script>
import VisibleNavigationMenu from "./components/VisibleNavigationMenu.vue";
import CurrentStatus from "./components/CurrentStatus.vue";
import InvisibleNavigationMenu from "./components/InvisibleNavigationMenu.vue";
import MainVue from "./components/Main.vue";
import CreditsMenu from "./components/CreditsMenu.vue";

// Bootstrap Javascript & CSS
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";

// Bootstrap Icons CSS
import "@/assets/bootstrap-icons/bootstrap-icons.css";

// Devicon CSS
import "@/assets/devicon/devicon-base.css";

import "@/assets/site.css";

var session = window.sessionStorage;

export default {
  name: "App",
  components: {
    VisibleNavigationMenu,
    CurrentStatus,
    CreditsMenu,
    InvisibleNavigationMenu,
    MainVue,
  },
  data() {
    return {
      currentDeviceType: "",
      author: 'Oyewole Oyedeji',
    };
  },
  mounted() {
    // Determine the type of device
    const deviceType = window.innerWidth;
    if (deviceType >= 992) {
      this.currentDeviceType = "desktop";
    } else if (deviceType < 992) {
      this.currentDeviceType = "tablet";
    }

    // Set the query to empty
    session.setItem('query', undefined);
  }
};
</script>
