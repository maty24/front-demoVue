<template>
  <div>
    <div class="container">
      <form action="" class="form-horizontal">
        <div class="form-group left">
          <label for="" class="control-label col-sm-2">Nombre</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="nombre"
              id="nombre"
              v-model="form.nombre"
            />
          </div>
        </div>
        <div class="form-group left row">
          <div class="col">
            <label for="" class="control-label col-sm-3">Correo</label>
            <div class="col-sm-7">
              <input
                type="text"
                class="form-control"
                name="correo"
                id="correo"
                v-model="form.correo"
              />
            </div>
          </div>
        </div>
        <div class="form-group left row">
          <div class="col">
            <label for="" class="control-label col-sm-2">Apellido</label>
            <div class="col-sm-7">
              <input
                type="text"
                class="form-control"
                name="telefono"
                id="telefono"
                v-model="form.apellido"
              />
            </div>
          </div>
        </div>
        <div class="form-group">
          <button type="button" class="btn btn-primary" v-on:click="guardar()">
            Guardar
          </button>
        </div>
      </form>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      form: {
        nombre: "",
        apellido: "",
        correo: "",
      },
    };
  },
  methods: {
    guardar() {
      console.log(this.form);
      axios
        .post("http://localhost:3000/api/producto", this.form)
        .then((data) => {
          console.log(data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped>
.left {
  text-align: left;
}
</style>
