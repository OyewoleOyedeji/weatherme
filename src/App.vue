<template>
  <CurrentStatus />
  <CreditsMenu />
  <InvisibleNavigationMenu />
  <VisibleNavigationMenu />
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

import { mapState } from "vuex";

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
  computed: mapState({
    device: "device",
  }),
  created() {
    const deviceType = window.innerWidth;
    if (deviceType >= 992) {
      this.$store.state.device = "desktop";
    } else if (deviceType < 992 && deviceType > 375) {
      this.$store.state.device = "tablet";
    } else {
      this.$store.state.device = "mobile";
    }
  },
};
</script>
