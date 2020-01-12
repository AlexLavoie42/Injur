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
        font-size: 30px;
        text-align: center;
        font-family: 'Open Sans', sans-serif;
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

        cursor: pointer;
        margin-left: 40%;
        width: 20%;
        height:30%;
        font-family: 'Open Sans', sans-serif;
    }

</style>