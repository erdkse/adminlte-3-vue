<template>
  <div class="login-box">
    <div class="login-logo">
      <router-link to="/">
        <b>Admin</b>LTE
      </router-link>
    </div>
    <!-- /.login-logo -->
    <div class="card">
      <div class="card-body login-card-body">
        <p class="login-box-msg">Giriş yapın</p>

        <form>
          <div class="input-group mb-3">
            <input
              type="email"
              ref="email"
              class="form-control"
              placeholder="Email"
              v-model="loginData.email"
            >
            <div class="input-group-append">
              <span class="fas fa-envelope input-group-text"></span>
            </div>
          </div>
          <div class="input-group mb-3">
            <input
              type="password"
              ref="password"
              class="form-control"
              placeholder="Şifre"
              v-model="loginData.password"
            >
            <div class="input-group-append">
              <span class="fas fa-lock input-group-text"></span>
            </div>
          </div>
          <div class="row">
            <div class="col-8">
              <div class="checkbox icheck">
                <label>
                  <input type="checkbox"> Beni hatırla
                </label>
              </div>
            </div>
            <!-- /.col -->
            <div class="col-4">
              <button
                type="button"
                class="btn btn-primary btn-block btn-flat"
                v-on:click="logIn"
              >Giriş yap</button>
            </div>
            <!-- /.col -->
          </div>
        </form>

        <div class="social-auth-links text-center mb-3">
          <p>- YA DA -</p>
          <a href="#" class="btn btn-block btn-primary">
            <i class="fa fa-facebook mr-2"></i> Facebook ile bağlan
          </a>
        </div>
        <!-- /.social-auth-links -->
        <p class="mb-1">
          <router-link to="/">Şifremi unuttum</router-link>
        </p>
        <p class="mb-0">
          <router-link to="/register" class="text-center">Kayıt ol</router-link>
        </p>
      </div>
      <!-- /.login-card-body -->
    </div>
  </div>
</template>


<script>
import auth from "./../controllers/auth.controller";
export default {
  name: "Login",
  data: function() {
    return {
      loginData: {}
    };
  },
  methods: {
    logIn: function() {
      auth.logIn(this.loginData);
    }
  },
  created: function() {
    document.body.classList.add("login-page");
  },
  destroyed: function() {
    document.body.classList.remove("login-page");
  }
};
</script>

<style scoped>
</style>
