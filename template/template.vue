<template lang="pug">
  .container
    .main {{msg}}
</template>
<script>
export default {
  data () {
    return {
      msg: 'hello vue'
    }
  }
}
</script>
<style lang="less">
  .container{
    height: 100vh;
    min-height: 100%;
    background-image: url(https://unsplash.it/1080/608?random);
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .main{
      font-size: 30px;
      color: pink;
    }
  }
</style>
