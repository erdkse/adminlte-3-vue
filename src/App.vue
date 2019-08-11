<template>
  <div class="wrapper">
    <Header></Header>
    <SidebarMenu></SidebarMenu>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1 class="m-0 text-dark">Dashboard</h1>
            </div>
            <!-- /.col -->
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item active">Dashboard v1</li>
              </ol>
            </div>
            <!-- /.col -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- /.content-header -->

      <!-- Main content -->
      <section class="content">
        <div class="container-fluid">
          <!-- Small boxes (Stat box) -->
          <div class="row">
            <div class="col-lg-3 col-6">
              <!-- small box -->
              <div class="small-box bg-info">
                <div class="inner">
                  <h3>150</h3>

                  <p>New Orders</p>
                </div>
                <div class="icon">
                  <i class="ion ion-bag"></i>
                </div>
                <a href="#" class="small-box-footer">
                  More info
                  <i class="fas fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-3 col-6">
              <!-- small box -->
              <div class="small-box bg-success">
                <div class="inner">
                  <h3>
                    53
                    <sup style="font-size: 20px">%</sup>
                  </h3>

                  <p>Bounce Rate</p>
                </div>
                <div class="icon">
                  <i class="ion ion-stats-bars"></i>
                </div>
                <a href="#" class="small-box-footer">
                  More info
                  <i class="fas fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-3 col-6">
              <!-- small box -->
              <div class="small-box bg-warning">
                <div class="inner">
                  <h3>44</h3>

                  <p>User Registrations</p>
                </div>
                <div class="icon">
                  <i class="ion ion-person-add"></i>
                </div>
                <a href="#" class="small-box-footer">
                  More info
                  <i class="fas fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-3 col-6">
              <!-- small box -->
              <div class="small-box bg-danger">
                <div class="inner">
                  <h3>65</h3>

                  <p>Unique Visitors</p>
                </div>
                <div class="icon">
                  <i class="ion ion-pie-graph"></i>
                </div>
                <a href="#" class="small-box-footer">
                  More info
                  <i class="fas fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
            <!-- ./col -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
      </section>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->

    <Footer></Footer>

    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Control sidebar content goes here -->
    </aside>
    <!-- /.control-sidebar -->
  </div>
  <!-- ./wrapper -->
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/main/Header";
import SidebarMenu from "./components/main/SidebarMenu";
import Footer from "./components/main/Footer";

export default {
  name: "app",
  components: {
    HelloWorld,
    Header,
    SidebarMenu,
    Footer
  }
};
</script>

<style>
@import url("https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css");
@import url("../node_modules/bootstrap/dist/css/bootstrap.min.css");
@import url("../src/assets/css/adminlte.min.css");
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700");

::-webkit-scrollbar {
  width: 0px;
  /* remove scrollbar space */
  background: transparent;
  /* optional: just make scrollbar invisible */
}

/* optional: show position indicator in red */
::-webkit-scrollbar-thumb {
  background: #ff0000;
}

body {
  min-height: 100vh;
}

#root {
  /* height: calc(100vh - 112px); */
  min-height: 100vh;
}

.content-wrapper {
  min-height: calc(100vh - 112px);
}

.main-header button {
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}

.main-sidebar {
  overflow-x: hidden;
  z-index: 1001;
}

#sidebar-overlay {
  z-index: 1000;
}

.login-card-body,
.register-card-body {
  background: #fff;
  padding: 20px;
  border-top: 0;
  color: #666;
}

.login-card-body .input-group .input-group-text,
.register-card-body .input-group .input-group-text {
  color: #777;
  background-color: transparent;
}

.login-card-body .input-group .form-control,
.register-card-body .input-group .form-control {
  border-right: none;
}

::-webkit-scrollbar {
  width: 0px;
  height: 8px;
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #343a40dd;
  border-radius: 8px;
}

/*  */

.card.user-list tr:hover {
  cursor: pointer;
}

.card.card-primary .card-header {
  background-color: #4f5962;
}

*:disabled {
  cursor: not-allowed;
}
</style>
