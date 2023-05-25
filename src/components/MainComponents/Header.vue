<template>
  <v-app-bar class="bg-blue-accent-2">
    <div class="d-lg-none d-xl-flex">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </div>

    <div class="mx-4 text-h4">RUMI.com</div>
    <v-list class="d-none d-lg-flex d-xl-none bg-blue-accent-2">
      <v-list-item value="product" to="/login">Categories</v-list-item>
      <v-list-item value="product" to="/login">About</v-list-item>
      <v-list-item value="product" to="/login">Contact Us</v-list-item>
    </v-list>

    <v-spacer></v-spacer>

    <div class="d-none d-sm-flex">
      <v-btn variant="outlined" to="/login" class="mr-2">Login</v-btn>
    </div>
  </v-app-bar>
  <v-navigation-drawer
    v-model="drawer"
    location="top"
    class="d-lg-none d-xl-flex"
    style="height: auto;"
  >
    <v-list>
      <v-list-item value="product">Categories</v-list-item>
      <v-list-item value="Login" to="/login">Login</v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
  background-color: transparent;
}
</style>
