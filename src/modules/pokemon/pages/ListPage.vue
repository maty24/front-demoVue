<template>
  <div v-for="todo in todos" :key="todo.id">
    <h1>{{ todo.nombre }}</h1>
    <p>{{ todo.correo }}</p>
    <p>{{ todo.apellido }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      todos: null,
    };
  },
  mounted() {
    console.log("hola desde mounted");
    this.getTodos();
  },
  methods: {
    getTodos() {
      console.log("codigo get");
      axios
        .get("http://localhost:3000/api/producto")
        .then((r) => {
          console.log(r);
          this.todos = r.data; //para que me guarde los datos de la api, solo los de la data
        })
        .catch((e) => console.log(e));
    },
    guardar() {
      console.log();
    },
  },
};
</script>

<style></style>
