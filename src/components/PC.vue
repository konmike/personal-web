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

<style lang="scss" scoped>
.main-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    max-width: 70%;
    box-sizing: border-box;
    transition: width 1000ms;
}
.active{
    width: 70%;
    max-width: 70%;
}
</style>