import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Checkout from '../Checkout.vue'

describe('Testing Checkout Component', () => {
  it('Testing Render Properly', () => {
    const wrapper = mount(Checkout, {})

    expect(wrapper.text()).toContain('Card number')
    expect(wrapper.text()).toContain('Expiry Date')
    expect(wrapper.text()).toContain('Security Code')
  })

  it('Testing Card Number Format', async () => {
    const wrapper = mount(Checkout, {})

    const cardNumber = wrapper.find('#card-no')
    await cardNumber.setValue('1234123412341234')
    await wrapper.vm.$nextTick()
    expect(cardNumber.element.value).toBe('1234 1234 1234 1234')
  })
})
