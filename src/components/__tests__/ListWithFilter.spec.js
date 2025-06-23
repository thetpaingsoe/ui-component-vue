import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ListWithFilter from '../ListWithFilter.vue'

describe('ListWithFilter', () => {
  it('renders properly', () => {
    const wrapper = mount(ListWithFilter, {
      props: { transactions: [] },
    })

    expect(wrapper.text()).toContain('Filter')
    expect(wrapper.text()).toContain('TotalAmount :  0')
  })

  it('showing list correctly', () => {
    const transactions = [
      { id: 't_01', merchant: 'RocketRides', amount: 100 },
      { id: 't_02', merchant: 'CookieShoppe', amount: 120 },
      { id: 't_03', merchant: 'CookieShoppe', amount: -7 },
    ]
    const wrapper = mount(ListWithFilter, {
      props: { transactions: transactions },
    })

    expect(wrapper.text()).toContain('RocketRides')
    expect(wrapper.text()).toContain('CookieShoppe')
    expect(wrapper.text()).toContain('CookieShoppe')
    expect(wrapper.text()).toContain('TotalAmount :  213')
  })

  it('filter with RocketRides', async () => {
    const transactions = [
      { id: 't_01', merchant: 'RocketRides', amount: 100 },
      { id: 't_02', merchant: 'CookieShoppe', amount: 120 },
      { id: 't_03', merchant: 'CookieShoppe', amount: -7 },
    ]
    const wrapper = mount(ListWithFilter, {
      props: { transactions: transactions },
    })

    await wrapper.find('#filter').setValue('RocketRides')

    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('RocketRides')
    expect(wrapper.text()).not.toContain('CookieShoppe')
    expect(wrapper.text()).toContain('TotalAmount :  100')
  })

  it('filter with CookieShoppe', async () => {
    const transactions = [
      { id: 't_01', merchant: 'RocketRides', amount: 100 },
      { id: 't_02', merchant: 'CookieShoppe', amount: 120 },
      { id: 't_03', merchant: 'CookieShoppe', amount: -7 },
    ]
    const wrapper = mount(ListWithFilter, {
      props: { transactions: transactions },
    })

    await wrapper.find('#filter').setValue('CookieShoppe')

    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('CookieShoppe')
    expect(wrapper.text()).not.toContain('RocketRides')
    expect(wrapper.text()).toContain('TotalAmount :  113')
  })

  it('filter with invalid keyword', async () => {
    const transactions = [
      { id: 't_01', merchant: 'RocketRides', amount: 100 },
      { id: 't_02', merchant: 'CookieShoppe', amount: 120 },
      { id: 't_03', merchant: 'CookieShoppe', amount: -7 },
    ]
    const wrapper = mount(ListWithFilter, {
      props: { transactions: transactions },
    })

    await wrapper.find('#filter').setValue('ABC')

    await wrapper.vm.$nextTick()

    expect(wrapper.text()).not.toContain('CookieShoppe')
    expect(wrapper.text()).not.toContain('RocketRides')
    expect(wrapper.text()).toContain('TotalAmount :  0')
  })

  it('filter with empty transactions', async () => {
    const transactions = []
    const wrapper = mount(ListWithFilter, {
      props: { transactions: transactions },
    })

    expect(wrapper.text()).toContain('TotalAmount :  0')
  })

  it('filter with invalid transactions', async () => {
    const transactions = ['id']
    const wrapper = mount(ListWithFilter, {
      props: { transactions: transactions },
    })

    expect(wrapper.text()).toContain('TotalAmount :  0')
  })
})
