import Vue from 'vue'
import VueRouter from 'vue-router'
import Leiloeiro from '../views/Leiloeiro.vue'
import Avaliador from '../views/Avaliador.vue'
import NovoLeilao from '../views/NovoLeilao.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/leiloar/:id',
    name: 'Leiloeiro',
    component: Leiloeiro,
    props: true
  },
  {
    path: '/leilao',
    name: 'NovoLeilao',
    component: NovoLeilao
  },
  {
    path: '*',
    name: 'Avaliador',
    component: Avaliador
  }
]

const router = new VueRouter({
  routes
})

export default router
