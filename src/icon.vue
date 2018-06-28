<template>
    <svg class="my-icon"><use :xlink:href="`#i-${name}`"></use></svg>
</template>

<script>
module.exports = {
    props: {
        name: {
            type: String,
        }
    }
}
</script>

<style>
.my-icon{ width: 1.3em;height: 1.3em;}
</style>