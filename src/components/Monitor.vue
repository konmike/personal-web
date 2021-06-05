<template>
    <div class="outer">
        <div :class="[{active: isActive}, 'inner']">
                <transition name="loading" @afterEnter="afterEnter" @afterLeave="afterEnter">
                    <Loader v-show="isActive" />
                </transition>

                
                <AboutMe v-show="showAboutMe" />
                
        </div>
    </div>
    <div class="bottom"></div>
</template>

<script>
import Loader from './Loader.vue'
import AboutMe from './AboutMe.vue'

export default {
    props: ['isActive'],
    components: {
        Loader, AboutMe
    },
    data(){
        return{
            showAboutMe: false,
        }
    },
    methods: {
        afterEnter(){
            this.showAboutMe = !this.showAboutMe;
        }
    }
}
</script>

<style lang="scss" scoped>
$border-color: #333333;

.outer{
    border: 8px solid $border-color;
    width: 550px;
    height: 400px;
    display: flex;
    place-content: center;
    place-items: center;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}
.inner{
    border: 8px solid $border-color;
    width: 500px;
    height: 350px;
    border-radius: 40px;
    background-color: #444;
    z-index: 12;
    position: absolute;
    
    &.active{
        
        background-color: #2c3e50;   
    }
}
.bottom{
    width: 520px;
    height: 30px;
    position: relative;
    &::after{
        content: "";
        background-color: $border-color;
        width: 8px;
        height: 30px;
        display: inline-block;
        position: absolute;
        left: 100%;
        top: 0;
        border-top: 0;
        transform: skewX(-25deg);
    }
    &::before{
        content: "";
        background-color: $border-color;
        width: 8px;
        height: 30px;
        display: inline-block;
        position: absolute;
        right: 100%;
        top: 0;
        border-top: 0;
        transform: skewX(25deg);
    }

    
}


    .loading-enter-active,
    .loading-leave-active {
        transition: opacity 2s ease, transform 2s ease;
    }

    .loading-enter-from,
    .loading-leave-to {
        opacity: 0;
        transform: scale(0);
    }

    .loading-enter-active{
        display: flex;
        transform: scale(1.5);
    }

    // .loading-leave-active{
    //     display: flex;
    // }
    


</style>