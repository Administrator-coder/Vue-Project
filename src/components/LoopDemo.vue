<template>
  <div class="container">
    <br><br><br><br>
    <div class="start">
    <el-row class="row-bg" justify="center">
      <el-col :span="6"><img src="../assets/logo.png" alt="标志"></el-col>
      <el-col :span="9"><h1>关于这个程序</h1></el-col>
      <el-col :span="3"></el-col>
    </el-row>
    </div class='content'>
    <el-row class="row-bg" justify="center">
      <el-col :span="2"></el-col>
      <el-col :span="12"><h3>{{ text }}</h3></el-col>
      <el-col :span="2"></el-col>
    </el-row>
    <div>
    </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      msg: `这是一个基于vue3框架的网页设计程序，使用了vite作为构建工具，使用了vue-router进行页面的跳转并使用了嵌套路由，使用了v-model实现了数据的双向绑定，使用了element-plus进行页面的布局，使用了reactive进行数据的响应式处理，以及使用了axios进行了网络数据的请求
            。`,
      index: 0,
      text:''
    }
  },
  mounted(){
    setInterval(this.autoType, 10);
  },
  methods:{
    autoType(){
      if(this.index < this.msg.length){
        this.text += this.msg.charAt(this.index);
        this.index++;
      }
    },
  },
}

</script>

<style scoped>
  .container{
  background-image: url(../assets/page.png);
  background-size: cover;
  background-position: center;
  height: 95vh;
  color:rgb(0, 0, 0);
  /* display: flex; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  }
  .start{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .start img{
    width: 125px;
    height: 125px;
  }
</style>