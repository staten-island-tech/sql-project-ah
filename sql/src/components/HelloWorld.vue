<script>
export default {
  data() {
    return {
      name: "wow",
      text: null,
    };
  },
  methods: {
    getdata() {
      console.log();
    },
  },
};
</script>

<template>
  <div>
    <input
      type="text"
      placeholder="enter text"
      @keydown.enter="getdata()"
      v-model="text"
    />
    <p>{{ text }}</p>
  </div>
</template>

<style scoped></style>
