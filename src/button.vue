<template>
    <button class="my-btn" :class="{[`icon-${iconPosition}`]:true}">
        <my-icon v-if="icon" :name="icon" class="icon" />
        <div class="content"><slot/></div>
    </button>
</template>
<script>
    module.exports = {
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
        padding: 0 1.6em;
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

        > .content { order: 2; display: inline-block; }
        > .icon { order: 1;margin-right: .3em; }

        &.icon-right{
            > .content { order: 1; }
            > .icon { order: 2;margin-right: 0;margin-left: .3em;  }
        }
    } 
</style>
