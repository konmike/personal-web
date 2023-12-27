<template>
  <svg class="hidden">
    <symbol id="icon-folderback" viewBox="0 0 20 16">
      <title>folder-back</title>
      <path
        d="M7.5,0C7.4,0,2,0,2,0C0.9,0,0,0.9,0,2l0,12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4c0-1.1-0.9-2-2-2c0,0-7.5,0-8,0C9,2,9.9,0,7.5,0z" />
    </symbol>
    <symbol id="icon-foldercover" viewBox="0 0 20 16">
      <title>folder-cover</title>
      <path d="M2,2h16c1.1,0,2,0.9,2,2v10c0,1.1-0.9,2-2,2H2c-1.1,0-2-0.9-2-2V4C0,2.9,0.9,2,2,2z" />
    </symbol>
    <symbol id="icon-padlock" viewBox="0 0 24 33.6">
      <title>padlock</title>
      <path
        d="M23,13.5h-1.7V9.4C21.4,4.2,17.2,0,12,0C6.8,0,2.6,4.2,2.6,9.4v4.1H1c-0.5,0-1,0.4-1,1v18.2c0,0.5,0.4,1,1,1H23c0.5,0,1-0.4,1-1V14.4C24,13.9,23.6,13.5,23,13.5z M13.5,24.5v3.9c0,0.3-0.3,0.6-0.6,0.6h-1.8c-0.3,0-0.6-0.3-0.6-0.6v-3.9c-0.7-0.5-1.1-1.3-1.1-2.1c0-1.4,1.2-2.6,2.6-2.6c1.4,0,2.6,1.2,2.6,2.6C14.6,23.3,14.2,24.1,13.5,24.5z M16.9,13.5H7.1V9.4c0-2.7,2.2-4.9,4.9-4.9c2.7,0,4.9,2.2,4.9,4.9V13.5z" />
    </symbol>
  </svg>

  <div class="folder folder--ravi" v-on:click="toggleProject">
    <div class="folder__icon folder__icon--perspective">
      <div class="folder__feedback"></div>
      <div class="folder__icon-img folder__icon-img--back">
        <svg class="folder__icon-svg">
          <use xlink:href="#icon-folderback"></use>
        </svg>
      </div>
      <div class="folder__icon-deco"></div>
      <div class="folder__preview folder__preview--thumbs">
        <img class="folder__thumb" src="../assets/project-preview/pf-screen-sm.png" />
        <img class="folder__thumb" src="../assets/project-preview/srdce-screen.png" />
        <img class="folder__thumb" src="../assets/project-preview/screenshot-micro.png" />
      </div>
      <div class="folder__icon-img folder__icon-img--cover">
        <svg class="folder__icon-svg">
          <use xlink:href="#icon-foldercover"></use>
        </svg>
        <img class="project-icon" src="../assets/project-icon-yellow.png" alt="Projects" />
      </div>
    </div>
    <h3 class="folder__caption">Projekty</h3>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

