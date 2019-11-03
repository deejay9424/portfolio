<template>
    <p>About</p>
</template>

<script>
export default {
    created(){
        this.$store.commit("SET_PAGE_TITLE","About")
    }
}
</script>