<template>
    <div id="app" class="container">
        <form>
            <h1>Employee Incident Form</h1>
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
                <button @click="submit" type="button" class="btn btn-primary">Next</button>
            </div>
        </form>
    </div>
</template>
<script>

    export default {
        name: "App",

        data: () => ({
            incidentInfo: [
                {
                    before: "",
                    cause: "",
                    description: "",
                }
            ]
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
