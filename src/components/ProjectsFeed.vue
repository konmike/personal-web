<template>
  <transition name="modal">
    <div :class="[{ show: show }, 'projects-feed']" v-if="show">
      <ProjectsClose />
      <transition-group name="list" tag="ul" class="projects-list">
        <li v-for="project in projects" :key="project.id">
          <ProjectCard :project="project" />
        </li>
      </transition-group>
    </div>
  </transition>
</template>

<script>
import axios from "axios";
import ProjectCard from "@/components/ProjectCard";
import ProjectsClose from "@/components/ProjectsClose";

export default {
  components: {
    ProjectsClose,
    ProjectCard,
  },
  data() {
    return {
      show: false,
      projects: [],
    };
  },
  methods: {
    getTitle(data) {
      const arr = data.split("\n");
      return arr[0].replace("#", "").trim();
    },
  },

  mounted() {
    this.emitter.on("show-projects", (data) => {
      this.show = data;

      if (this.projects.length != 0) return;
      axios
        .get(`https://api.github.com/users/konmike/repos`)
        .then((res) => {
          res.data.forEach((el) => {
            axios
              .get(
                `https://raw.githubusercontent.com/konmike/` +
                  el.name +
                  `/master/README.md`
              )
              .then((readme) => {
                this.projects.push({
                  id: el.id,
                  title: this.getTitle(readme.data),
                  name: el.name,
                  description: el.description,
                  githubUrl: el.html_url,
                  link: el.homepage,
                  tags: el.topics,
                  left: true,
                });

                this.projects.sort((a, b) => {
                  return Number(b.id) - Number(a.id);
                });

                let left = true;
                this.projects.forEach((element) => {
                  element.left = left;
                  left = !left;
                });
              })
              .catch((err) => {
                console.log(err);
              });
          });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  },
};
</script>
