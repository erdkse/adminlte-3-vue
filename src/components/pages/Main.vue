<template>
  <div class="wrapper">
    <Header></Header>
    <SidebarMenu></SidebarMenu>

    <div class="content-wrapper">
      <Dashboard></Dashboard>
    </div>

    <Footer></Footer>

    <aside class="control-sidebar control-sidebar-dark"></aside>
  </div>
</template>

<script>
import Header from "./../main/Header";
import SidebarMenu from "./../main/SidebarMenu";
import Footer from "./../main/Footer";

import Dashboard from "./Dashboard";

export default {
  name: "Main",
  components: {
    Header,
    SidebarMenu,
    Footer,
    Dashboard
  }
};
</script>

<style scoped>
</style>