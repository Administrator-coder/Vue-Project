<template>
  <div id="app">
    <p class="slow">{{ messageDisplayed }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Java Runtime Environment (JRE)',
      messageDisplayed: ''
    };
  },
  mounted() {
    let i = 0;
    let intervalId = setInterval(() => {
      if (i < this.message.length) {
        this.messageDisplayed += this.message[i];
        i++;
      } else {
        clearInterval(intervalId);
      }
    }, 100); // Adjust speed here
  }
};
</script>

<style>
.slow {
  color: black;
  font-size: 20px;
}
</style>
