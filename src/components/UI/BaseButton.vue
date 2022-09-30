<template>
    <button type="button" class="btn shadow-none" :class="[btype]">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'BaseButton',
    props: ['btype', 'bstyle', 'bcolor'],
}
</script>

<style scoped>
.btn-p {
    background-color: #40308e;
    color: white;
    margin-left: 0.3rem;
}
.btn-p:hover {
    background-color: #504298;
    color: white;
}
</style>
