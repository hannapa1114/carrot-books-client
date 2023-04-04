import { mount } from '@vue/test-utils'
import Test from '@/components/ExampleTest.vue'

describe('test', () => {
  test('is a test page', () => {
    const wrapper = mount(Test)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