export default {
  methods: {
    toggleProject() {
      this.emitter.emit("show-projects", true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  mounted() {
    //https://github.com/codrops/FolderPreviewIdeas
    (function (window) {
      /**
       * FolderFx obj.
       */
      function FolderFx(el) {
        this.DOM = {};
        this.DOM.el = el;
        this.DOM.wrapper = this.DOM.el.querySelector(".folder__icon");
        this.DOM.back = this.DOM.wrapper.querySelector(
          ".folder__icon-img--back"
        );
        this.DOM.cover = this.DOM.wrapper.querySelector(
          ".folder__icon-img--cover"
        );
        this.DOM.feedback = this.DOM.el.querySelector(".folder__feedback");
        this.DOM.preview = this.DOM.el.querySelector(".folder__preview");
        this.DOM.previewElems = this.DOM.preview.children;
        this.totalPreview = this.DOM.previewElems.length;

        this._initEvents();
      }

      /**
       * Remove/Stop any animation.
       */
      FolderFx.prototype._removeAnimeTargets = function () {
        anime.remove(this.DOM.preview);
        anime.remove(this.DOM.previewElems);
        anime.remove(this.DOM.wrapper);
        anime.remove(this.DOM.cover);
        anime.remove(this.DOM.el);
        if (this.DOM.feedback) {
          anime.remove(this.DOM.feedback);
          this.DOM.feedback.style.opacity = 0;
        }
        if (this.DOM.letters) {
          anime.remove(this.DOM.letters);
        }
      };

      FolderFx.prototype._initEvents = function () {
        const self = this;
        this._mouseenterFn = function () {
          self.intimeout = setTimeout(function () {
            self._removeAnimeTargets();
            self._in();
          }, 75);
        };
        this._mouseleaveFn = function () {
          clearTimeout(self.intimeout);
          self._removeAnimeTargets();
          self._out();
        };
        this.DOM.wrapper.addEventListener("mouseenter", this._mouseenterFn);
        this.DOM.wrapper.addEventListener("mouseleave", this._mouseleaveFn);
      };

      /************************************************************************
       * 7: RaviFx.
       ************************************************************************/

      function RaviFx(el) {
        FolderFx.call(this, el);
      }

      RaviFx.prototype = Object.create(FolderFx.prototype);
      RaviFx.prototype.constructor = RaviFx;

      RaviFx.prototype._in = function () {
        // const self = this;

        anime({
          targets: this._reorder(this.DOM.previewElems),
          duration: 400,
          easing: [0.1, 1, 0.3, 1],
          translateY: -70,
          translateX: function (t, i, c) {
            const interval = 60;
            return (
              -1 * interval * Math.floor(c / 2) +
              interval * i +
              ((c / 2) % 1 != 0 ? 0 : interval / 2) +
              "px"
            );
          },
          rotate: function (t, i, c) {
            const interval = 20;
            return (
              -1 * interval * Math.floor(c / 2) +
              interval * i +
              ((c / 2) % 1 != 0 ? 0 : interval / 2) +
              "deg"
            );
          },
          opacity: {
            value: 1,
            duration: 10,
            easing: "linear",
          },
        });

        anime({
          targets: this.DOM.cover,
          duration: 400,
          easing: "easeOutExpo",
          rotateX: [0, -30],
        });
      };

      RaviFx.prototype._out = function () {
        // const self = this;

        anime({
          targets: this.DOM.previewElems,
          duration: 300,
          easing: "easeInBack",
          translateY: 0,
          translateX: 0,
          rotate: 0,
          scale: [1, 0.5],
          opacity: {
            value: 0,
            duration: 10,
            delay: 300,
            easing: "linear",
          },
        });

        anime({
          targets: this.DOM.cover,
          duration: 300,
          delay: 300,
          easing: "easeOutExpo",
          rotateX: 0,
        });

        anime({
          targets: this.DOM.feedback,
          delay: 350,
          easing: [0.1, 1, 0.3, 1],
          opacity: [
            {
              value: 1,
              duration: 10,
            },
            {
              value: 0,
              duration: 500,
              delay: 20,
            },
          ],
          scale: {
            value: [1, 5],
            duration: 800,
          },
        });
      };

      RaviFx.prototype._reorder = function (arr) {
        let newArray = [],
          i = Math.ceil(arr.length / 2),
          j = i - 1;

        while (j >= 0) {
          newArray.push(arr[j--]);
          if (i < arr.length) {
            newArray.push(arr[i++]);
          }
        }
        return newArray;
      };

      window.RaviFx = RaviFx;
    })(window);

    (function () {
      // eslint-disable-next-line no-undef
      new RaviFx(document.querySelector(".folder--ravi"));
    })();
  },
};
</script>

<style lang="scss" scoped>
.hidden {
  position: absolute;
  overflow: hidden;
  width: 0;
  height: 0;
  pointer-events: none;
}
</style>
