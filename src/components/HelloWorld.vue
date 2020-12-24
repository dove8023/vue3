<template>
  <h1 v-bind="$attrs">{{ msg }}</h1>
  <p>Edit <code>Code</code> to test vue 3.</p>
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
  methods: {},

  mounted() {
    console.log(123, this.$attrs);
  },
};
</script>
