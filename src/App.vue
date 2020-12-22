<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld
    @click="sayHai"
    v-bind:class="classNames"
    id="one"
    @my="sonCallMe"
    msg="Hello Vue 3.0 + Vite"
  />
  <hr />
  <button @click="loading">Loading Async Component</button>
  <asyncHello v-if="showAsync" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { defineAsyncComponent } from "vue";

const asyncHello = defineAsyncComponent({
  loader: () => import("./components/AsyncHello.vue"),
  delay: 3000,
  timeout: 2000,
});

export default {
  name: "App",
  components: {
    HelloWorld,
    asyncHello,
  },
  data() {
    return {
      classNames: "border-black",
      showAsync: false,
    };
  },
  methods: {
    sayHai() {
      alert("hello");
    },
    sonCallMe() {
      console.log("hello my son.");
    },
    loading() {
      this.showAsync = !this.showAsync;
    },
  },
};
</script>

<style scoped>
.border-black {
  border: 1px solid black;
}
</style>
