import Vue from 'vue'
import Icon from './icon'
import Button from './button'

Vue.component('my-icon', Icon)
Vue.component('my-button', Button)

new Vue({
    el: '#app', 
})