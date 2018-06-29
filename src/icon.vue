<template>
    <svg :class="{[`${animation}`]:true}"><use :xlink:href="`#i-${name}`"></use></svg>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
        },
        animation:{
            type: String,
            default: '',
            validator(value){
                return value === 'spin' || value === ''
            }
        }
    }
}
</script>

<style>
@keyframes spin {
    0%{ transform: rotate(0deg) }
    100%{ transform: rotate(360deg) }
}
.spin{ animation: spin 1.5s linear infinite; }
</style>