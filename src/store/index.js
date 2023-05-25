import { createStore } from "vuex";
import axios from "axios";
import auth from "./auth";
const store = createStore({
  state: {
    Allproducts: [],
    Categories: [],
  },
  mutations: {
    setAllproducts(state, data) {
      state.Allproducts = data;
    },
    setCategories(state, data) {
      state.Categories = data;
    },
  },
  actions: {
    async fetchAllProduct({ commit }) {
      try {
        const data = await axios.get("products");
        commit("setAllproducts", data.data.products);
      } catch (error) {
        alert("backend offline");
      }
    },
    async fetchProductCategories({ commit }) {
      try {
        const data = await axios.get("products/categories");
        commit("setCategories", data.data);
        // console.info(data);
      } catch {}
    },
    async AddProduct({ commit }, payload) {
      console.info("payload", payload);
      try {
        const data = await axios.post("products/add", { payload });
        // commit("setCategories", data.data);
        console.info(data);
      } catch {}
    },
  },
  modules: {
    auth,
  },
});
export default store;
