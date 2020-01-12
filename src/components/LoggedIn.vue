<template>
    <h4>You have been logged in. Redirecting to dashboard...</h4>
</template>

<script>
    export default {
        name: "LoggedIn",
        created() {
            setTimeout(() => this.$router.push('Dashboard'), 1000)
        }
    }
</script>

<style scoped>
    h4{
        text-align: center;
    }
</style>