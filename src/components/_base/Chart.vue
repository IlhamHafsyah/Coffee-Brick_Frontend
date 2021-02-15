<script>
import { mapActions, mapGetters } from 'vuex'
import { Bar } from 'vue-chartjs'
export default {
  extends: Bar,
  data: () => ({
    chartdata: {
      labels: [
        'January',
        'February',
        'March',
        'April',
        'Mei',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      datasets: [
        {
          label: 'Income (Rupiah)',
          backgroundColor: '#ffbb33',
          data: ''
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted() {
    setTimeout(() => {
      this.renderChart(this.chartdata, this.options)
    }, 2000)
  },
  created() {
    this.perMonthIncome()
    let index = []
    let income = []
    for (let i = 0; i < this.getPerMonth.length; i++) {
      index.push(this.getPerMonth[i].per_month_income)
      income.push(index.slice(0))
    }
    income[this.getPerMonth.length - 1].splice(0, 1)
    console.log(income[this.getPerMonth.length - 1])
    this.chartdata.datasets[0].data = income[this.getPerMonth.length - 1]
    // let chartData = [
    //   this.getPerMonth[1].per_month_income,
    //   this.getPerMonth[2].per_month_income
    // ]
    // this.chartdata.datasets[0].data = chartData
  },
  methods: {
    ...mapActions(['perMonthIncome'])
  },
  computed: {
    ...mapGetters(['getPerMonth'])
  }
}
</script>
