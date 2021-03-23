/* global Vue, axios */
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Welcome to the product page",
      products: [],
      newName: "",
      newDescription: "",
      newPrice: 0,
      newImage_url: ""
    };
  },
  methods: {
    showAllProducts: function () {
      axios.get("http://localhost:3000/api/products").then((response) => {
        this.products = response.data;
        console.log(response);
      });
    },
    createNewProduct: function () {

      console.log(this.newName);
      this.products.push(this.newName);
    }

  },
});