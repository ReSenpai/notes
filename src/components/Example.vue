<template>
     <section id="main">
        <div class="container">
        </div>
    </section>
</template>

<script>
export default {
    data () {
        return {
            message: null,
        }
    },
    created () {
        this.message = this.$store.getters.getMessage;
    }
}
</script>

<style lang="scss" scoped>
</style>