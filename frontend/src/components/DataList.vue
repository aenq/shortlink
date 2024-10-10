<template>
  <div>
    <h1>Data List</h1>
    <ul>
      <li v-for="item in data" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get("http://localhost:3000/api/data") // Ubah URL ini jika backend Anda berjalan di port yang berbeda
        .then((response) => {
          this.data = response.data;
        })
        .catch((error) => {
          console.error("There was an error fetching the data:", error);
        });
    },
  },
};
</script>
