<template>
    <div id ="container">
        <div id ="message">
            Thank you for your input
        </div>
        <router-link to="Dashboard"><button class="button">Continue</button></router-link>
    </div>
</template>

<script>
    export default {
        name: "Thankyou"
    }
</script>

<style scoped>
    body, html {
        padding: 0px;
        margin: 0px;
    }

    #message {
        margin: 40px;
        font-size: 60px;
        text-align: center;
    }

    .button {
        background-color: darkcyan;
        border: none;
        color: white;
        padding: 15px 0px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin-top: 100px;
        cursor: pointer;
        margin-left: 40%;
        width: 20%;
    }

</style>