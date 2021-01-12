import NovoLeilao from '@/views/NovoLeilao'
import { mount } from '@vue/test-utils'

import { createLeilao } from '@/http'
jest.mock('@/http')

const $router = {
  push: jest.fn()
}

describe('NovoLeilao', () => {
  test('cria um novo leilão', async () => {
    createLeilao.mockResolvedValueOnce()
    const wrapper = mount(NovoLeilao, {
      mocks: {
        $router
      }
    })
    wrapper.find('.produto').setValue('Livro da Casa do Código')
    wrapper.find('.descricao').setValue('Um livro magnífico sobre VueJS')
    wrapper.find('.valor').setValue(50)
    wrapper.find('form').trigger('submit')
    expect(createLeilao).toHaveBeenCalled()
  })
})
