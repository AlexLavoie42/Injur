//../src/Chart.js
import {
    Doughnut,
    mixins
} from 'vue-chartjs'

export default {
    extends: Doughnut,
    mixins: [mixins.reactiveProp],
    props: ['chartData', 'options'],
    data() {
        return {
            options: {
                responsive: false,
                maintainAspectRatio: true,
            }
        }
    },
    mounted() {
        this.renderChart(this.departments, this.year, this.injurytypes, this.options)
    }

}