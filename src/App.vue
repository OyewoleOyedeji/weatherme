<template>
  <CurrentStatus />
  <InvisibleNavigationMenuVue />
  <CreditsMenu />
  <VisibleNavigationMenu />
  <MainVue />
</template>

<script>
import VisibleNavigationMenu from "./components/VisibleNavigationMenu.vue";
import CurrentStatus from "./components/CurrentStatus.vue";
import InvisibleNavigationMenuVue from "./components/InvisibleNavigationMenu.vue";
import CreditsMenu from "./components/CreditsMenu.vue";
import MainVue from "./components/Main.vue";

export default {
    name: "App",
    components: { VisibleNavigationMenu, CurrentStatus, InvisibleNavigationMenuVue, CreditsMenu, MainVue },
}
</script>

<style>
</style>
