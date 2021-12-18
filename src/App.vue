<template>
  <CurrentStatus />
  <CreditsMenu :device="currentDeviceType" />
  <InvisibleNavigationMenu />
  <VisibleNavigationMenu
    :device="currentDeviceType"
  />
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

// Site styles
import "@/assets/site.css";

export default {
  name: "App",
  title: "Weatherme",
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
    };
  },
  mounted() {
    const deviceType = window.innerWidth;
    if (deviceType >= 992) {
      this.currentDeviceType = "desktop";
    } else if (deviceType < 992) {
      this.currentDeviceType = "tablet";
    }
  },
};
</script>
