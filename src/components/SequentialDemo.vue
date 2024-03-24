<template>
    <div class="container">
      <el-card class="card">
        <div class="title">顺序执行示例</div>
        <transition-group name="fade">
          <div class="step" v-for="(step, index) in sequentialSteps" :key="index">{{ step }}</div>
        </transition-group>
      </el-card>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        sequentialSteps: ['准备材料', '切菜', '烹饪', '摆盘', '上菜']
      };
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .card {
    width: 500px;
  }
  
  .title {
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .step {
    padding: 10px;
    background-color: #f0f0f0;
    margin-bottom: 10px;
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>
  