<template>
    <button class="my-button">
        <slot></slot>
    </button>
</template>
<script>
    export default{

    }
</script>
<style lang="scss">
    .my-button {
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
        & .icon{ width: 1em;height: 1em;;}
    }
    
</style>
