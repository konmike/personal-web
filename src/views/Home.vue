<template>
  <div class="home">
    <header class="header">
      <h1 class="title">Michal<br />Konečný</h1>
      <h2 class="subtitle">Frontend kodér</h2>
    </header>
    <FolderProjects />
    <ProjectsFeed />
  </div>
</template>

<script>
// @ is an alias to /src
import FolderProjects from "@/components/FolderProjects.vue";
import ProjectsFeed from "@/components/ProjectsFeed.vue";

export default {
  name: "Home",
  components: {
    FolderProjects,
    ProjectsFeed,
  },
};
</script>
