<template>
  <v-container d-flex fluid style="height: auto; padding: 0;">
    <v-row>
      <v-col
        cols="12"
        sm="12"
        md="12"
        lg="12"
        align-center
        justify-center
        style="padding: 0px;"
      >
        <Header />
      </v-col>
    </v-row>
  </v-container>
  <LandingPage />
  <Footer />
</template>
<script>
import { onBeforeUnmount } from "vue";
import LandingPage from "../MainComponents/LandingPage.vue";
import Header from "../MainComponents/Header.vue";
import Footer from "../MainComponents/Footer.vue";

export default {
  components: {
    Header,
    LandingPage,
    Footer,
  },
  mounted() {
    localStorage.setItem("name", "jameel");
  },

  unmounted() {
    alert("aaaa");
  },
};
</script>
<style lang=""></style>
