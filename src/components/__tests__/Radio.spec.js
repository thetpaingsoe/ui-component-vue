import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Radio from '../Radio.vue'
import { ref } from 'vue'

describe('Radio Testing.', () => {
  it('testing render properly', () => {
    const modelValue = 'One'
    const wrapper = mount(Radio, {
      props: {
        modelValue: modelValue,
        value: 'One',
        name: 'selection',
      },
    })
    const radio = wrapper.find('input')
    expect(radio.element.checked).toBe(true)
    expect(wrapper.text()).toContain('One')
  })

  it('testing render with uncheck', () => {
    const wrapper = mount(Radio, {
      props: {
        modelValue: 'Two',
        value: 'One',
        name: 'Selectoin',
      },
    })

    const radio = wrapper.find('input')
    expect(radio.attributes('checked')).toBeUndefined()
  })

  it('testing render with uncheck', async () => {
    const wrapper = mount(Radio, {
      props: {
        modelValue: 'Two',
        value: 'One',
        name: 'Selectoin',
      },
    })

    const radio = wrapper.find('input')
    console.log(radio.element.outerHTML)
    expect(radio.element.checked).toBe(false)

    await radio.trigger('click')
    await wrapper.vm.$nextTick()

    expect(radio.element.checked).toBe(true)
  })

  it('testing span click', async () => {
    const wrapper = mount(Radio, {
      props: {
        modelValue: 'Two',
        value: 'One',
        name: 'Selectoin',
      },
    })

    const radio = wrapper.find('input')
    console.log(radio.element.outerHTML)
    expect(radio.element.checked).toBe(false)

    const title = wrapper.find('span')
    await title.trigger('click')
    await wrapper.vm.$nextTick()

    expect(radio.element.checked).toBe(true)
  })

  it('testing emit update:modelValue', async () => {
    var modelValue = ref('')
    const wrapper = mount(Radio, {
      props: {
        modelValue: '',
        value: 'One',
        name: 'Selection',
      },
    })

    const input = wrapper.find('input')

    await input.trigger('change')

    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
  })
})
