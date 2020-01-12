<template>
    <div id="app" class="container">
        <form>
            <h1>Employee Incident Form</h1>
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
                // eslint-disable-next-line no-unused-vars
                const data = {
                    basicInfo: this.basicInfo
                }
                this.$router.replace("EmployeeForm_IncType")
            }
        }
    };
</script>

<style>
    .form-control{
        width: 400px;
    }
</style>