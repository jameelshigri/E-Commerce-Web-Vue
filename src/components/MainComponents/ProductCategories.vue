<template>
  <v-container d-flex fluid>
    <v-row>
      <v-col
        cols="12"
        sm="12"
        md="2"
        v-for="(categories, i) in Categories"
        :key="i"
      >
        <v-hover v-slot="{ isHovering, props }">
          <v-sheet
            :rounded="rounded"
            class="mx-auto Custom_sheet bg-light-blue"
            height="100"
            v-bind:="props"
            :model-value="isHovering"
            width="200"
          >
            {{ categories }}
          </v-sheet>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      Categories: [],
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
    };
  },
  methods: {
    GetProductCategories() {
      this.$store
        .dispatch("fetchProductCategories")
        .then(() => {
          this.Categories = this.$store.state.Categories;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
  mounted() {
    this.GetProductCategories();
  },
};
</script>
<style scoped>
.Custom_sheet {
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}
</style>
