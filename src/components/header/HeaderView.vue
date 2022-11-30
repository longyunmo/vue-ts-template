<template>
  <div class="handerView">
    <div class="logo" :style="{flexBasis:store.state.leftWidth+'px'}">
      超级PDF工具
    </div>
    <div class="navTitle">
      <div class="handerNav">
        <div class="handerItem">
          <el-dropdown>
            <span class="el-dropdown-link">
              PDF工具
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>Action 3</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <div class="handerItem">
          <el-dropdown>
            <span class="el-dropdown-link">
              图片工具
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>Action 3</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <div class="handerItem">
          <el-dropdown>
            <span class="el-dropdown-link">
              开发工具
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>Action 3</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
      <div class="right">
        <el-button type="primary"><el-icon class="el-icon--left"><SwitchButton /></el-icon> 登录</el-button>
        <el-button plain>主题</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { SwitchButton,ArrowDown } from '@element-plus/icons-vue'
import { defineComponent,ref,getCurrentInstance} from 'vue'
import { useStore } from "vuex"
export default defineComponent({
  name:'HeaderView',
  components:{
    ArrowDown,
    SwitchButton
  },
  setup() {
    const store = useStore()
    const instance: any = getCurrentInstance();
    return{store}
  },
})
</script>

<style scoped lang="less">
  .handerView{
    display: flex;
    align-items: center;
    height: 100%;
    .logo{
      font-weight: 600;
    }
    .navTitle{
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .handerNav{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .handerItem{
          display: flex;
          align-items: center;
          margin: 0 20px;
        }
      }
      .right{
        flex-basis: 180px;
      }
    }
  }
</style>
