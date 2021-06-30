<template>
  <transition name="asideShow">
    <aside :class="['projects']" v-show="showProjects">
      <MenuButton @click="showMenu" />
      <Project v-for="(project) in projects" 
              :key="project"
              :name="project.title"
              :description="project.description"
              :isActive="project.isActive"
              @click="checkActive(project.id)"
              
      />
    </aside>
  </transition>
  
  <PC />

</template>

<script>
import Project from './components/Project.vue'
import PC from './components/PC.vue'
import MenuButton from './components/MenuButton.vue'
import { computed } from 'vue'

export default {
  components: {
    Project, PC, MenuButton
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

      const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      if(width < 1125)
        this.showProjects = !this.showProjects;  
      // console.log(width);
      // console.log(window.screen.width);

      this.emitter.emit('projects', id);
    },
    showMenu(){
      this.showProjects = !this.showProjects;
      this.emitter.emit('showMenu');
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
      this.emitter.on('showProjectMenu', () => {
        this.showProjects = !this.showProjects;
      });
  }
}
</script>