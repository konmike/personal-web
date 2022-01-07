<template>
  <span class="close" @click="closeProjects">Zavřít</span>
</template>

<script>
export default {
  methods: {
    closeProjects() {
      this.emitter.emit("show-projects", false);
    },
  },
};
</script>
