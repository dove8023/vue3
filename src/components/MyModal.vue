<template>
  <h2>v-modal test.</h2>
  <input :value="foo" @input="change" type="text" />
</template>

<script>
export default {
  name: "vmodal",
  props: {
    foo: String,
  },
  methods: {
    change(val) {
      this.$emit("update:foo", val);
    },
  },
};
</script>

<style>
</style>