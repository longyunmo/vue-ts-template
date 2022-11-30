<template>
  <div class="homeView">
    <h2 class="color-777">超级PDF</h2>
    <h4 class="color-777">免费、简单、强大</h4>
    <div class="homeList">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return{

    }
  },
})
</script>
<style scoped lang="less">
.color-777{
  color: #777;
}
.homeList{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .item{
    height: 160px;
    width: 24%;
    background: #fff;
    border-radius: 5px;
    margin: 0 0 15px 0;
    
  }
}
</style>

  