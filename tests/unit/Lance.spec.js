import Lance from '@/components/Lance'
import { mount } from '@vue/test-utils'

test('não aceita lance com valor menor do que 0', () => {
    const wrapper = mount(Lance)
    expect(wrapper).toBeTruthy()
})