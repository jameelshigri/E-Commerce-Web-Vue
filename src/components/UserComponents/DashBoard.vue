<template>
  <v-navigation-drawer
    v-model="drawer"
    class="bg-light-blue-accent-2 text-white"
    permanent
    elevation="3"
  >
    <v-list-item>
      <img src="src" alt="alt" />
    </v-list-item>
    <v-list color="transparent">
      <v-list-item
        v-for="item in Items"
        :prepend-icon="item.icon"
        :title="item.title"
        @click="loadComponent(item.component)"
      >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar class="bg-light-blue-accent-2 text-white">
    <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
    <v-toolbar-title>Admin Panel</v-toolbar-title>
    <v-toolbar-item class="mr-15">
      <v-btn variant="outlined" class="mr-2" @click="logout()">Logout</v-btn>
    </v-toolbar-item>
  </v-app-bar>

  <v-main @click="drawer = false">
    <v-container>
      <h1 class="text-center">Manage</h1>
      <component :is="currentComponent"></component>
    </v-container>
  </v-main>
</template>
<script>
import AddProduct from "../UserComponents/AddProduct.vue";
import ViewAllProduct from "./ViewAllProduct.vue";
export default {
  data() {
    return {
      drawer: false,
      currentComponent: ViewAllProduct,
      Items: [
        {
          title: "Add New Products",
          icon: "mdi-view-dashboard",
          component: "AddProduct",
        },
        {
          title: "View All Product",
          icon: "mdi-account",
          component: "ViewAllProduct",
        },
      ],
    };
  },
  components: {
    AddProduct,
    ViewAllProduct,
  },
  methods: {
    loadComponent(component) {
      if (component === "AddProduct") {
        this.currentComponent = AddProduct;
      } else if (component === "ViewAllProduct") {
        this.currentComponent = ViewAllProduct;
      }
    },
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/");
    },
  },
};
</script>
<style></style>
