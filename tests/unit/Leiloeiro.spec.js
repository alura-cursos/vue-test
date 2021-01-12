import Leiloeiro from '@/views/Leiloeiro'
import { mount } from '@vue/test-utils'

import { getLeilao, getLances } from '@/http'

jest.mock('@/http')

const leilao = {
    produto: 'Livro da Casa do Código',
    lanceInicial: 50,
    descricao: 'Livro sobre VueJS'
}

describe('Leiloeiro inicia um leilão que ainda não possui lances', () => {
    test('avisa quando não existem lances', async () => {
      getLeilao.mockResolvedValueOnce(leilao)
      getLances.mockResolvedValueOnce([{
        id: 1,
        valor: 100,
        data: '2020-12-01',
        leilao_id: 1
      }])
      const wrapper = mount(Leiloeiro, {
        propsData: {
          id: 1
        }
      })
      const alerta = wrapper.find('.alert-dark')
      expect(alerta.exists()).toBe(true)
    })
})