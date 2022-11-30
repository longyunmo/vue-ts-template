<template>
    <div class="common-layout base">
        <el-container class="elContainer">
            <el-header class="elHeader">
                <header-view />
            </el-header>
            <el-container class="elContainerMain">
                <el-aside class="elAside" :style="{width:store.state.leftWidth+'px'}">
                    <aside-view />
                </el-aside>
                <el-main class="elMain">
                    <main-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from "vuex"
export default defineComponent({
    components: {  
        
    },
    setup() {
        const store = useStore()
        return{
            store
        }
    },
})
</script>

