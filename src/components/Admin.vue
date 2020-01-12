<template xmlns="http://www.w3.org/1999/html">
    <main class="main">
        <section class="section2"
        <div id = "left">
            <div class ="button">
                <img class="image" src="https://static.thenounproject.com/png/186484-200.png" alt="dummy image">

                <div class ="leftLabelText">
                    Employees
                </div>
            </div>

            <div class ="button">
                <img class="image" src="https://image.flaticon.com/icons/png/512/64/64572.png" alt="dummy image">

                <div class ="leftLabelText">
                    Account
                </div>
            </div>

            <div class ="button">
                <img class="image" src="http://cdn.onlinewebfonts.com/svg/img_474609.png" alt="dummy image">

                <div class ="leftLabelText">
                    Customization
                </div>
            </div>

            <div class ="button">
                <img class="image" src="https://cdn0.iconfinder.com/data/icons/entypo/92/help-512.png" alt="dummy image">

                <div class ="leftLabelText">
                    Help
                </div>
            </div>
        </div>
        </div>
        </section>
        <section class="section">
    <div id ="container">

        <div class="search-container">
            <form action="/action_page.php">
                <input type="text" placeholder="Search.." name="search" class="input">
            </form>
        </div>

    </div>
        </section>

    </main>
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
        padding-bottom: 55px;


        margin: .5em;
        width: 30%;
        height: 100%;
    }

    .button {
        background-color: azure;
        position: relative;
        cursor: pointer;
    }

    .image {
        margin-left: .25em;
        position: relative;
        float: left;
        top: 25px;
        left: -15px;
        width: 4em;
        height: 4em;
    }

    .leftLabelText {
        position: relative;
        top: -50px;
        left: 4.5em;
        width: 5em;
        cursor: pointer;
        text-align: center;
        color: black;
        font-family: 'Open Sans', sans-serif

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
        float: center;

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
.main {
    display:flex;

}
    .section {

    }
    .input {
        width: 63em;
        margin: 1em;

    }
</style>