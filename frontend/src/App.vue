<template>
  <div>
    <CreateShortLink @shortlink-created="addShortlink" />
    <ShortLinkList :shortlinks="shortlinks" />
  </div>
</template>

<script>
import ShortLinkList from "./components/ShortLinkList.vue";
import CreateShortLink from "./components/CreateShortLink.vue";

export default {
  components: {
    ShortLinkList,
    CreateShortLink,
  },
  data() {
    return {
      shortlinks: [], // Pastikan shortlinks diinisialisasi
    };
  },
  methods: {
    addShortlink(newShortlink) {
      this.shortlinks.push(newShortlink); // Tambahkan shortlink baru ke dalam array shortlinks
    },
    async fetchShortlinks() {
      try {
        const response = await fetch("http://localhost:5001/api/shortlinks");
        const data = await response.json();
        this.shortlinks = data; // Ambil data shortlink dari backend
      } catch (error) {
        console.error("Error fetching shortlinks:", error);
      }
    },
  },
  created() {
    this.fetchShortlinks(); // Ambil shortlinks saat komponen dibuat
  },
};
</script>
