<template>
    <main :class="[{'active': powerOn}, 'main-content']">
        <Monitor />
        <Box />
    </main>
</template>

<script>
import Monitor from './Monitor.vue'
import Box from './Box.vue'

export default {
    props: ['showProject', 'is-contact'],
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

