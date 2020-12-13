<template>
    <img :src="image" alt="#">
</template>

<script>
export default {
    props: {
        image: String
    }
}
</script>

<style scoped>
    img{
        width: 100%;
    }
</style>