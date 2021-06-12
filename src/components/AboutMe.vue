<template>
    <dl class="about-me">
      <dt>Uživatel:</dt>
      <dd>Michal Konečný</dd>
      <dt>Pozice:</dt>
      <dd>Front-end vývojář</dd>
      <dt>Předpoklady:</dt>
      <dd>
        <ul>
          <li>absolvent FIT ČVUT,<br />obor Webové inženýrství</li>
          <li>rád využívá HTML5, CSS3, Sass, <br />JS, Vue.js</li>
          <li>zkušenosti s redesignem webu</li>
          <li>aktivní práce s CMS Wordpress, Drupal</li>
          <li>
            aktuálně správce webu
            <a class="link" href="https://prf.cuni.cz">prf.cuni.cz</a> a dalších
            aplikací na PF UK
          </li>
        </ul>
      </dd>
    </dl>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about-me {
  // animation: showAboutMe 3000ms 250ms forwards;
  color: #fff;
  text-align: left;
  padding-left: 1rem;
  box-sizing: border-box;
  height: 350px;
  margin: 1rem 0;
  font-family: "Press Start 2P";

  dt {
    margin-bottom: 1rem;
    display: inline-block;
  }
  dd {
    display: inline-block;
    &:last-child {
      margin-left: 1.5rem;
    }
  }

  ul {
    padding-left: 0;
    margin-top: 0;
    margin-left: 0;
    padding-right: 1rem;
    li {
      line-height: 1.7rem;
      font-size: 0.7rem;
    }
  }
  .link {
    color: #fff;
    transition: all 250ms;

    &:hover {
      color: yellow;
      text-decoration: none;
    }
  }
}
</style>
