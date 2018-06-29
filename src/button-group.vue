<template>
    <div class="my-btn-group">
        <slot></slot>
    </div>
</template>

<script>
module.exports = {
    mounted() {
        for(let node of this.$el.children){
            let name = node.nodeName.toLowerCase()
            if(name !== 'button'){
                console.warn(`<my-button-group>的子元素必須使用<my-button></my-button>，你使用的是 ${name}`)
            }
        }
    },
}
</script>

<style>
.my-btn-group{
    display: inline-flex;
    vertical-align: middle;
}
.my-btn-group > .my-btn{ border-radius: 0; }
.my-btn-group > .my-btn:not(:first-child){ margin-left: -1px; }
.my-btn-group > .my-btn:hover{ position: relative; z-index: 1; }
.my-btn-group > .my-btn:first-child{
    border-top-left-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);
}
.my-btn-group > .my-btn:last-child{
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
}
</style>