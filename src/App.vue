<template>
  <CurrentStatus />
  <InvisibleNavigationMenu />
  <VisibleNavigationMenu :device="currentDeviceWidth" :author="author" />
  <MainVue />
</template>

<script>
import VisibleNavigationMenu from "./components/VisibleNavigationMenu.vue";
import CurrentStatus from "./components/CurrentStatus.vue";
import InvisibleNavigationMenu from "./components/InvisibleNavigationMenu.vue";
import MainVue from "./components/Main.vue";

// Bootstrap Javascript & CSS
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";

// Bootstrap Icons CSS
import "@/assets/bootstrap-icons/bootstrap-icons.css";

// Devicon CSS
import "@/assets/devicon/devicon-base.css";

import "@/assets/site.css";

export default {
  name: "App",
  components: {
    VisibleNavigationMenu,
    CurrentStatus,
    InvisibleNavigationMenu,
    MainVue,
  },
  data() {
    return {
      currentDeviceWidth: "",
      author: 'Oyewole Oyedeji',
      searchQuery: ''
    };
  },
  mounted() {
    // Determine the type of device
    const deviceWidth = window.innerWidth;
    if (deviceWidth >= 992) {
      this.currentDeviceWidth = "large";
    } else {
      this.currentDeviceWidth = "small";
    }
  },
  methods: {
    onSaveSearchQuery(query) {
      this.searchQuery = query;
    }
  },
};
</script>
