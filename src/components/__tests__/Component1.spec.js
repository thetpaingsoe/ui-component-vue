import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Component1 from '../Component1.vue'

describe('Testing Home View', () => {
  it('testing render properly', () => {
    const wrapper = mount(Component1, {
      props: {
        name: 'Stripe!',
      },
    })

    expect(wrapper.text()).toContain('Hello, Stripe!')
  })
})
