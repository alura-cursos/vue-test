import Lance from '@/components/Lance'
import { mount } from '@vue/test-utils'
describe('Um Lance sem valor mínimo', () => {
  test('não aceita lance com valor menor do que 0', () => {
    const wrapper = mount(Lance)
    const input = wrapper.find('input')
    input.setValue(-100)
    wrapper.trigger('submit')
    const lancesEmitidos = wrapper.emitted('novo-lance')
    expect(lancesEmitidos).toBeUndefined()
  })
  test('emite um lance quando o valor é maior do que 0', () => {
    const wrapper = mount(Lance)
    const input = wrapper.find('input')
    input.setValue(100)
    wrapper.trigger('submit')
    const lancesEmitidos = wrapper.emitted('novo-lance')
    expect(lancesEmitidos).toHaveLength(1)
  })
  test('emite o valor esperado de um lance válido', () => {
    const wrapper = mount(Lance)
    const input = wrapper.find('input')
    input.setValue(100)
    wrapper.trigger('submit')
    const lancesEmitidos = wrapper.emitted('novo-lance')
    // [
    //     [ 100 ]
    // ]
    const lance = parseInt(lancesEmitidos[0][0])
    expect(lance).toBe(100)
  })
})

describe('Um Lance com valor mínimo', () => {
  test('todos os lances devem possuir um valor maior do que o do mínimo informado', async () => {
    const wrapper = mount(Lance, {
      propsData: {
        lanceMinimo: 300
      }
    })
    const input = wrapper.find('input')
    input.setValue(400)
    wrapper.trigger('submit')
    await wrapper.vm.$nextTick()
    const lancesEmitidos = wrapper.emitted('novo-lance')
    expect(lancesEmitidos).toHaveLength(1)
  })
  test('emite o valor esperado de um lance válido', () => {
    const wrapper = mount(Lance)
    const input = wrapper.find('input')
    input.setValue(400)
    wrapper.trigger('submit')
    const lancesEmitidos = wrapper.emitted('novo-lance')
    // [[400]]
    const lance = parseInt(lancesEmitidos[0][0])
    expect(lance).toBe(400)
  })
  test('não são aceitos lances menores do que o valor mínimo', async () => {
    const wrapper = mount(Lance, {
      propsData: {
        lanceMinimo: 300
      }
    })
    const input = wrapper.find('input')
    input.setValue(100)
    wrapper.trigger('submit')
    await wrapper.vm.$nextTick()
    const lancesEmitidos = wrapper.emitted('novo-lance')
    expect(lancesEmitidos).toBeUndefined()
    const msgErro = wrapper.find('p.alert').element.textContent
    expect(msgErro).toContain('O valor mínimo para o lance é de R$ 300')
  })
})
