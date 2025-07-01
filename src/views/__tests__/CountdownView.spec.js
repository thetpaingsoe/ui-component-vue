import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CountdownView from '../CountdownView.vue'

describe('Testing Countdown View', () => {
  it('testing render it properly', () => {
    const wrapper = mount(CountdownView, {})

    expect(wrapper.text()).toContain('Enter your countdown value.')
  })

  it('testing countdown', async () => {
    const wrapper = mount(CountdownView, {})

    const input = wrapper.find('input')
    await input.setValue(5)

    const button = wrapper.find('button')
    await button.trigger('click')

    const counter = wrapper.find('#counter')
    const delay = (millis) =>
      new Promise((resolve, reject) => {
        setTimeout((_) => resolve(), millis)
      })

    expect(counter.text()).toBe('5')

    await delay(1000)
    wrapper.vm.$nextTick()

    expect(counter.text()).toBe('4')
  })
})
