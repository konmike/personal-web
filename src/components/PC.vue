<template>
    <main class="main-content">
        <Monitor />
        <Box />
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
            powerOn: false,
        }
    },
    mounted() {
        this.emitter.on('powerOn', () => {
            this.powerOn = !this.powerOn;
        })
    }

}
</script>

