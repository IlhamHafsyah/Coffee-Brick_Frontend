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
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
    }, 3000)
  },
  created() {
    this.perMonthIncome()
    let index = []
    let income = []
    for (let i = 0; i < this.getPerMonth.length; i++) {
      index.push(this.getPerMonth[i].per_month_income)
      console.log(index)
      income.push(index.slice(0))
      console.log(income)
    }
    console.log(income[0][0])
    this.chartdata.datasets[0].data[0] = 40000
    this.chartdata.datasets[0].data[1] = income[0][0]
    this.chartdata.datasets[0].data[2] = income[0][1]
    this.chartdata.datasets[0].data[3] = income[0][2]
    this.chartdata.datasets[0].data[4] = income[0][3]
    this.chartdata.datasets[0].data[5] = income[0][4]
    this.chartdata.datasets[0].data[6] = income[0][5]
    this.chartdata.datasets[0].data[7] = income[0][6]
    this.chartdata.datasets[0].data[8] = income[0][7]
    this.chartdata.datasets[0].data[9] = income[0][8]
    this.chartdata.datasets[0].data[10] = income[0][9]
    this.chartdata.datasets[0].data[11] = income[0][10]
  },
  methods: {
    ...mapActions(['perMonthIncome'])
  },
  computed: {
    ...mapGetters(['getPerMonth'])
  }
}
</script>
