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
            injuredPersons: [
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
</style>

