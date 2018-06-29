<template>
    <button class="my-btn" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
        <my-icon v-if="icon && !loading" :name="icon" class="icon"></my-icon>
        <my-icon v-if="loading" name="loading" animation="spin" class="icon"></my-icon>
        <div class="content"><slot></slot></div>
    </button>
</template>
<script>
   export default {
        props: {
                icon: {
                    type: String,
                },
                loading: {
                    type: Boolean,
                    default: false,
                },
                iconPosition:{
                    type: String,
                    default: 'left',
                    validator(value){
                        if(value !== 'left' && value !== 'right' ){
                            return false
                        } else {
                            return true
                        }
                    }
                }
        }
    }
</script>
<style lang="scss">
    .my-btn {
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1.6em;
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
        & .icon{ margin-right: .3em;width: 1.3em;height: 1.3em; }

        > .content { order: 2;display: inline-block; }
        > .icon { order: 1; }

        &.icon-right{
            > .content { order: 1;}
            > .icon { order: 2;margin-right: 0;margin-left: .3em;  }
        }
    } 
</style>
