<template>
    <div>
        <h1 @click="onClick">{{ conts }}</h1>
    </div>
</template>

<script lang="ts"> 
import { defineComponent, ref, getCurrentInstance } from "vue";
export default defineComponent({
    setup() {
        const conts = ref("我是子组件");
        const instance: any = getCurrentInstance();
        const onClick = () => {
            instance.proxy.http.apiPost("stock").then()
        };
        return { 
            conts, onClick 
        };
    },
}); 
</script> 
