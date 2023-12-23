<template>
    <div>
      <canvas ref="chartCanvas" width="200" height="200"></canvas>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      data: {
        type: Number,
        default:35,
      },
      max: {
        type: Number,
        default: 100,
      },
    },
    mounted() {
      this.drawChart();
    },
    watch: {
      data: 'drawChart',
    },
    methods: {
      drawChart() {
        const canvas = this.$refs.chartCanvas;
        const ctx = canvas.getContext('2d');
  
        ctx.clearRect(0, 0, canvas.width, canvas.height);
  
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = canvas.width / 2 - 10; 
  
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = '#e0e0e0';
        ctx.lineWidth = 10;
        ctx.stroke();
  
        const progress = (this.data / this.max) * 2 * Math.PI;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, -Math.PI / 2, -Math.PI / 2 + progress);
        ctx.strokeStyle = '#007bff'; 
        ctx.lineWidth = 10;
        ctx.stroke();
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  