<template>
  <router-link to="/">
    <div id="loader" class="loader">
      <img
        src="../assets/coder-no-bar-mk.png"
        alt="Coder Icon"
        class="coder-icon"
      />
      <div class="progress-bar">
        <div id="line" class="line"></div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  mounted() {
    // console.log(document.getElementsByTagName("body"));
    if (document.body.clientWidth < 640)
      document.getElementsByTagName("body")[0].style.backgroundImage =
        "linear-gradient(rgba(0, 0, 0, 0.85) 100%, rgba(0, 0, 0, 0.1) 50%), url('../img/back-640.jpg')";
    else {
      document.getElementsByTagName("body")[0].style.backgroundImage =
        "linear-gradient(rgba(0, 0, 0, 0.85) 100%, rgba(0, 0, 0, 0.1) 50%), url('../img/back.webp')";
    }
    window.addEventListener("load", () => {
      const elem = document.getElementById("line");
      Promise.all(
        elem.getAnimations().map(function (animation) {
          return animation.finished;
        })
      ).then(function () {
        document.getElementById("loader").classList.add("static");
        document.getElementById("menu").style.right = 0;
        document.body.style.overflowY = "auto";
        return;
      });
    });
  },

  watch: {
    $route: {
      handler: function (to) {
        // console.log(to);
        if (to.path !== "/") {
          document.getElementById("loader").classList.remove("active");
        } else {
          document.getElementById("loader").classList.add("active");
        }
      },
    },
  },
};
</script>
