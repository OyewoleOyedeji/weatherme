<template>
  <NavigationMenu />
</template>

<script>
import NavigationMenu from "./components/NavigationMenu.vue";
import { mapState } from "vuex";
export default {
  name: "App",
  title: "Weatherme",
  components: { NavigationMenu },
  computed: mapState({
    isDarkMode: "isDarkMode",
  }),
};
</script>
