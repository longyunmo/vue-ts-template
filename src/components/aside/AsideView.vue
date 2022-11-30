<template>
  <div class="card">
    <!-- {{store.state.leftWidth}} -->
    <div class="title">OFFICE文档转换PDF</div>
    <div class="listItem">
      <div class="item">
        <i class="img iconfont icon-Word" />
        <span class="text">Pdf转Word</span>
      </div>
      <div class="item">
        <i class="img iconfont icon-PowerPoint" />
        <span class="text">Pdf转Ppt</span>
      </div>
      <div class="item">
        <i class="img iconfont icon-Excel" />
        <span class="text">Pdf转Excel</span>
      </div>
      <div class="item">
        <img class="img img-60" src="https://img1.baidu.com/it/u=1838964697,184083178&fm=253&fmt=auto&app=120&f=JPEG?w=693&h=500" alt="">
        <span class="text">Word转Pdf</span>
      </div>
      <div class="item">
        <img class="img img-40" src="https://img0.baidu.com/it/u=2916899284,3070265243&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="">
        <span class="text">Excel转Pdf</span>
      </div>
      <div class="item">
        <img class="img img-40" src="https://img1.baidu.com/it/u=449818030,3820998611&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="">
        <span class="text">Ppt转Pdf</span>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="title">OFFICE文档转换PDF</div>
    <div class="listItem">
      <div class="item">
        <i class="img iconfont icon-_huaban" />
        <span class="text">Word转Pdf</span>
      </div>
      <div class="item">
        <i class="img iconfont icon-_huaban" />
        <span class="text">Excel转Pdf</span>
      </div>
      <div class="item">
        <i class="img iconfont icon-_huaban" />
        <span class="text">Ppt转Pdf</span>
      </div>
      <div class="item">
        <i class="img iconfont icon-tupian" />
        <span class="text">Pdf转Word</span>
      </div>
      <div class="item">
        <i class="img iconfont icon-tupian" />
        <span class="text">Pdf转Word</span>
      </div>
      <div class="item">
        <i class="img iconfont icon-tupian" />
        <span class="text">Pdf转Word</span>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="title">OFFICE文档转换PDF</div>
    <div class="listItem">
      <div class="item">
        <img class="img" :src="url" alt="">
        <span class="text">Word转Pdf</span>
      </div>
      <div class="item">
        <img class="img" :src="url" alt="">
        <span class="text">Excel转Pdf</span>
      </div>
      <div class="item">
        <img class="img" :src="url" alt="">
        <span class="text">Ppt转Pdf</span>
      </div>
      <div class="item">
        <img class="img" :src="url" alt="">
        <span class="text">Pdf转Word</span>
      </div>
      <div class="item">
        <img class="img" :src="url" alt="">
        <span class="text">Pdf转Word</span>
      </div>
      <div class="item">
        <img class="img" :src="url" alt="">
        <span class="text">Pdf转Word</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref,getCurrentInstance} from 'vue'
import { useStore } from "vuex"
export default defineComponent({
  setup() {
    const store = useStore()
    const instance: any = getCurrentInstance();
    return {store}
  },
  data(){
    return{
      url:'https://img2.baidu.com/it/u=394338956,1226403854&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=526'
    }
  }
})
</script>

<style scoped lang="less">
.card{
  padding: 5px;
  margin-bottom: 25px;
  .title{
    text-align: left;
    font-size: 14px;
    color: #777;
  }
  .listItem{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    .item{
      width: 30%;
      height: 80px;
      padding: 5px 0;
      border-radius: 5px;
      background: #fff;
      margin: 10px 0 0 0;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      cursor: pointer;
      .img{height: 50px;width: 50px;margin: 0 auto;line-height: 50px;font-size: 40px;}
      .img-40{width: 45px;}
      .img-60{width: 70px;}
      .text{height: 20px;display: inline-block;font-size: 14px;text-align: center;}
    }
    .item:hover{
      box-shadow: 0 2px 4px rgba(189, 194, 206, 0.8);
      color: #409eff;
    }
  }
}
.card:last-child{margin-bottom: 0;}
</style>
