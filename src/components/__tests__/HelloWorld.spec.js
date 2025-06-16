import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest', description : "Description" } })
    console.log("This is text");
    console.log(wrapper.text());
    expect(wrapper.text()).toContain('Hello Vitest');
    expect(wrapper.text()).toContain("Description");
  })
})
