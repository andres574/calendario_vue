import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        datos: [],
        valor: null,
        loading: {
            titulo: '',
            estado: false,
            color: 'primary'
        }

    },
    mutations: {
        setDatos(state, payload) {
            state.datos = payload
            state.loading.color = payload.color
            state.valor = payload.valor
        },
        mostrarLoading(state, payload) {
            state.loading.titulo = payload.titulo
            state.loading.estado = true
        },
        oculatarLoading(state) {
            // state.loading.titulo = payload.titulo
            state.loading.estado = false
        }

    },
    actions: {
        async getDolar({ commit }, fecha) {

            try {
                commit('mostrarLoading', { titulo: 'Accediendo a informacion', color: 'primary' })

                let fecha1 = await fecha.split(['-'])
                let ddmmyy = await fecha1[2] + '-' + fecha1[1] + '-' + fecha1[0]
                let datos
                console.log(ddmmyy)

                await axios.get(`https://mindicador.cl/api/dolar/${ddmmyy}`).then(rres => {
                        // state.datos = (rres.data.serie)
                        datos = rres.data
                    })
                    // console.log(datos)
                if (datos.serie.length > 0) {
                    datos = datos.serie[0]
                    commit('setDatos', datos)
                } else {
                    console.log('errro')
                }


            } catch (error) {
                // console.log('im', error)
            } finally {
                commit('oculatarLoading')
            }
        }

    },
    modules: {}
})