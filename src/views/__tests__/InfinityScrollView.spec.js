import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import InfinityScrollView from '../InfinityScrollView.vue'

describe('Testing Infinity Scroll View', () => {
  it('testing render it properly', () => {
    const wrapper = mount(InfinityScrollView, {})

    expect(wrapper.text()).toContain('Testing 1')
    expect(wrapper.text()).toContain('Testing 100')
  })

  it('testing scroll and load more', async () => {
    const wrapper = mount(InfinityScrollView, {})

    const container = wrapper.find('#container')
    // Set scrollTop to simulate scrolling to the bottom
    container.element.scrollTop = container.element.scrollHeight
    await container.trigger('scroll')
    expect(wrapper.text()).toContain('Testing 1')
    expect(wrapper.text()).toContain('Testing 100')
    expect(wrapper.text()).toContain('Testing 200')
  })
})
