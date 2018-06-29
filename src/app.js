import Vue from 'vue'
import Icon from './icon'
import Button from './button'
import ButtonGroup from './button-group'

Vue.component('my-icon', Icon)
Vue.component('my-button', Button)
Vue.component('my-button-group', ButtonGroup)

new Vue({
    el: '#app', 
    data: {
        loadingSwich: false,
    }
})