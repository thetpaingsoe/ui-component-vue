import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Link from '../Link.vue'

describe('Link Test', () => {
  it('render properly', () => {
    const wrapper = mount(Link, {
      slots: {
        default: 'Read Me',
      },
    })

    expect(wrapper.text()).toContain('Read Me')
  })

  it('render with correct href attirbute', () => {
    const url = 'https://www.google.com'
    const wrapper = mount(Link, {
      slots: {
        default: 'Google',
      },
      props: {
        url: url,
      },
    })

    const anchar = wrapper.find('a')
    expect(anchar.attributes('href')).toBe(url)
  })

  it('render with correct target', async () => {
    const target = '_blank'
    const wrapper = mount(Link, {})

    const anchar = wrapper.find('a')
    expect(anchar.attributes('target')).toBe(target)
  })

  it('render click', async () => {
    const url = 'https://www.google.com'
    const wrapper = mount(Link, {
      props: {
        url: url,
      },
      slots: {
        default: 'Google',
      },
    })

    await wrapper.find('a').trigger('click')
    console.log(wrapper.emitted())
    expect(wrapper.emitted()).toHaveProperty('click')
  })
})
