<template>
  <!-- Carousel starts -->
  <v-carousel cycle height="600" hide-delimiter-background show-arrows="hover">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.path"
      cover
    ></v-carousel-item>
  </v-carousel>
  <!-- carousel ends -->
  <!-- All products starts -->
  <div class="text-center ma-10"><h2>All Products</h2></div>
  <v-divider></v-divider>
  <AllProduct />
  <!-- All product ends -->
  <!-- Categories Starts -->
  <div class="text-center ma-10"><h2>Categories</h2></div>
  <v-divider></v-divider>
  <ProductCategories />
  <!-- Categories Ends -->
</template>

<script>
import AllProduct from "../MainComponents/AllProduct.vue";
import ProductCategories from "./ProductCategories.vue";
export default {
  setup() {
    return {
      items: [
        {
          path:
            "https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          path: "https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
        },
        {
          path:
            "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
  components: {
    AllProduct,
    ProductCategories,
  },
};
</script>
<style lang=""></style>
