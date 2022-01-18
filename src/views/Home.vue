<template>

<div>
  <v-layout :wrap="true">
  <v-flex xs12>
    <v-card>
      <v-row justify="center">
    <v-date-picker full-width
       v-model="fecha"
      year-icon="mdi-calendar-blank"
      prev-icon="mdi-skip-previous"
      next-icon="mdi-skip-next"
      :min= 'minimo'
      :max= "maximo"
      locale="es-co"
      @change="getDolar(fecha)"

    ></v-date-picker>
  </v-row>
    </v-card>

<v-card color="error" dark>
  <v-card-text class="display-1 text-center"> valor del dolar {{valor}}</v-card-text>
</v-card>
     </v-flex>
 
</v-layout>
</div>

</template>
<script>
import {mapActions, mapState, mapMutations} from 'vuex'


 export default {
    name: 'home',
    data(){
        return {
          fecha:new Date().toISOString().substr(0, 10),
          minimo:'1984',
          maximo:new Date().toISOString().substr(0, 10),
        }
    },

    created() {
        this.getDolar(this.fecha)
    },
    methods: {
        ...mapActions(['getDolar']),
        // ...mapMutations(['mostrarLoading', 'oculatarLoading'])
     

    },
    computed:{
        ...mapState(['datos','valor']),
        },
        components:{
        }
       
}
      
    
  
</script>
