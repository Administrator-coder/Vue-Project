<template>
    <div>
      <el-button @click="toggleShow">Toggle</el-button>
      <div v-show="show" class="bounce">Hello, world!</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        show: true,
      };
    },
    methods: {
      toggleShow() {
        this.show = !this.show;
      },
    },
  };
  </script>
  
  <style scoped>
  .bounce {
    animation: bounce-in .5s;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  </style>