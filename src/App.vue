<template>
  <div class="container">
    <h1 class="mx-auto">Hello World</h1>
  </div>
</template>

<script>
// Bootstrap Icons CSS
import "@/assets/bootstrap-icons/bootstrap-icons.css";

// Devicon CSS
import "@/assets/devicon/devicon-base.css";

import { mapState } from "vuex";

export default {
  name: "App",
  title: "Weatherme",
  components: {},
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
