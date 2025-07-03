import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeView from '../HomeView.vue'

describe('Testing Home View', () => {
  it('testing render properly', () => {
    const wrapper = mount(HomeView, {})

    expect(wrapper.text()).toContain('Hello')
  })
})
