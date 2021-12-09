<template>
  <section>
    <div id="credits-menu-desktop">
      <!-- Close credits -->
      <button class="close-button" id="untoggle-navigation-menu-desktop">
        <i class="bi bi-x"></i>
      </button>

      <!-- Credit text -->
      <div class="centre text-white">
        <h1 class="text-center pt-5">Credits</h1>
        <h2 class="text-center">Made with ❤ by {{ author }}</h2>
        <h3 class="pt-3 text-center">
          <span class="pe-3">Using</span>
          <i class="devicon-html5-plain pe-3" title="HTML5"></i>
          <i class="devicon-css3-plain pe-3" title="CSS3"></i>
          <i class="devicon-javascript-plain pe-3" title="Javascript"></i>
          <i class="devicon-jquery-plain pe-3" title="jQuery and jQuery UI"></i>
          <i class="devicon-express-original pe-3" title="Express Server"></i>
          <i class="devicon-bootstrap-plain pe-3" title="Bootstrap"></i>
        </h3>
      </div>
    </div>
    <div id="credits-menu-mobile">
      <!-- Close credits -->
      <button class="close-button" id="untoggle-navigation-menu-mobile">
        <i class="bi bi-x"></i>
      </button>

      <!-- Credit text -->
      <div class="centre text-white">
        <h1 class="text-center pt-5">Credits</h1>
        <h2 class="text-center">
          Made with ❤ by <br />
          {{ author }}
        </h2>
        <h3 class="pt-3 text-center">
          <i class="devicon-html5-plain pe-3" title="HTML5"></i>
          <i class="devicon-css3-plain pe-3" title="CSS3"></i>
          <i class="devicon-javascript-plain pe-3" title="Javascript"></i>
          <i class="devicon-jquery-plain pe-3" title="jQuery and jQuery UI"></i>
          <i class="devicon-express-original pe-3" title="Express Server"></i>
          <i class="devicon-bootstrap-plain pe-3" title="Bootstrap"></i>
        </h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    data() {
        return {
            author: 'Oyewole Oyedeji'
        }
    },
}
</script>