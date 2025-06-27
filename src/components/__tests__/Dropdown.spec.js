import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Dropdown from '../Dropdown.vue'

describe('Testing Dropdown.', () => {
  it('Testing Render Properly', () => {
    const wrapper = mount(Dropdown, {
      props: {
        options: ['BMW', 'Audi'],
        selectedVal: 'BMW',
      },
    })
    console.log(wrapper.element.outerHTML)
    expect(wrapper.text()).toContain('BMW')
    expect(wrapper.text()).toContain('Audi')
  })

  it('Testing Render with Selected Value', () => {
    const wrapper = mount(Dropdown, {
      props: {
        id: 'cars',
        options: ['BMW', 'Audi'],
        selectedVal: 'BMW',
      },
    })

    const selected = wrapper.find('select')
    expect(selected.element.value).toBe('BMW')
  })

  it('Testing change event', async () => {
    const wrapper = mount(Dropdown, {
      props: {
        id: 'cars',
        options: ['BMW', 'Audi'],
        selectedVal: 'BMW',
      },
    })
    const selected = wrapper.find('select')
    expect(selected.element.value).toBe('BMW')

    await selected.setValue('Audi')
    await wrapper.vm.$nextTick()

    expect(selected.element.value).toBe('Audi')

    expect(wrapper.emitted()).toHaveProperty('update:selected-option')
  })
})
