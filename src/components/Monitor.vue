<template>
    <div class="outer">
        <div :class="[{active: isLoading}, 'inner']">

           

                <transition name="loading" @afterEnter="afterEnter">
                    <Loader v-show="isLoading" />
                </transition>
                
                <transition name="componentFade">
                    <component :is="currentProject" v-show="isProject"/>
                </transition>
        </div>
    </div>
    <div class="bottom"></div>
</template>

<script>
import Loader from './Loader.vue'
import AboutMe from './AboutMe.vue'
import Contact from './Contact.vue'
import Blogs from './projects/Blogs.vue'
import Eshop from './projects/Eshop.vue'

export default {
    props: [],
    components: {
        Loader, AboutMe, Contact, Blogs,Eshop
    },
    data(){
        return{
            isLoading: false,
            isProject: false,
            currentProject: 'AboutMe',
        }
    },
    methods: {
        afterEnter(){
            this.isProject = !this.isProject;
        },
        
    },
    
    mounted(){
        this.emitter.on('projects', (event) => {
            if(event === 1){
                this.currentProject = 'Blogs';
            }
            if(event === 2){
                this.currentProject = 'Eshop';
            }

        });

        this.emitter.on('contact-coming', () => {
            this.currentProject = 'Contact';
        });
        this.emitter.on('powerOn', () => {
            if(this.isLoading){
                this.isLoading = false;
                this.isProject = false;
                this.currentProject = 'AboutMe';
            }else
                this.isLoading = true;

        })
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
    .loading-enter-active{
        display: flex;
        // transform: scale(1.5);
        // transition: opacity 3s ease, transform 3s ease;
        animation: loading 3s 1s ease;
    }

    .loading-enter-from{
        opacity: 0;
        transform: scale(0);
    }

    .componentFade-enter-active {
        animation: componentFade 3s forwards;
    }

    .componentFade-leave-active {
        opacity: 0;
        transform: scale(0);
    }
    .componentFade-leave-from {
        opacity: 0;
        transform: scale(0);
    }

    @keyframes componentFade {
        from {
            opacity: 0;
        }
        
        to{
            opacity: 1;
        }
    }
    @keyframes loading {
        from {
            opacity: 0;
            transform: scale(0);
        }
        
        to{
            opacity: 1;
            transform: scale(1.5);
        }
    }
</style>