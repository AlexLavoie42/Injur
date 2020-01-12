<template>
    <div id ="container">
        <div id ="message">
            Enter any tip below:
        </div>

        <form>
            <textarea class ="field" type="text" name="Tip" placeholder="Enter a tip..."></textarea><br>
            <input id ="submit" type="submit" value="Submit">
        </form>
    </div>
</template>

<script>
    export default {
        name: "Tip"
    }
</script>

<style scoped>
    body, html {
        padding: 0px;
        margin: 0px;
    }

    #message{
        font-size: 30px;
        margin: 15px;
    }

    .field {

        margin-left: 10%;
        margin-right: 10%;
        width: 80%;
        height: 40em;
    }

    #submit {
        margin-top: 25px;
        margin-left: 70%;
        width: 10em;
        height: 3em;
    }

</style>