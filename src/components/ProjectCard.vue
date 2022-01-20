<template>
  <article :class="classes" :style="{ '--backgroundImage': getBgImageUrl }">
    <a
      :href="project.link"
      :data-aos="[project.left ? 'fade-right' : 'fade-left']"
      :class="[project.left ? 'left' : 'right', 'project-preview-link']"
      v-if="!mobile"
    >
      <img :src="getImageUrl" alt="Project-image" />
    </a>
    <header class="header">
      <svg
        version="1.1"
        id="Capa_1"
        class="icon svg"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 197.685 197.685"
        style="enable-background: new 0 0 197.685 197.685"
        xml:space="preserve"
      >
        <g>
          <path
            d="M196.286,35.484c-0.888-0.895-2.101-1.396-3.361-1.396H66.402v0.49l-6.055-14.773L0,19.766v158.153
		h197.635v-10.117l0.05-128.946C197.681,37.589,197.188,36.379,196.286,35.484z M188.151,43.615l-0.007,11.048H74.633l-4.531-11.048
		H188.151z M188.115,168.396H9.516V29.296l44.439,0.032l14.29,34.858h119.874v104.209H188.115z"
          />
        </g>
      </svg>

      <a :href="project.githubUrl">
        <img
          src="../assets/github/GitHub-Mark-Light-32px.png"
          alt="Github Logo"
          class="icon"
      /></a>
      <a :href="project.link">
        <img
          src="../assets/external-icon-white.png"
          alt="External icon"
          class="icon"
      /></a>
    </header>
    <main class="main">
      <h1 class="title">{{ project.title }}</h1>
      <div class="content">{{ project.description }}</div>
    </main>
    <footer>
      <ul class="tags-list">
        <li v-for="tag in project.tags" class="tag" :key="tag.id">
          {{ tag }}
        </li>
      </ul>
    </footer>
  </article>
</template>

<script>
import AOS from "aos";
export default {
  props: {
    project: {
      type: Object,
    },
  },
  data() {
    return {
      mobile: false,
      classes: "project-card",
    };
  },
  methods: {
    mobOrDesk() {
      this.mobile = document.body.clientWidth < 640 ? true : false;
      this.classes = this.mobile
        ? "project-card mobile"
        : "project-card desktop";
    },
  },
  computed: {
    getImageUrl() {
      return (
        "https://github.com/konmike/" +
        this.project.name +
        "/blob/master/screenshot.webp?raw=true"
      );
    },
    getBgImageUrl() {
      return (
        "url(https://github.com/konmike/" +
        this.project.name +
        "/blob/master/screenshot.webp?raw=true)"
      );
    },
  },

  mounted() {
    let image = new Image();
    image.src = this.getImageUrl;
    this.mobOrDesk();
    window.addEventListener("resize", this.mobOrDesk);
    AOS.init();
  },
};
</script>
