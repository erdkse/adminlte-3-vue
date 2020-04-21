<template>
  <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>User Profile</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <a>Home</a>
              </li>
              <li class="breadcrumb-item active">Profile</li>
            </ol>
          </div>
        </div>
      </div>
      <!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3">
            <!-- Profile Image -->
            <div class="card card-primary card-outline">
              <div class="card-body box-profile">
                <div class="text-center">
                  <img
                    class="profile-user-img img-fluid img-circle"
                    src="./../assets/img/default-user.png"
                    alt="User profile picture"
                  />
                </div>

                <h3 class="profile-username text-center">Yiğit Sedat Ceyhan</h3>

                <p class="text-muted text-center">Bilgisayar Mühendisi</p>

                <ul class="list-group list-group-unbordered mb-3">
                  <li class="list-group-item">
                    <b>Today</b>
                    <a class="float-right">1,322</a>
                  </li>
                  <li class="list-group-item">
                    <b>Total</b>
                    <a class="float-right">13,287</a>
                  </li>
                </ul>

                <button class="btn btn-primary btn-block">
                  <b>Invite your friend</b>
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-9">
            <div class="card">
              <div class="card-header p-2">
                <ul class="nav nav-pills">
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      v-bind:class="{'active':selectedTab === 'INFO'}"
                      v-on:click="selectedTab = 'INFO'"
                    >Info</a>
                  </li>
                  <li
                    class="nav-item"
                    v-bind:class="{'active':selectedTab === 'SETTINGS'}"
                    v-on:click="selectedTab = 'SETTINGS'"
                  >
                    <a class="nav-link">Settings</a>
                  </li>
                </ul>
              </div>
              <div class="card-body">
                <div class="tab-content">
                  <div class="tab-pane" v-bind:class="{'active' : selectedTab === 'INFO'}">
                    <form class="p-2">
                      <div class="form-row">
                        <div class="form-group col-sm-12 col-md-12">
                          <label>Email</label>
                          <input type="email" class="form-control" placeholder="Email" disabled />
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group col-sm-12 col-md-6">
                          <label>Name</label>
                          <input type="text" class="form-control" placeholder="İsim" />
                        </div>
                        <div class="form-group col-sm-12 col-md-6">
                          <label>Surname</label>
                          <input type="text" class="form-control" placeholder="Soyisim" />
                        </div>
                      </div>

                      <hr />

                      <div>
                        <button
                          type="button"
                          class="btn btn-block btn-primary w-auto float-right"
                        >Update</button>
                      </div>
                    </form>
                  </div>
                  <div
                    class="tab-pane"
                    v-bind:class="{'active' : selectedTab === 'SETTINGS'}"
                  >Setting is not ready yet.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data: function() {
    return {
      selectedTab: "INFO"
    };
  }
};
</script>

<style>
.nav-link.active:hover {
  color: white !important;
}
</style>
