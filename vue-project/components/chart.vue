<template>
    <apex-chart type="line" :options="options" :series="series" />
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import ApexCharts from "apexcharts";
  
  export default defineComponent({
    name: "Chart",
    props: ["data"],
    computed: {
      series() {
        return [
          {
            name: "Dólar",
            data: this.data.map((item) => item.value),
          },
        ];
      },
      options() {
        return {
          chart: {
            type: "line",
            background: "transparent",
          },
          xaxis: {
            categories: this.data.map((item) => item.date),
          },
          colors: [var(--primary-color)],
        };
      },
    },
  });
  </script>
  