import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Sobre from './pages/Sobre.vue'
import Contabilidade from './pages/Contabilidade.vue'
import FolhaPagamento from './pages/FolhaPagamento.vue'
import Fiscal from './pages/Fiscal.vue'
import Paralegal from './pages/Paralegal.vue'
import NotaFiscal from './pages/NotaFiscal.vue'
import Atendimento from './pages/Atendimento.vue'
import CertificadoraDigital from './pages/CertificadoraDigital.vue'
import Contato from './pages/Contato.vue'
import ServicosAdicionais from './pages/ServicosAdicionais.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/sobre', component: Sobre },
  { path: '/contabilidade', component: Contabilidade },
  { path: '/folha-pagamento', component: FolhaPagamento },
  { path: '/fiscal', component: Fiscal },
  { path: '/paralegal', component: Paralegal },
  { path: '/nota-fiscal', component: NotaFiscal },
  { path: '/atendimento', component: Atendimento },
  { path: '/certificadora-digital', component: CertificadoraDigital },
  { path: '/contato', component: Contato },
  { path: '/servicos-adicionais', component: ServicosAdicionais },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
