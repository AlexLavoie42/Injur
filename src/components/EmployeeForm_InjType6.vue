<template>
    <div id="app" class="container">
        <form>
            <h1>Employee Incident Form</h1>
            <hr>
            <h2>Nature of Serious Injury</h2>
            <h3>Select all that apply (if any)</h3>
            <hr>
            <div class="checkboxes">
                <div id='injuryTypes'>
                    <input type="checkbox" id="c1" v-model="toggle">
                    <label for="c1">Life threatening or resulting in loss of consciousness</label>
                    <br>
                    <input type="checkbox" id="c2" v-model="toggle">
                    <label for="c2">Major broken bones in head, spine, pelvis, arms or legs</label>
                    <br>
                    <input type="checkbox" id="c3" v-model="toggle">
                    <label for="c3">Major crush injuries</label>
                    <br>
                    <input type="checkbox" id="c4" v-model="toggle">
                    <label for="c4">Major cut with sever bleeding</label>
                    <br>
                    <input type="checkbox" id="c5" v-model="toggle">
                    <label for="c5">Amputation of arm, leg, or large part of hand or foot</label>
                    <br>
                    <input type="checkbox" id="c6" v-model="toggle">
                    <label for="c6">Major penetrating injuries to eye, head or body</label>
                    <br>
                    <input type="checkbox" id="c7" v-model="toggle">
                    <label for="c7">Third-Degree burns</label>
                    <br>
                    <input type="checkbox" id="c8" v-model="toggle">
                    <label for="c8">Punctured Lung or other serious respiratory condition</label>
                    <br>
                    <input type="checkbox" id="c9" v-model="toggle">
                    <label for="c9">Injury to internal organ or internal bleeding</label>
                    <br>
                    <input type="checkbox" id="c10" v-model="toggle">
                    <label for="c10">Injury likely to result in loss of sight, hearing or touch</label>
                    <br>
                    <input type="checkbox" id="c11" v-model="toggle">
                    <label for="c11">Injury requiring CPR or other critical intervention</label>
                    <br>
                    <input type="checkbox" id="c12" v-model="toggle">
                    <label for="c12">Diving illness such as decompression sickness or near drowning</label>
                    <br>
                    <input type="checkbox" id="c13" v-model="toggle">
                    <label for="c13">Serious chemical or heat/cold stress exposure</label>
                    <br>
                    <div>
                        <input type="text" class="form-control" placeholder="Other">
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
