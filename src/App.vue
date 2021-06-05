<template>
  <aside class="projects">
    <Project name="Počátky" description="HTML, CSS" zI="10" mB="0" size="180"/>
    <Project name="CMS" description="Wordpress, Jomla" zI="9" mB="10rem" size="200"/>
  </aside>

  <PC />
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Project from './components/Project.vue'
import PC from './components/PC.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
body{
  margin:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-height: 100vh;
  height: 100vh;
  display: grid;
  grid-template-columns: 30% 70%;
  box-sizing: border-box;
}
.projects{
  position: relative;
  height: 100vh;
  max-height: 100vh;
  /* width: 300px; */
  /* max-width: 30%; */
  background-color: transparent;
  /* left: 0; */
  /* top: 0; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  box-sizing: border-box;
}
</style>
