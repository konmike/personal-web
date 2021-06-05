<template>
    <main class="main-content">
        <Monitor :isActive=isActive />
        <Box @powerOn="isActive = !isActive" />
    </main>
</template>

<script>
import Monitor from './Monitor.vue'
import Box from './Box.vue'

export default {
    components: {
        Monitor, Box
    },
    data (){
        return{
            isActive: false,
        }
    }     
}
</script>

<style lang="scss" scoped>
.main-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // max-width: 70%;
    box-sizing: border-box;
}
</style>