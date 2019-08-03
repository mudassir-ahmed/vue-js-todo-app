<template>
  <div id="app">
    <TodoApp />
  </div>
</template>

<script>
import TodoApp from "./components/TodoApp.vue";

export default {
  name: "app",
  components: {
    TodoApp
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Lato:400,700&display=swap");

* {
  box-sizing: border-box;
}

#app {
  font-family: "Lato", sans-serif;
}
</style>
