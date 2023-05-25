<template>
  <v-container d-flex fluid>
    <v-row class="align-center justify-center">
      <v-col cols="12" sm="12" md="8">
        <v-card elevation="6" class="pa-4">
          <v-form fast-fail @submit.prevent="AddProduct" class="text-center">
            <v-text-field
              v-model="NewProduct.title"
              label="Product title"
              hint="Enter Product Title"
              variant="solo"
            ></v-text-field>
            <v-text-field
              v-model="NewProduct.brand"
              label="Product Brand"
              hint="Enter Product Brand"
              variant="solo"
            ></v-text-field>
            <v-text-field
              v-model="NewProduct.description"
              label="Description"
              hint="Product Description"
              variant="solo"
            ></v-text-field>
            <v-text-field
              v-model.number="NewProduct.stock"
              label="Stock"
              hint="Stock Available"
              type="number"
              variant="solo"
            ></v-text-field>
            <v-select
              chips
              label="Category"
              :items="Categories"
              variant="solo"
              v-model="NewProduct.cat"
            ></v-select>
            <!-- <v-file-input
              show-size
              counter
              multiple
              label="File input"
              variant="solo"
            ></v-file-input> -->
            <v-btn color="info" type="submit">Add Product</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      NewProduct: {
        title: "",
        brand: "",
        cat: "",
        stock: "",
        description: "",
      },

      Categories: [],
    };
  },
  methods: {
    AddProduct() {
      this.$store.dispatch("AddProduct", this.NewProduct);
      // alert(this.NewProduct);
    },
  },
  mounted() {
    this.$store.dispatch("fetchProductCategories");
    this.Categories = this.$store.state.Categories;
    console.info(this.Categories);
  },
};
</script>
<style></style>
