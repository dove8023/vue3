<template>
  <h1 v-bind="$attrs">{{ msg }}</h1>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script>
export default {
  name: "HelloWorld",
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
