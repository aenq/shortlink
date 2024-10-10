<template>
  <div class="container">
    <table class="table table-striped table-responsive">
      <thead>
        <tr>
          <th>Full URL</th>
          <th>Short URL</th>
          <th>Clicks</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="shortlink in shortlinks" :key="shortlink.id">
          <td>
            <a :href="shortlink.longUrl">{{ shortlink.longUrl }}</a>
          </td>
          <td>
            <a :href="shortlink.shortUrl">{{ shortlink.shortUrl }}</a>
          </td>
          <td>{{ shortlink.clicks }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    shortlinks: {
      type: Array,
      required: true,
    },
  },
};
</script>
