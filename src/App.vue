<template>
  
  <aside :class="[{'show': showProjects}, 'projects']">
    <Project v-for="(project) in projects" 
            :key="project"
            :name="project.title"
            :description="project.description"
            :isActive="project.isActive"
            @click="checkActive(project.id)"
    />
  </aside>
  
  <PC />

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
          title: 'Blogy',
          description: 'Wordpress',
          isActive: false,
        },
        {
          id: 2,
          title: 'E-shop',
          description: 'HTML, CSS',
          isActive: false,
        },
        {
          id: 3,
          title: 'Redesign',
          description: 'Wordpress',
          isActive: false,
        },
        {
          id: 4,
          title: 'Evidence',
          description: 'Symfony, Twig',
          isActive: false,
        },
        {
          id: 5,
          title: 'Kalendář',
          description: 'Spring, JS',
          isActive: false,
        },
        {
          id: 6,
          title: 'PF UK',
          description: 'Drupal',
          isActive: false,
        },
        {
          id: 7,
          title: 'Converter',
          description: 'PHP, JS',
          isActive: false,
        },
        {
          id: 8,
          title: 'Osobní web',
          description: 'Vue.js',
          isActive: false,
        },
      ],
      showProjects: false,
      currentActive: 0,
      top: 0,
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
    checkActive(id){
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
    }
  },
  mounted() {
      this.emitter.on('powerOn', () => {
        if(this.showProjects) this.showProjects = false;
        this.closeActiveProject();   
      });
      this.emitter.on('showProjects', () => {
        this.showProjects = !this.showProjects;
      });
      this.emitter.on('closeProject', () => {
        this.closeActiveProject();
      });
  }
}
</script>

<style lang="scss">
:root{
  --main-active-background-color: #2c3e50;
  --grey: #333333;
}

body{
  margin:0;
  overflow: hidden;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--main-active-background-color);
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
  opacity: 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem 0;
  box-sizing: border-box;
  transition: opacity 250ms, left 1000ms, margin-right 1000ms, top 250ms;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: #2c3e50;
    border-radius: 10px;
    border: 3px solid #d8d8d8;
  }
  &::-webkit-scrollbar-track {
    background: #d8d8d8;
  }

  &.show{
    left: 0;
    margin-right: 0;
    opacity: 1;
  }
}

.project-content{
    color: #fff;
    font-family: 'Press Start 2P';
    display: flex;
    flex-direction: column;
    max-height: 350px;
    overflow: hidden;
    overflow-y: auto;
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

.button-controls{
  position: absolute;
  top: 50%;
  border: 0;
  background: transparent;
  font-size: 2rem;
  color: #afafaf;
  cursor: pointer;
  transition: font-size 250ms, top 250ms;
  

  &:disabled{
    color: #e0e0e0;
    &:hover{
      font-size: 2rem;
      color: #e0e0e0;
    }
  }

  &:hover{
    font-size: 2.5rem;
    color: var(--main-active-background-color);
  }
}
.up{
  right: 0;
  margin-right: 1rem;
}
.down{
  left: 0;
  margin-left: 1rem;
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
