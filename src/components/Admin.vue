<template>
    <div id ="container">

        <div class="search-container">
            <form action="/action_page.php">
                <input type="text" placeholder="Search.." name="search">
                <button type="submit" class ="searchButton"></button>
            </form>
        </div>

        <div class ="filter">
            filter
        </div>

        <div id = "left">
            <div class ="button">
                <img class="image" src="https://dummyimage.com/50x50/000/fff" alt="dummy image">
            </div>
            <div class ="leftLabelText">
                Employees
            </div>

            <div class ="button">
                <img class="image" src="https://dummyimage.com/50x50/000/fff" alt="dummy image">
            </div>
            <div class ="leftLabelText">
                something1
            </div>

            <div class ="button">
                <img class="image" src="https://dummyimage.com/50x50/000/fff" alt="dummy image">
            </div>
            <div class ="leftLabelText">
                something2
            </div>

            <div class ="button">
                <img class="image" src="https://dummyimage.com/50x50/000/fff" alt="dummy image">
            </div>
            <div class ="leftLabelText">
                something3
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Admin"
    }
</script>

<style scoped>
    body, html {
        padding: 0px;
        margin: 0px;
    }

    #left {
        font-size: 25px;
        background-color: #61afe0;
        position: relative;
        padding-top: 15px;
        padding-left: 15px;
        padding-right: 15px;
        width: 30%;
        height: 690px;
    }

    .button {
        background-color: azure;
        position: relative;
        margin-bottom: 0px;
        padding-top: 18px;
        padding-left: 10%;
        padding-right: 10%;
        padding-bottom: 30px;
        width: 75%;
        height: 20px;
        cursor: pointer;
    }

    .image {
        margin-left: 5%;
        position: relative;
        float: left;
        top: -10px;
        left: -20px;
    }

    .leftLabelText {
        position: relative;
        top: -50px;
        left: 35%;
        width: 50%;
        cursor: pointer;
    }

    #bar {
        background-color: darkseagreen;
        position: relative;
        margin-left: 30%;
        top: -705px;
        width: 70%;
        height: 70px;
        z-index: -1;
    }

    .search-container {
        float: right;
        padding: 25px;
    }

    .filter {
        position: relative;
        margin-right: 60px;
        top: 15px;
        float: right;
        background-color: forestgreen;
        padding: 10px;
        color: white;
        text-shadow: 2px 2px #000000;
    }

    .search-container button {
        float: right;
        padding: 6px 10px;
        margin-top: 8px;
        margin-right: 16px;
        background: #ddd;
        font-size: 17px;
        border: none;
        cursor: pointer;
    }

    .search-container button:hover {
        background: #ccc;
    }

    .searchButton {
        width: 20px;
        height: 20px;
    }

</style>