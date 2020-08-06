<script>
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  data() {
    return {
      chartData: {
        labels: [
          "Stornoway",
          "Oban",
          "Campbeltown",
          " Wick",
          " Thurso",
          "Provan LNG",
        ],
        datasets: [
          {
            label: "Assets By Division",
            data: [178, 150, 149, 135, 71, 34],
            backgroundColor: [
              "#0074D9",
              "#FF4136",
              "#2ECC40",
              "#FF851B",
              "#7FDBFF",
              "#B10DC9",
              "#FFDC00",
              "#001f3f",
              "#39CCCC",
              "#01FF70",
              "#85144b",
              "#F012BE",
              "#3D9970",
              "#111111",
              "#AAAAAA",
            ],
          },
        ],
      },
      options: {
        legend: {
          display: true,
          position: 'right',
          align: 'start'
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
        mounted() {
        this.renderChart(this.chartData, this.options);
      },
};
</script>
