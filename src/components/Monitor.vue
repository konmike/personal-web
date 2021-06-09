<template>
    <div class="outer">
        <div :class="[{active: isOn}, 'inner']">

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
import Redesign from './projects/Redesign.vue'
import Evidence from './projects/Evidence.vue'
import Calendar from './projects/Calendar.vue'
import Drupal from './projects/Drupal.vue'
import Converter from './projects/Converter.vue'

export default {
    props: [],
    components: {
        Loader, AboutMe, Contact, Blogs,Eshop,Redesign, Evidence, Calendar, Drupal, Converter
    },
    data(){
        return{
            isLoading: false,
            isProject: false,
            isOn: false,
            currentProject: 'AboutMe',
            projects: [
                { id: -1, name: 'AboutMe', },
                { id: 0, name: 'Contact', },
                { id: 1, name: 'Blogs', },
                { id: 2, name: 'Eshop', },
                { id: 3, name: 'Redesign', },
                { id: 4, name: 'Evidence', },
                { id: 5, name: 'Calendar', },
                { id: 6, name: 'Drupal', },
                { id: 7, name: 'Converter', },
            ]
        }
    },
    methods: {
        afterEnter(){
            this.isProject = !this.isProject;
            this.isLoading = false;
        },
        setNewActiveWindow(newWindow){
            if(newWindow === this.currentProject){
                this.isProject = !this.isProject;
                return false
            }
            
            this.currentProject = newWindow;
            return true;
            
        },
        isNotProjectOn(){
            return this.currentProject === 'Contact' ||
                   this.currentProject === 'AboutMe';
                   
        },
        isEmpty(){
            return !this.isProject;
        },
        isTheSame(name){
            return this.currentProject === name;
        }
        
    },
    
    mounted(){
        this.emitter.on('projects', (event) => {
            
            var getName = this.projects.find(obj => {
                return obj.id === event
            })
            // console.log(getName.name);
            let em = this.isEmpty();
            let nPro = this.isNotProjectOn();
            let eq = this.isTheSame(getName.name);
            let res = this.setNewActiveWindow(getName.name);
            
            console.log('Souc: ' + this.currentProject);
            console.log('Klik: ' + getName.name);
            console.log('Eq: ' + eq);

            if(em || nPro)
                this.emitter.emit('floppy', 1);
            else if(!em && !nPro && !eq)
                this.emitter.emit('floppy', 2)
            else
                this.emitter.emit('floppy', 0)

            this.isProject = false;
            if(res || !res && em)
                this.isLoading = true;

        });

        this.emitter.on('contact-coming', () => {
            // this.currentProject = 'Contact';
            if(this.currentProject !== 'AboutMe')
                this.emitter.emit('floppy', 0);

            this.setNewActiveWindow('Contact');

        });
        this.emitter.on('powerOn', (event) => {
            if(event){
                if(this.currentProject !== 'AboutMe' || this.currentProject !== 'Contact')
                    this.emitter.emit('floppy', 0);
                this.isLoading = false;
                this.isProject = false;
                this.isOn = false;
                this.currentProject = 'AboutMe';
            }else{
                this.isLoading = true;
                this.isOn = true;
            }

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
        animation: loading 2s 1s ease;
    }

    .loading-enter-from{
        opacity: 0;
        transform: scale(0);
    }

    .componentFade-enter-active {
        animation: componentFade 2s forwards;
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
            transform: scale(2.5);
        }
    }
</style>