<template>
  <div class="container mt-4">
    <!-- Menambahkan margin atas pada container -->
    <h1>FE SHORT</h1>
    <form class="my-4 form-inline" @submit.prevent="createShortlink">
      <div class="d-flex">
        <input
          v-model="longUrl"
          type="url"
          placeholder="Masukkan URL"
          class="form-control input-margin w-80"
          required
        />
        <button class="btn btn-success" type="submit">Singkatkan</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      longUrl: "",
    };
  },
  methods: {
    async createShortlink() {
      try {
        const response = await fetch("http://localhost:5001/api/shortlinks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ longUrl: this.longUrl }),
        });

        if (!response.ok) {
          throw new Error("Failed to create shortlink");
        }

        const data = await response.json();
        console.log("Shortlink created:", data);
        this.$emit("shortlink-created", data); // Emit event untuk memberi tahu bahwa shortlink baru telah dibuat
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
};
</script>
