<template>
  
  <aside :class="[{'show': isShow}, 'projects']">
    <button class="button-controls down" @click="changeTopOfProjects(0, 50)" :disabled="top === 0"><i class="fas fa-angle-double-down"></i></button>
    <Project v-for="(project) in projects" 
            :key="project"
            :name="project.title"
            :description="project.description"
            :zI="project.zI"
            :mB="project.mB"
            :isActive="project.isActive"
            @click="checkActive(project.id)"
    />
    <button class="button-controls up" @click="changeTopOfProjects(20, 30)" :disabled="top === 150"><i class="fas fa-angle-double-up"></i></button>
  </aside>
  
  <PC />
<div :class="[{'show': isShow}, 'button-box']">
  <button :class="[{'active': aboutMeShow}, 'about-me-button']" @click="aboutMeOn">O mně</button>
  <button :class="[{'active': contactShow}, 'contact-button']"  @click="contactOn">Kontakt</button>
</div>

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
        {
          id: 7,
          title: 'Converter',
          description: 'PHP, JS',
          zI: 4,
          mB: 24,
          isActive: false,
        },
        {
          id: 8,
          title: 'Osobní web',
          description: 'Vue.js',
          zI: 3,
          mB: 28,
          isActive: false,
        },
      ],
      isShow: false,
      contactShow: false,
      aboutMeShow: true,
      currentActive: 0,
      top: 0,
    }
    
  },
  methods: {
    changeButtonsTop(val){
      let buttons = document.querySelectorAll('.button-controls');
      buttons[0].style.top = val + '%';
      buttons[1].style.top = val + '%';
      
    },
    changeTopOfProjects(topP, topB){
      let aside = document.querySelector('.projects');
      aside.style.top = topP + '%';
      this.changeButtonsTop(topB);
      (topP === 20) ? this.top = 150 : this.top = 0;
    },  

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
      if(this.aboutMeShow) this.aboutMeShow = false;
      this.contactShow = !this.contactShow;
    },
    aboutMeOn(){
      this.emitter.emit('aboutMe','')
      this.closeActiveProject();
      if(this.contactShow) this.contactShow = false;
      this.aboutMeShow = !this.aboutMeShow;
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
      if(this.contactShow) this.contactShow = false;
      if(this.aboutMeShow) this.aboutMeShow = false;
    }
  },
  mounted() {
      this.emitter.on('powerOn', () => {
        this.isShow = !this.isShow;
        this.closeActiveProject();
        if(this.contactShow) this.contactShow = false;     
        if(!this.aboutMeShow) this.aboutMeShow = true;     
      })
  }
}
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
  transition: left 1000ms 0s, margin-right 1000ms 0s, top 250ms;

  &.show{
    left: 0;
    margin-right: 0;
    transition: left 1000ms 4s, margin-right 1000ms 4s, top 250ms;
  }
}

.button-box{
    position: absolute;
    top: 0;
    right: -150px;
    box-sizing: border-box;
    transition: right 1000ms 0s, color 250ms;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 1rem 1rem 0 0;

    &.show{
      right: 0;
      transition: right 1000ms 4s;
    }

}
.contact-button, .about-me-button{
    box-sizing: border-box;
    background: none;
    border: 0;
    cursor: pointer;
    color: #333;
    font-weight: 800;
    font-size: 1.4rem;
    text-transform: uppercase;
    text-decoration: underline;

    &:hover, &.active{
      color: #2c3e50;
      text-decoration: none;
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
    color: #2c3e50;
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
