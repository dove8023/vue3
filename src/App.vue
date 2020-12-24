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

  <Suspense v-if="showAsync">
    <template #default>
      <asyncHello />
    </template>
    <template #fallback>
      <h1>Loading...</h1>
    </template>
  </Suspense>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { defineAsyncComponent } from "vue";
import AsyncError from "./components/AsyncError.vue";

const asyncHello = defineAsyncComponent({
  loader: () => import("./components/AsyncHello.vue"),
  delay: 300,
  timeout: 2000,
  errorComponent: AsyncError,
});

// const asyncHello = defineAsyncComponent(() =>
//   import("./components/AsyncHello.vue")
// );

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

<style>
.border-black {
  border: 1px solid black;
}
</style>
