import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../Button.vue'

describe('Button', () => {
  it('renders slot content correctly', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Submit',
      },
    })
    expect(wrapper.text()).toContain('Submit')
  })

  it('emits buttonPressed event on click', async () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Submit',
      },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('buttonPressed')
  })
})
