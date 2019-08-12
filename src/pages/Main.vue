<template>
  <div class="wrapper">
    <Header></Header>
    <SidebarMenu></SidebarMenu>

    <div class="content-wrapper">
      <router-view></router-view>
    </div>

    <Footer></Footer>

    <aside class="control-sidebar control-sidebar-dark"></aside>
    <div id="sidebar-overlay" v-on:click="toggleMenuSidebar"></div>
  </div>
</template>

<script>
import Header from "./../components/main/Header";
import SidebarMenu from "./../components/main/SidebarMenu";
import Footer from "./../components/main/Footer";

function resizeWindow() {
  console.log("window.innerHeight", window.innerHeight);
  console.log("window.innerWidth", window.innerWidth);
}

export default {
  name: "Main",
  components: {
    Header,
    SidebarMenu,
    Footer
  },
  methods: {
    toggleMenuSidebar: function() {
      if (document.body.classList.contains("sidebar-open")) {
        document.body.classList.remove("sidebar-open");
        document.body.classList.add("sidebar-collapse");
      } else if (document.body.classList.contains("sidebar-collapse")) {
        document.body.classList.remove("sidebar-collapse");
        document.body.classList.add("sidebar-open");
      }
    }
  },
  created: function() {
    window.addEventListener("resize", resizeWindow);
  },
  destroyed: function() {
    window.removeEventListener("resize", resizeWindow, false);
  }
};
</script>

<style scoped>
</style>