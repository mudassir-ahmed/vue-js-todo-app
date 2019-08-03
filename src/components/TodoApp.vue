<template class="hello-world">
  <div class="app-wrapper">
    <h1 class="app-title">{{ title }}</h1>
    <h2>{{ todoMessage }}</h2>
    <form @submit.prevent="addTheTodo('red')">
      <input class="input" type="text" placeholder="type your todo" name id v-model="theTodo" />
    </form>
    <ul class="todo-list">
      <transition-group name="list">
        <li v-for="(todo, index) in todos" :key="todo" class="list-item">
          <span>{{todo}}</span>
          <span class="delete-btn" @click="removeTodo(index)">
            <font-awesome-icon class="icon" :icon="['fas', 'trash']" />
          </span>
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "TodoApp",
  data() {
    return {
      theTodo: ""
    };
  },
  computed: {
    ...mapState(["title", "todos"]),
    ...mapGetters(["countTodos"]),
    todoMessage() {
      return this.countTodos
        ? `Number of todos left: ${this.countTodos}`
        : "Hooray! No more todos - you've got time to watch some Netflix :)";
    }
  },
  methods: {
    ...mapMutations(["ADD_TODO", "REMOVE_TODO"]),
    addTheTodo() {
      this.ADD_TODO(this.theTodo);
      this.theTodo = ""; // empty the input
    },
    ...mapActions(["removeTodo"])
  },
  actions: {}
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  padding: 5%;

  .app-title {
    font-size: 40px;
  }

  .input {
    width: 100%;
    padding: 20px;
    border: none;
    box-shadow: 1px 1px 80px rgb(219, 219, 219);
    outline: none;
    font-size: 20px;
    margin: 20px 0;
  }

  .todo-list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: inline-flex;
      align-items: center;
      padding: 30px;
      box-shadow: 1px 1px 40px rgb(239, 231, 231);
      margin: 20px;
      width: 100%;
      max-width: 340px;
      color: black;
      background-color: white;
      font-weight: bold;

      @media screen and (max-width: 400px) {
        margin: 20px 0;
      }

      &:hover {
        .delete-btn {
          opacity: 1;
        }
      }

      .delete-btn {
        opacity: 0;
        transition: 0.1s ease-out;
        position: relative;
        background-color: transparent;
        flex: 0 0 40px;
        height: 40px;
        border-radius: 50%;
        will-change: auto;
        display: flex;
        align-items: center;
        justify-content: center;

        .icon {
          color: #ff3b3b;
          transition: inherit;
        }

        &:hover {
          background-color: rgba(0, 0, 0, 0.05);
          .icon {
            transform: rotateZ(30deg);
          }
        }

        &:active {
          background-color: rgba(0, 0, 0, 0.1);
          .icon {
            transform: rotateZ(60deg);
          }
        }
      }

      span {
        display: block;
        flex-grow: 1;
      }
    }
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease-out;
}

.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-50vh);
}
</style>

