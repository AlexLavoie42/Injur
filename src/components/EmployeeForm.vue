<template>
    <div id="app" class="container">
        <form>
            <h1>Employee Incident Form</h1>
            <h2>Injured Persons Information</h2>
            <div class="injured-persons">

                <div class="form-row" v-for="(person, index) in injuredPersons" :key="index">
                    <div class="form-group col-md-6">
<!--                        <label>First Name</label>-->
                        <input v-model="person.firstName" :name="`injuredPersons[${index}][firstName]`" type="text" class="form-control" placeholder="First Name">
                    </div>
                    <div class="form-group col-md-6">
<!--                        <label>Last Name</label>-->
                        <input v-model="person.lastName" :name="`injuredPersons[${index}][lastName]`" type="text" class="form-control" placeholder="Last Name">
                    </div>
                    <div class="form-group col-md-6">
<!--                        <label>Position</label>-->
                        <input v-model="person.position" :name="`injuredPersons[${index}][position]`" type="text" class="form-control" placeholder="Position">
                    </div>
                    <div class="form-group col-md-6">
<!--                        <label>Department</label>-->
                        <input v-model="person.department" :name="`injuredPersons[${index}][department]`" type="text" class="form-control" placeholder="Department">
                    </div>
                </div>
            </div>

            <div class="form-group">
                <button @click="addPerson" type="button" class="btn btn-secondary">Add Another Person</button>
            </div>

            <hr>

            <h2>Basic Incident Information</h2>
            <div class="basic-info">

                <div class="form-row" v-for="(basicinfo, index) in basicInfo" :key="index">
                    <div class="form-group col-md-6">
                        <input v-model="basicinfo.location" :name="`basicInfo[${index}][location]`" type="text" class="form-control" placeholder="Address or GPS Coordinates">
                    </div>
                    <div class="form-group col-md-6">
                        <input v-model="basicinfo.city" :name="`basicInfo[${index}][city]`" type="text" class="form-control" placeholder="City">
                    </div>
                    <div class="form-group col-md-6">
                        <input v-model="basicinfo.province" :name="`basicInfo[${index}][province]`" type="text" class="form-control" placeholder="Province">
                    </div>
                    <div class="form-group col-md-6">
                        <input v-model="basicinfo.postalcode" :name="`basicInfo[${index}][postalcode]`" type="text" class="form-control" placeholder="Postal Code">
                    </div>
                    <div class="form-group col-md-6">
                        <input v-model="basicinfo.date" :name="`basicInfo[${index}][date]`" type="text" class="form-control" placeholder="Date">
                    </div>
                    <div class="form-group col-md-6">
                        <input v-model="basicinfo.time" :name="`basicInfo[${index}][time]`" type="text" class="form-control" placeholder="Time">
                    </div>
                </div>
            </div>
            <hr>
            <h2>Detailed Incident Information</h2>
            <div class="incident-info">

                <div class="form-row" v-for="(incidentinfo, index) in incidentInfo" :key="index">
                    <div class="form-group col-md-6">
                        <label>Events Preceding Incident</label>
                        <br>
                        <textarea v-model="incidentinfo.before" :name="`incidentInfo[${index}][before]`" type="message" class="form-control" placeholder="Describe any events that led up to the incident. (eg. training, equipment changes, procedures)"></textarea>
                    </div>
                    <div class="form-group col-md-6">
                        <label>Unsafe Conditions, Acts or Procedures</label>
                        <br>
                        <textarea v-model="incidentinfo.cause" :name="`incidentInfo[${index}][cause]`" type="text" class="form-control" placeholder="Describe items (or absence of items) which contributed to incident hazard."></textarea>
                    </div>
                    <div class="form-group col-md-6">
                        <label>Brief Incident Description</label>
                        <br>
                        <textarea v-model="incidentinfo.description" :name="`incidentInfo[${index}][description]`" type="text" class="form-control" placeholder="Summarize sequence of events, unsafe factors and resulting injury, if any."></textarea>
                    </div>
                </div>
            </div>

            <hr>

            <div class="form-group">
                <button @click="submit" type="button" class="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
</template>
<script>

    import {db} from "../main";

    export default {
        name: "App",

        data: () => ({
            injuredPersons: [
                {
                    firstName: "",
                    lastName: "",
                    position: "",
                    department: "",
                },
            ],
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
            incidentInfo: [
                {
                    before: "",
                    cause: "",
                    description: "",
                }
            ]
        }),

        methods: {
            addPerson () {
                this.injuredPersons.push({
                    firstName: '',
                    lastName: '',
                    position: '',
                    department: '',
                })
            },

            submit () {
                const data = {
                    injuredPersons: this.injuredPersons
                };
                db.collection("reports").add(data)
                    .then(function () {
                        alert("Report sent")
                    });
                this.$router.replace("Dashboard")
            }
        }
    };
</script>

<style>
    .work-experiences > div {
        margin: 20px 0;
        padding-bottom: 10px;
    }
    .work-experiences > div:not(:last-child) {
        border-bottom: 1px solid rgb(206, 212, 218);
    }
    .form-control{
        width: 400px;
    }
</style>

