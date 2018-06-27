<template>
    <button class="my-btn" :class="{[`icon-${iconPosition}`]:true}">
        <svg v-if="icon" class="icon"><use :xlink:href="`#i-${icon}`"></use></svg>
        <slot class="content"></slot>
    </button>
</template>
<script>
    export default{
        props: {
            icon: {
                type: String,
            },
            iconPosition:{
                type: String,
                default: 'left',
                validator(value){
                   return value === 'left' || value === 'right'
                }
            }
        }
    }
</script>
<style lang="scss">
    .my-btn {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        cursor: pointer;
        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
        & .icon{ width: 1em;height: 1em; }

        > .content { order: 2; }
        > .icon { order: 1;margin-right: .3em; }

        &.icon-right{
            > .content { order: 1; }
            > .icon { order: 2;margin-right: 0;margin-left: .3em;  }
        }
    } 
</style>
