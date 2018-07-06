import Vue from 'vue'
import Icon from './icon'
import Button from './button'
import ButtonGroup from './button-group'
import Input from './input'

Vue.component('my-icon', Icon)
Vue.component('my-button', Button)
Vue.component('my-button-group', ButtonGroup)
Vue.component('my-input', Input)

new Vue({
    el: '#app', 
    data: {
        loadingSwich: false,
    }
})

// 單元測試
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect
// 斷言 button icon 為 setting 時 <use xlink:href> 為 #i-setting
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'setting'
      }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-setting')
    vm.$el.remove()
    vm.$destroy()
}
// 斷言 button loading 為 true 時，<use xlink:href> 為 #i-loading
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
        icon: 'setting',
        loading: true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
    vm.$el.remove()
    vm.$destroy()
}
// 斷言 button icon 預設 order 為 1 (在左側)
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
        icon: 'setting'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
}
// 斷言 button iconPosition 為 right 時， order 為 2 (在右側) 
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
        icon: 'setting',
        iconPosition: 'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
}
// 斷言 button 點擊時有調用 spy 監聽函數(mock)
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
        icon: 'setting',
        }
    })
    vm.$mount()
    let spy = chai.spy(function(){})
    vm.$on('click', spy )
    // 希望這個函數被執行 -->  mock
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
}