//../src/components/MyAnalytics.vue

<template>
    <div class="chart-container" style="height:40vh; width:100vw">
        <div id="chart1" style="text-align: center; float:left">
            <label>Incidents By Department</label>
            <chart :chart-data="departments"></chart>
        </div>
        <div id="chart2" style="text-align: center; float: left">
            <label>Incidents By Injury Type</label>
            <chart :chart-data="injurytypes"></chart>
        </div>
        <div id="chart3" style="text-align: center; float: left">
            <label>Incidents By Time of Year</label>
            <chart :chart-data="year"></chart>
        </div>
    </div>
</template>
<script>
    import Chart from "./../Chart.js";

    export default {
        components: {
            Chart
        },
        data() {
            return {
                injurytypes: null,
                departments: null,
                time: null
            };
        },
        mounted() {
            this.fillData();
        },
        methods: {
            fillData() {
                this.injurytypes = {
                    labels: [
                        'Head',
                        'Fracture',
                        'Minor'
                    ],

                    datasets: [
                        {
                            data: [30, 20, 50],
                            backgroundColor: ['#ff6384', '#36a2eb', '#ffc356']
                        }

                    ]
                };
                this.departments = {
                    labels: [
                        'Finishing',
                        'Final Assembly',
                        'Wet Cast',
                        'Dry Cast',
                        'Mill Work'
                    ],

                    datasets: [
                        {
                            data: [10, 20, 5, 15, 50],
                            backgroundColor: ['#ff6384', '#36a2eb', '#ffc356', '#ff6370', '#36a2e1']
                        }

                    ]
                };
                this.year = {
                    labels: [
                        'January',
                        'February',
                        'March'
                    ],

                    datasets: [
                        {
                            //type: 'bar',
                            data: [10, 70, 30],
                            backgroundColor: ['#ff6384', '#36a2eb', '#ffc356']
                        }

                    ]
                };
            },
        }
    };

</script>
<style>
</style>