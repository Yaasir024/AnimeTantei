<script setup>
    const route = useRoute()
    const name = route.params.id
</script>

<template>
    Page {{name}}
</template>