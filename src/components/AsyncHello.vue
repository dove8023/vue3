<template>
  <h1>Async Component. Come late.</h1>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>

  <!-- {{ user.name }} -->
  <Other />
</template>

<script>
import Other from "./Other.vue";
import { sleep } from "../utils";

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
      user: null,
    };
  },
  async setup() {
    await sleep(5000);
    console.log("sleep over.");
  },
  mounted() {},
};
</script>
