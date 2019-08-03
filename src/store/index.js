import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "Todo App",
    todos: [
      "Perform site migration for unknown client",
      "Try docker inception - how many times can you use docker in docker (dind)",
      "Repair overcooked Raspberry PI"
    ]
  },
  getters: {
    countTodos: state => {
      return state.todos.length;
    }
  },
  mutations: {
    ADD_TODO: (state, theTodo) => {
      state.todos.unshift(theTodo);
    },
    REMOVE_TODO: (state, todoAtIndex) => {
      state.todos.splice(todoAtIndex, 1);
    }
  },
  actions: {
    removeTodo: (context, todoAtIndex) => {
      context.commit("REMOVE_TODO", todoAtIndex);
    }
  }
});
