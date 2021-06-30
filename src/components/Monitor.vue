<template>
    <div class="frame">
        <div :class="[{'active': monitorIsOn}, 'screen']">
                <transition name="componentFade">
                    <BackToProject 
                        @click="showProjectMenu"
                        v-show="currentWindow !== 'Menu' && currentWindow !== 'AboutMe' && currentWindow !== 'Contact' && currentWindow !== 'Blank'"
                    />
                </transition>
                
                <transition name="componentFade">
                    <MenuButton 
                        @click="setNewActiveWindow('Menu')"
                        v-show="currentWindow !== 'Menu' && currentWindow !== 'Blank'"
                    />
                </transition>
                
                <transition name="loading" @afterEnter="afterEnter">
                    <Loader v-show="showLoader" />
                </transition>

                <transition name="componentFade">
                    <component :is="currentWindow" v-show="showContent"/>
                </transition>

        </div>
    </div>
    <div class="pedestal"></div>
</template>

<script>
import Loader from './Loader.vue'
import Menu from './Menu.vue'
import MenuButton from './MenuButton.vue'
import BackToProject from './BackToProject.vue'
import AboutMe from './AboutMe.vue'
import Contact from './Contact.vue'
import Blogs from './projects/Blogs.vue'
import Eshop from './projects/Eshop.vue'
import Redesign from './projects/Redesign.vue'
import Evidence from './projects/Evidence.vue'
import Calendar from './projects/Calendar.vue'
import Drupal from './projects/Drupal.vue'
import Converter from './projects/Converter.vue'
import Personal from './projects/PersonalWeb.vue'

export default {
    props: [],
    components: {
        Loader, Menu, MenuButton, BackToProject, 
        AboutMe, Contact, Blogs,
        Eshop,Redesign, Evidence, 
        Calendar, Drupal, Converter, Personal
    },
    data(){
        return{
            showLoader: false,
            showContent: false,
            monitorIsOn: false,
            currentWindow: 'Menu',
            projects: [
                { id: 1, name: 'Blogs', },
                { id: 2, name: 'Eshop', },
                { id: 3, name: 'Redesign', },
                { id: 4, name: 'Evidence', },
                { id: 5, name: 'Calendar', },
                { id: 6, name: 'Drupal', },
                { id: 7, name: 'Converter', },
                { id: 8, name: 'Personal', },
            ]
        }
    },
    methods: {
        afterEnter(){
            this.showContent = !this.showContent;
            this.showLoader = false;
        },
        setNewActiveWindow(newWindow){
            if(newWindow === this.currentWindow){
                this.showContent = !this.showContent;
                return false
            }
            
            // this.showMenu = false;
            this.showContent = true;
            this.currentWindow = newWindow;
            return true;
            
        },
        isNotProjectOn(){
            return this.currentWindow === 'Contact' ||
                   this.currentWindow === 'AboutMe' ||
                   this.currentWindow === 'Menu';
                   
        },
        isEmpty(){
            return !this.showContent;
        },
        isTheSame(name){
            return this.currentWindow === name;
        },
        showProjectMenu(){
            this.currentWindow = 'Blank';
            this.emitter.emit('showProjectMenu');
        },
        getWidthScreen(){
            return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
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
            
            console.log('Souc: ' + this.currentWindow);
            console.log('Klik: ' + getName.name);
            console.log('Eq: ' + eq);

            if(em || nPro)
                this.emitter.emit('floppy', 1);
            else if(!em && !nPro && !eq)
                this.emitter.emit('floppy', 2)
            else
                this.emitter.emit('floppy', 0)

            this.showContent = false;
            if(res || !res && em)
                this.showLoader = true;

        });

        this.emitter.on('menuItem', (i) => {
            if(this.currentWindow !== 'Menu' && this.currentWindow !== 'AboutMe' && this.currentWindow !== 'Contact')
                this.emitter.emit('floppy', 0); //reject floppy disk
            if( i === 0 ) this.setNewActiveWindow('AboutMe'); 
            if( i === 1 ){
                
                if(this.getWidthScreen() < 1125) this.currentWindow = 'Blank';

                 this.emitter.emit('showProjects');

            }
                
            if( i === 2 ) this.setNewActiveWindow('Contact');
        });

        this.emitter.on('showMenu', () =>{
            if(this.currentWindow !== 'Menu' && this.currentWindow !== 'AboutMe' && this.currentWindow !== 'Contact'){
                this.emitter.emit('floppy', 0); //reject floppy disk
                this.emitter.emit('closeProject');
            }

            if(this.currentWindow === 'Menu') this.showContent = !this.showContent;
            else{
                if(!this.showContent) this.showContent = !this.showContent;
                this.setNewActiveWindow('Menu');
            }
        });

        this.emitter.on('powerOn', (event) => {
            if(event){
                if( this.currentWindow !== 'Menu' && 
                    this.currentWindow !== 'AboutMe' && 
                    this.currentWindow !== 'Contact' 
                  )
                    this.emitter.emit('floppy', 0); //0 == reject floppy-disk
                if(this.showLoader) this.showLoader = false;
                if(this.showMenu) this.showMenu = false;
                if(this.showContent) this.showContent = false;
                if(this.monitorIsOn) this.monitorIsOn = false;
                this.currentWindow = 'Menu';
            }else{
                this.showLoader = true;
                this.monitorIsOn = true;
            }

        });
    }
}
</script>

<style lang="scss" scoped>



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