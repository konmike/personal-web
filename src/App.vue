<template>
  <Menu></Menu>
  <Loader />
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import { RouterView } from 'vue-router';
import Loader from './components/Loader.vue';
import Menu from './components/Menu.vue';

export default {
  components: {
    Loader,
    Menu,
  },
  data() {
    return {
      loading: false,
    };
  },
};
</script>

<style lang="scss">
#app {
  display: grid;
  grid-template-rows: min-content auto;
  row-gap: 2em;
  min-height: calc(100vh);

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
}

/* route transitions */
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
