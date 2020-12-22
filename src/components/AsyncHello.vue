<template>
  <h1>Async Component. Come late.</h1>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script>
export default {
  name: "AsyncHello",
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.$emit("my", "ab");
    }, 3000);
  },
};
</script>
