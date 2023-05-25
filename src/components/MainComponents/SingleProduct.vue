<template>
  <v-container d-flex fluid>
    <v-row>
      <v-col cols="12" sm="12" md="6">
        <v-card
          class="d-flex pa-5 flex-column align-center justify-center"
          height="100vh"
        >
          <img
            :src="require(`@/assets/login.png`)"
            alt="Ing"
            height="300"
            width="300"
          />
          <v-slide-group show-arrows>
            <v-slide-group-item v-for="n in 6" :key="n">
              <img width="50" height="50" class="ma-3" alt="" />
            </v-slide-group-item>
          </v-slide-group>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="6">
        <v-card
          class="d-flex pa-5 flex-column align-center justify-center"
          height="100vh"
        >
          <v-card-title>
            Name
          </v-card-title>
          <small>sdfsdf</small>
          <v-rating model-value="3" size="x-small"></v-rating>
          <p>Rs</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            culpa natus tempora recusandae, dolorem nesciunt nemo molestias!
            Neque mollitia ipsum dolor blanditiis laboriosam dicta ex
            exercitationem, voluptate eius, qui porro! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Facere culpa natus tempora
            recusandae, dolorem nesciunt nemo molestias! Neque mollitia ipsum
            dolor blanditiis laboriosam dicta ex exercitationem, voluptate eius,
            qui porro! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Facere culpa natus tempora recusandae, dolorem nesciunt nemo
            molestias! Neque mollitia ipsum dolor blanditiis laboriosam dicta ex
            exercitationem, voluptate eius, qui porro!
          </p>
          <div class="d-flex">
            <v-btn color="success" size="small">-</v-btn>
            <input type="text" style="outline: 1px solid green; width: 70px;" />
            <v-btn color="success" class="" size="small">+</v-btn>
          </div>
          <v-btn color="info ma-2 px-15">Add to cart</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      product: [],
      productId: 0,
      SingleProduct: [],
      foundProduct: [],
    };
  },
  mounted() {
    this.productId = this.$route.params.id;
    this.$store.dispatch("fetchAllProduct");
    this.product = this.$store.state.Allproducts;
    const result = this.findSingleProduct();
  },
  methods: {
    findSingleProduct() {
      console.info("called");
      console.info("allproducts", this.$store.state.Allproducts);
      return this.$store.state.Allproducts.find(id === this.productId);
    },
  },
};
</script>
<style></style>
