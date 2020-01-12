<template>
    <div id="app" class="container">
        <form>
            <h1>Employee Incident Form</h1>
            <hr>
            <h2>Witnesses</h2>
            <div class="witnesses">

                <div class="form-row" v-for="(witness, index) in witness" :key="index">
                    <div class="form-group col-md-6">
                        <input v-model="witness.firstName" :name="`witness[${index}][firstName]`" type="text" class="form-control" placeholder="First Name">
                    </div>
                    <div class="form-group col-md-6">
                        <input v-model="witness.lastName" :name="`witness[${index}][lastName]`" type="text" class="form-control" placeholder="Last Name">
                    </div>
                    <div class="form-group col-md-6">
                        <input v-model="witness.position" :name="`witness[${index}][position]`" type="text" class="form-control" placeholder="Position">
                    </div>
                    <div class="form-group col-md-6">
                        <input v-model="witness.department" :name="`witness[${index}][department]`" type="text" class="form-control" placeholder="Department">
                    </div>
                </div>
            </div>

            <div class="form-group">
                <button @click="addWitness" type="button" class="btn btn-secondary">Add Another Witness</button>
            </div>
            <hr>
            <h2>Other Important Persons for Investigation</h2>
            <div class="persons">

                <div class="form-row" v-for="(person, index) in person" :key="index">
                    <div class="form-group col-md-6">
                        <input v-model="person.firstName" :name="`person[${index}][firstName]`" type="text" class="form-control" placeholder="First Name">
                    </div>
                    <div class="form-group col-md-6">
                        <input v-model="person.lastName" :name="`person[${index}][lastName]`" type="text" class="form-control" placeholder="Last Name">
                    </div>
                    <div class="form-group col-md-6">
                        <input v-model="person.position" :name="`person[${index}][position]`" type="text" class="form-control" placeholder="Position">
                    </div>
                    <div class="form-group col-md-6">
                        <input v-model="person.department" :name="`person[${index}][department]`" type="text" class="form-control" placeholder="Department">
                    </div>
                </div>
            </div>

            <div class="form-group">
                <button @click="addPerson" type="button" class="btn btn-secondary">Add Another Person</button>
            </div>



            <div class="form-group">
                <button @click="submit" type="button" class="btn btn-primary">Next</button>
            </div>
        </form>
    </div>
</template>
<script>

    import {db} from "../main";

    export default {
        name: "App",

        data: () => ({
            witness: [
                {
                    firstName: "",
                    lastName: "",
                    position: "",
                    department: "",
                },
            ],
            person: [
                {
                    firstName: "",
                    lastName: "",
                    position: "",
                    department: "",
                },
            ],
        }),

        methods: {
            addPerson () {
                this.person.push({
                    firstName: '',
                    lastName: '',
                    position: '',
                    department: '',
                })
            },
            addWitness () {
                this.witness.push({
                    firstName: '',
                    lastName: '',
                    position: '',
                    department: '',
                })
            },

            submit () {
                const data = {
                    witness: this.witness,
                    person: this.person
                }
                db.collection("reports").add(data);
                this.$router.replace("EmployeeForm_basic")
            }
        }
    };
</script>

<style>
    .form-control{
        width: 400px;
    }
</style>

