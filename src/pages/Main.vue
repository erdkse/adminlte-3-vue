<template>
  <div class="wrapper">
    <Header></Header>
    <SidebarMenu></SidebarMenu>

    <div class="content-wrapper">
      <router-view></router-view>
    </div>

    <Footer></Footer>

    <aside class="control-sidebar control-sidebar-dark"></aside>
  </div>
</template>

<script>
import Header from "./../components/main/Header";
import SidebarMenu from "./../components/main/SidebarMenu";
import Footer from "./../components/main/Footer";

export default {
  name: "Main",
  components: {
    Header,
    SidebarMenu,
    Footer
  }
};
</script>

<style scoped>
</style>