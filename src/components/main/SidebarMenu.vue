<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <router-link to="/" class="brand-link">
      <img
        src="./../../assets/img/logo.png"
        alt="AdminLTE Logo"
        class="brand-image img-circle elevation-3"
        style="opacity: .8"
      />
      <span class="brand-text font-weight-light">AdminLTE 3</span>
    </router-link>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img
            src="./../../assets/img/default-user.png"
            class="img-circle elevation-2"
            alt="User Image"
          />
        </div>
        <div class="info">
          <router-link to="/profile" class="d-block">Erdi Köse</router-link>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <!-- Add icons to the links using the .nav-icon class
          with font-awesome or any other icon font library-->

          <li class="nav-item has-treeview">
            <router-link to="/" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>Dashboard</p>
            </router-link>
          </li>
          <li class="nav-item has-treeview">
            <router-link to="/profile" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>Profile</p>
            </router-link>
          </li>
          <li class="nav-item has-treeview">
            <router-link to="/blank" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>Blank Page</p>
            </router-link>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {
  name: "SidebarMenu",
  data: function() {
    return {
      isMenuOpen: false
    };
  },
  computed: {
    authUser() {
      return this.$store.getters.getAuthUser;
    }
  },
  methods: {
    toogleMenu: function(event) {
      event.stopPropagation();
      event.preventDefault();
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style>
</style>