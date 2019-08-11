<template>
  <div class="register-box">
    <div class="register-logo">
      <router-link to="/">
        <b>Admin</b>LTE
      </router-link>
    </div>

    <div class="card">
      <div class="card-body register-card-body">
        <p class="login-box-msg">Yeni üyelik oluştur</p>

        <form>
          <div class="input-group mb-3">
            <input type="email" class="form-control" placeholder="İsim" />
            <div class="input-group-append">
              <span class="fas fa-user input-group-text"></span>
            </div>
          </div>
          <div class="input-group mb-3">
            <input type="email" class="form-control" placeholder="Email" />
            <div class="input-group-append">
              <span class="fas fa-envelope input-group-text"></span>
            </div>
          </div>
          <div class="input-group mb-3">
            <input type="password" class="form-control" placeholder="Şifre" />
            <div class="input-group-append">
              <span class="fas fa-lock input-group-text"></span>
            </div>
          </div>
          <div class="input-group mb-3">
            <input type="password" class="form-control" placeholder="Şifre tekrar" />
            <div class="input-group-append">
              <span class="fas fa-lock input-group-text"></span>
            </div>
          </div>
          <div class="row">
            <div class="col-8">
              <div class="checkbox icheck">
                <label>
                  <input type="checkbox" />
                  <a href="#">Kuralları</a>
                  kabul ediyorum.
                </label>
              </div>
            </div>
            <!-- /.col -->
            <div class="col-4">
              <button
                type="submit"
                class="btn btn-primary btn-block btn-flat"
                v-on:click="register"
              >Kayıt ol</button>
            </div>
            <!-- /.col -->
          </div>
        </form>

        <div class="social-auth-links text-center">
          <p>- YA DA -</p>
          <a href="#" class="btn btn-block btn-primary">
            <i class="fa fa-facebook mr-2"></i>
            Facebook ile kayıt ol
          </a>
        </div>

        <router-link to="login" class="text-center">Zaten bir hesabım var.</router-link>
      </div>
      <!-- /.form-box -->
    </div>
    <!-- /.card -->
  </div>
</template>

<script>
export default {
  name: "Register",
  data: function() {
    return {};
  },
  methods: {
    register: function() {
      this.$router.push({ path: "/" });
    }
  },
  created: function() {
    document.body.classList.add("register-page");
  },
  destroyed: function() {
    document.body.classList.remove("register-page");
  }
};
</script>

<style>
</style>
