<template>
  <CurrentStatus />
  <InvisibleNavigationMenu />
  <VisibleNavigationMenu />
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
  methods: {},
};
</script>
