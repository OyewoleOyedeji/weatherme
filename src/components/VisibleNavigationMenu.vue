<template>
  <nav class="container mt-5 d-md-block d-none" id="visible-navigation-menu">
    <div class="row row-cols-1">
      <!-- First half of the visible navigation menu -->
      <div class="col-lg-10 order-lg-0 order-1">
        <div class="searchbox d-lg-block d-none">
          <i class="bi bi-pin-map"></i>
          <input
            type="text"
            placeholder="Enter city, e.g; Abuja"
            class="p-3 ps-3 pt-1 align-middle"
            id="location-search-desktop"
          />
        </div>
        <div class="searchbox d-block d-lg-none fixed-bottom container">
          <i class="bi bi-pin-map"></i>
          <input
            type="text"
            placeholder="Enter city, e.g; Abuja"
            class="p-3 ps-3 pt-1 align-middle"
            id="location-search-mobile"
          />
        </div>
      </div>

      <!-- Other half of the visible navigation menu -->
      <div class="col-lg-2 order-lg-1 order-0">
        <!-- Large screen variation -->
        <div class="row">
          <div class="col-6 d-lg-block d-none">
            <button
              type="button"
              class="site-buttons p-3 rounded-circle"
              title="Navigation Menu"
              data-bs-toggle="modal"
              data-bs-target="#invisible-navigation-menu"
            >
              <i class="bi bi-grid-1x2"></i>
            </button>
          </div>
          <div class="col-6 d-lg-block d-none">
            <button
              type="button"
              id="toggle-navigation-menu-desktop"
              title="Credits"
            >
              <i class="bi bi-filter-right"></i>
            </button>
          </div>
        </div>

        <!-- Small screen variation -->
        <div class="row d-lg-none d-block">
          <div class="col text-center pb-3">
            <button
              type="button"
              class="site-buttons p-3 rounded-circle me-3"
              title="Navigation Menu"
              data-bs-toggle="modal"
              data-bs-target="#invisible-navigation-menu"
            >
              <i class="bi bi-grid-1x2"></i>
            </button>
            <button
              type="button"
              id="toggle-navigation-menu-mobile"
              title="Credits"
            >
              <i class="bi bi-filter-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>