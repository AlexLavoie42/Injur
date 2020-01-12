<template>
    <section id="reports">
        <article class="singleReport">
            <h2> Jonathan Raindrop </h2>
            <button class="button2"><span> Pending </span></button>
        </article>
        <article class="singleReport">
            <h2> Jamie Aquathrow </h2>
            <button class="button2"><span> Pending </span></button>
        </article>
        <article class="singleReport">
            <h2> Joshua Ehchtouoh </h2>
            <button class="button3"><span> Completed </span></button>
        </article>
        <article class="singleReport">
            <h2> Jimmy Waterkick </h2>
            <button class="button3"><span> Completed </span></button>
        </article>
        <article class="singleReport">
            <h2> Jackson Puddletrip </h2>
            <button class="button3"><span> Completed </span></button>
        </article>
    </section>
</template>

<script>
    export default {
        name: "IncidentList"
    }
</script>

<style scoped>
    /* THIS IS THE BEGINNING OF THE INCIDENT REPORT LIST */
    .singleReport {
        background-color: #61afe0;
        display:flex;
        padding: 2em;
        margin-bottom: 2em;
        margin-right: 2em;
        margin-left: 2em;
        align-items: center;
    }
    h2 {
        font-size: 2em;
        font-weight:lighter;
        font-family: 'Open Sans', sans-serif;
        margin-left: .5em;

    }
    .button2 {
        color:black;
        background-color: #ffca00;
        height: 4.5em;
        width: 20em;
        float: right;
        position: absolute;
        left: 70em;
        font-weight: bold;
        font-family: 'Open Sans', sans-serif;


    }
    .button3 {
        background-color: #5AA27C;
        color: white;
        height: 4.5em;
        width: 20em;
        float: right;
        position: absolute;
        left: 70em;
        font-weight: bold;
        font-family: 'Open Sans', sans-serif;
    }
    #reports {
        display: block;
    }
    /* END OF INCIDENT REPORT LIST!!!!!!!!!!!!!*/

</style>