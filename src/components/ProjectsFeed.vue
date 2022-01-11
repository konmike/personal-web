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
      //   console.log(arr[0].replace("#", "").trim());
      return arr[0].replace("#", "").trim();
    },
  },

  mounted() {
    this.emitter.on("show-projects", (data) => {
      this.show = data;
      axios
        .get(`https://api.github.com/users/konmike/repos`)
        .then((res) => {
          const pro = res.data.filter((it) => it.topics.includes("sass"));
          this.projects = [];
          let left = true;
          pro.forEach((el) => {
            // console.log(el);

            axios
              .get(
                `https://raw.githubusercontent.com/konmike/` +
                  el.name +
                  `/master/README.md`
              )
              .then((readme) => {
                // console.log(readme.data);

                this.projects.push({
                  id: el.id,
                  title: this.getTitle(readme.data),
                  name: el.name,
                  description: el.description,
                  githubUrl: el.html_url,
                  link: el.homepage,
                  tags: el.topics,
                  left: left,
                });
                left = left ? false : true;
              })
              .catch((err) => {
                console.log(err);
              });
          });
          //   console.log(pro);
        })
        .catch((error) => {
          console.log(error);
        });

      //   console.log(this.show);
    });
  },
};
</script>
