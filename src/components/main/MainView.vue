<template>
  <div class="mainView">
    <router-view>
      <transition name="fade" mode="out-in">
        <keep-alive>
          <component :is="'HomeView'" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { SwitchButton,ArrowDown } from '@element-plus/icons-vue'
import { defineComponent,ref,getCurrentInstance} from 'vue'
import HomeView from '../../views/home/HomeView.vue'
import { useStore } from "vuex"
import { useRouter } from 'vue-router'
export default defineComponent({
  name:'HeaderView',
  components:{
    ArrowDown,
    SwitchButton,
    HomeView
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const instance: any = getCurrentInstance();
    return{store}
  },
})
</script>

<style scoped lang="less">
  .mainView{
    // height: 100%;

  }
</style>
