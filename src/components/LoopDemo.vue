<template>
    <div class="container">
      <el-card class="card">
        <div class="title">循环执行示例</div>
        <el-steps :active="activeStep" finish-status="success">
          <el-step v-for="(step, index) in loopSteps" :key="index" :title="step"></el-step>
        </el-steps>
      </el-card>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        loopSteps: ['准备材料', '切菜', '烹饪', '摆盘', '上菜'],
        activeStep: 0 // 假设从第1个步骤开始循环
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
  </style>
  