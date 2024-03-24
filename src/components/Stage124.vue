<template>
    <div>
      <h1>虚拟地址和物理地址</h1>
      <transition name="fade">
        <p v-if="show">虚拟地址是程序所看到的地址，而物理地址是实际存在于内存硬件中的地址。虚拟内存系统的任务就是在这两者之间进行映射。</p>
      </transition>
      <button @click="show = !show">切换显示状态</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        show: true,
      };
    },
  };
  </script>
  
  <style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>
  