import Vue from 'vue'
import App  from './App'

new Vue({
    render: h => h(App) // Renderiza, a partir da callback h, o componente App na pagina
}).$mount('#app')