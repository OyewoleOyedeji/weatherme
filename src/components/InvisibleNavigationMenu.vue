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
          <span class="badge rounded-pill bg-light text-dark">More items</span>
          <div class="pt-4"></div>
          <div class="menu-group pb-2 pt-2 mt-1" @click="closeModal">
            <a :href="githubRepo" target="_blank" class="text-white pt-3">
              <i class="bi bi-box align-middle ms-3 menu-icons"></i>
              <span class="me-3 float-end align-middle h4 pb-1"
                >Contribute to the project</span
              >
            </a>
          </div>
          <div class="menu-group pb-2 pt-2" @click="closeModal">
            <a :href="surveyUrl" target="_blank" class="text-white pt-3">
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
import { mapState } from "vuex";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";

export default {
  methods: {
    closeModal() {
      const invisibleNavigationMenu = document.querySelector(
        "#invisible-navigation-menu"
      );
      const selectModal = bootstrap.Modal.getInstance(invisibleNavigationMenu);
      selectModal.hide();
    },
  },
  computed: mapState({
    githubRepo: "repositoryURL",
    surveyUrl: "surveyURL",
  }),
};
</script>