<template>
  <h1>Async Component. Come late.</h1>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <Other />
</template>

<script>
import Other from "./Other.vue";

export default {
  name: "AsyncHello",
  components: {
    Other,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>
