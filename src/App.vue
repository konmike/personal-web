<template>
  
  <aside :class="[{'show': isShow}, 'projects']">
    <Project v-for="(project) in projects" 
            :key="project"
            :name="project.title"
            :description="project.description"
            :zI="project.zI"
            :mB="project.mB"
            :isActive="project.isActive"
            @click="checkActive(project.id)"
    />
  </aside>
  
  <PC />

  <button :class="[{'show': isShow}, {'active': contactShow}, 'contact-button']"  @click="contactOn">Kontakt</button>
  
</template>

<script>
import Project from './components/Project.vue'
import PC from './components/PC.vue'
import { computed } from 'vue'

export default {
  components: {
    Project, PC
  },
  data(){
    return{
      projects: [
        {
          id: 1,
          title: 'Blog',
          description: 'Wordpress',
          zI: 10,
          mB: 0,
          isActive: false,
        },
        {
          id: 2,
          title: 'E-shop',
          description: 'HTML, CSS',
          zI: 9,
          mB: 4,
          isActive: false,
        },
        {
          id: 3,
          title: 'Redesign',
          description: 'Wordpress',
          zI: 8,
          mB: 8,
          isActive: false,
        },
        {
          id: 4,
          title: 'Evidence',
          description: 'Symfony, Twig',
          zI: 7,
          mB: 12,
          isActive: false,
        },
        {
          id: 5,
          title: 'Kalendář',
          description: 'Spring, JS',
          zI: 6,
          mB: 16,
          isActive: false,
        },
        {
          id: 6,
          title: 'PF UK',
          description: 'Drupal',
          zI: 5,
          mB: 20,
          isActive: false,
        },
      ],
      isShow: false,
      contactShow: false,
      currentActive: 0,
    }
    
  },
  methods: {
      closeActiveProject(){
        if(this.currentActive != 0){
          var getActive = this.projects.find(obj => {
            return obj.id === this.currentActive
          })

          if(getActive.isActive)
            getActive.isActive = false;
        }
      },
      contactOn(){
        this.emitter.emit('contact-coming','')
        this.closeActiveProject();
        this.contactShow = !this.contactShow;
      },
      checkActive(id){
        // console.log(id);
        var getCurrentActive = this.projects.find(obj => {
          return obj.id === this.currentActive
        })
        this.currentActive = id;

        if(getCurrentActive != undefined && getCurrentActive.id != id){
          getCurrentActive.isActive = false;
        }
        var getNewActive = this.projects.find(obj => {
          return obj.id === id
        })
        getNewActive.isActive = !getNewActive.isActive;

        this.emitter.emit('projects', id);
        if(this.contactShow)
          this.contactShow = false;
      }
  },
  mounted() {
      this.emitter.on('powerOn', () => {
      this.isShow = !this.isShow;
      this.closeActiveProject();     
    })
  }
}
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style lang="scss">
body{
  margin:0;
  overflow: hidden;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-height: 100vh;
  height: 100vh;
  width: 100%;
  max-width: 100%;
  display: flex;
  box-sizing: border-box;
}
.projects{
  position: relative;
  height: 100vh;
  max-height: 100vh;
  width: 30%;
  max-width: 30%;
  margin-right: -15%;
  background-color: transparent;
  left: -500px;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 2rem 0;
  box-sizing: border-box;
  transition: all 1000ms 0s;

  &.show{
    left: 0;
    margin-right: 0;
    transition: all 1000ms 4s;
  }
}
.contact-button{
    position: absolute;
    top: 0;
    right: -150px;
    box-sizing: border-box;
    background: none;
    border: 0;
    cursor: pointer;
    margin: 1rem 1rem 0 0;
    color: #333;
    font-weight: 800;
    font-size: 1.4rem;
    text-transform: uppercase;
    transition: right 1000ms 0s, color 250ms;
    text-decoration: underline;

    &:hover, &.active{
      color: #2c3e50;
      text-decoration: none;
    }
    &.show{
      right: 0;
      transition: right 1000ms 4s;
    }
}

.project-content{
    color: #fff;
    font-family: 'Press Start 2P';
    ul{
        text-align: left;
        li{
            margin-bottom: 0.5rem;
            line-height: 1.5rem;
        }
    }
}
.link{
    color: #fff;
    transition: all 250ms;
    
    &:hover{
        color: yellow;
        text-decoration: none;
    }
}
.svg-inline--fa{
    width: 60px;
}

// .button-enter-from{
//   right: -150px;
// }
// .button-enter-active{
//   animation: contactMove 1s 8s forwards;
// }
// .button-leave-active{
//   right: -150px;
// }

// .projects-enter-active{
//   animation: projectsMove 1s 8s forwards;
// }
// .projects-leave-active{
//   left: -500px;
// }

</style>
