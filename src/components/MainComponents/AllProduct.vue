<template>
  <v-container d-flex fluid>
    <v-row class="ma-4" align-content="center" justify="center">
      <v-col cols="12" sm="12" md="6">
        <v-text-field
          v-model="searchQuery"
          variant="solo"
          label="Search any product"
          prepend-inner-icon="mdi-magnify"
          rounded="xl"
          @input="GetallProducts"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="12"
        md="3"
        v-for="product in displayedProducts"
        :key="product.id"
      >
        <v-hover v-slot="{ isHovering, props }">
          <router-link
            :to="{
              name: 'SingleProduct',
              params: { id: product.id },
              props: { productObject: product },
            }"
          >
            <v-card
              height="auto"
              width="300"
              :elevation="isHovering ? 12 : 2"
              v-bind="props"
            >
              <v-img :src="product.thumbnail" height="200px" cover></v-img>

              <v-card-title primary-title>
                {{ product.description }}
              </v-card-title>
              <div class="pa-4">
                <v-rating
                  :model-value="product.rating"
                  dense
                  color="orange"
                  background-color="orange"
                  class="me-2"
                  half-increments
                  size="xsmall"
                ></v-rating>

                <h3>Rs {{ product.price }}</h3>
                <h4>Available Stock {{ product.stock }}</h4>
              </div>

              <v-divider></v-divider>
              <v-card-actions class="a-5">
                <v-btn
                  class="bg-red text-white"
                  rounded="xl"
                  size="small"
                  prepend-icon="mdi-cart"
                >
                  +
                </v-btn>
                <v-btn class="bg-success text-white" rounded="xl" size="small">
                  Details
                </v-btn>
              </v-card-actions>
            </v-card>
          </router-link>
        </v-hover>
      </v-col>
    </v-row>
    <v-row class="ma-4" align-content="center" justify="center">
      <v-col cols="12" sm="12" md="6">
        <v-pagination
          rounded="circle"
          v-model="currentPage"
          :length="totalPages"
        ></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      Products: [],
      currentPage: 1,
      itemsPerPage: 8,
      searchQuery: "",
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.Products.length / this.itemsPerPage);
    },
    displayedProducts() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.Products.slice(startIndex, endIndex);
    },
  },
  methods: {
    GetallProducts() {
      this.$store
        .dispatch("fetchAllProduct")
        .then(() => {
          this.Products = this.$store.state.Allproducts;
          // console.info(this.Products);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },

  mounted() {
    this.GetallProducts();
  },
};
</script>
<style>
a {
  text-decoration: none;
}
</style>
