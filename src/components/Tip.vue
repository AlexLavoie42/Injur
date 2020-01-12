<template>
    <div id ="container">
        <div id ="message">
            Enter any tip below:
        </div>

        <form>
            <textarea class="field" type="text" v-model="tip" placeholder="Enter a tip..."/>
            <button @click="submit" id ="submit">Submit</button>
        </form>
    </div>
</template>

<script>
    import {db} from "../main";

    export default {
        name: "Tip",

        data: () => ({
            safetyTip: [
                {
                    tip: "",
                },
            ],
        }),

        methods: {
            addPerson () {
                this.safetyTip.push({
                    tip: ''
                })
            },

            submit () {
                const data = {
                    safetyTip: this.safetyTip
                };
                db.collection("tips").add(data);
                this.$router.replace("ThankYou")
            }
        }
    }
</script>

<style scoped>
    body, html {
        padding: 0px;
        margin: 0px;
    }

    #message{
        font-size: 30px;
        margin: 15px;
    }

    .field {

        margin-left: 10%;
        margin-right: 10%;
        width: 80%;
        height: 40em;
    }

    #submit {
        margin-top: 25px;
        margin-left: 70%;
        width: 10em;
        height: 3em;
    }

</style>