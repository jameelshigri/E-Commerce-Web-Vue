<template>
  <v-container d-flex fluid>
    <v-row class="row-login">
      <v-col lg="6" md="6" sm="12" class="bg-light-blue-accent-2 colum2">
        <v-card class="pa-5" width="90%">
          <v-card-title class="pa-5 mb-5 rounded text-center">
            Login
          </v-card-title>
          <v-form fast-fail @submit.prevent="singnin()" class="text-center">
            <v-text-field
              v-model="username"
              label="Email"
              :rules="[rules.required]"
              prepend-icon="mdi-account"
              hint="Enter valid username kminchelle"
              variant="solo"
              autocomplete
              rounded="xl"
            ></v-text-field>

            <v-text-field
              v-model="password"
              :rules="[rules.required]"
              :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              name="input-10-1"
              prepend-icon="mdi-lock"
              label="Password"
              hint="At least 8 characters 0lelplR"
              variant="solo"
              rounded="xl"
              autocomplete
              @click:append-inner="show = !show"
            ></v-text-field>

            <v-btn type="submit" class="ma-2 bg-success" rounded="xl"
              >Login</v-btn
            >
          </v-form>
        </v-card>
      </v-col>
      <v-col lg="6" md="6" sm="12" class="colum">
        <p class="Heading">Welcome</p>

        <p class="SubText">
          Please Enter your credentials to continue to your dashboard
        </p>
        <img
          :src="require(`@/assets/login.png`)"
          style="height: 300px; width: 300px;"
          alt=""
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    username: "",
    password: "",

    show: false,
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
    },
  }),
  methods: {
    async singnin() {
      let res = await axios.post("https://dummyjson.com/auth/login", {
        username: this.username,
        password: this.password,
      });
      if (res.status === 200) {
        (this.username = ""), (this.password = "");
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        this.$router.push({ name: "dash" });
      } else {
        alert("User Not found");
        this.$router.push("/login");
      }
    },
  },
};
</script>
<style scoped>
.colum {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.colum2 {
  height: 100vh;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  border-radius: 0px 40px 40px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.Heading {
  font-size: 79px;
  color: skyblue;
  text-align: start;
}
.SubText {
  font-size: 20px;
  font-style: italic;
  color: skyblue;
}
</style>
