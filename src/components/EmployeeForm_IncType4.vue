<template>
    <div id="app" class="container">
        <form>
            <h1>Employee Incident Form</h1>
            <hr>
            <h2>Type of Occurrence</h2>
            <h3>Select all that apply</h3>
            <hr>
            <div class="checkboxes">
                <div id='incidentTypes'>
                    <input type="checkbox" id="c1" v-model="toggle">
                    <label for="c1">Death of a worker</label>
                    <br>
                    <input type="checkbox" id="c2" v-model="toggle">
                    <label for="c2">Serious injury to a worker</label>
                    <br>
                    <input type="checkbox" id="c3" v-model="toggle">
                    <label for="c3">Major structural failure or collapse</label>
                    <br>
                    <input type="checkbox" id="c4" v-model="toggle">
                    <label for="c4">Major release of hazardous substance</label>
                    <br>
                    <input type="checkbox" id="c5" v-model="toggle">
                    <label for="c5">Blasting accident causing personal injury</label>
                    <br>
                    <input type="checkbox" id="c6" v-model="toggle">
                    <label for="c6">Dangerous incident involving explosives other than blasting incident</label>
                    <br>
                    <input type="checkbox" id="c7" v-model="toggle">
                    <label for="c7">Diving Incident, as defined by regulation</label>
                    <br>
                    <input type="checkbox" id="c8" v-model="toggle">
                    <label for="c8">Incident of fire or explosion with potential for serious injury</label>
                    <br>
                    <input type="checkbox" id="c9" v-model="toggle">
                    <label for="c9">Minor or no injury but potential for serious injury</label>
                    <br>
                    <input type="checkbox" id="c10" v-model="toggle">
                    <label for="c10">Injury requiring medical treatment beyond first aid</label>
                    <br>
                </div>
            </div>

            <hr>

            <div class="form-group">
                <button @click="submit" type="button" class="btn btn-primary">Next</button>
            </div>
        </form>
    </div>
</template>
<script>

    export default {
        name: "App",

        data: () => ({
            basicInfo: [
                {
                    location: "",
                    city: "",
                    province: "",
                    postalcode: "",
                    date: "",
                    time: ""
                }
            ],
        }),

        methods: {

            submit () {
                const data = {
                    injuredPersons: this.injuredPersons
                }
                alert(JSON.stringify(data, null, 2))
            }
        }
    };
</script>

<style>
    .form-control{
        width: 400px;
    }
