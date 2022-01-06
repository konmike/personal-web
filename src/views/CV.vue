<template>
  <div class="cv">
    <div class="information me">Michal Konečný</div>
    <div class="information birth-year">narozen v roce 1995</div>
    <ul class="information study">
      <li class="item">
        2020 - absolvent bakalářského oboru Webové a softwarové inženýrství na
        <a href="https://fit.cvut.cz/" class="link"
          >Fakultě informačních technologií, ČVUT</a
        >
      </li>
      <li class="item">
        2015 - absolvent
        <a href="https://www.gymnazium-vk.cz/" class="link"
          >všeobecného gymnázia</a
        >
      </li>
    </ul>

    <div class="information languages">
      Anglický jazyk na úrovni čtení technické dokumentace
    </div>

    <ul class="information jobs">
      <li class="item">
        2019 - současnost, Právnická fakulta Univerzity Karlovy, práce s RS
        Drupal verze 7 a 8, Wordpress, správa webu
        <a href="https://prf.cuni.cz" class="link">prf.cuni.cz</a>, vývoj
        aplikací na automatizaci procesů, tvorba microsites
        <ul class="sub-list">
          <li class="item ref">Reference může dodat:</li>
          <li class="item">
            Stanislav Potěšil<br /><a
              href="mailto:potesil@prf.cuni.cz"
              class="link"
              >potesil@prf.cuni.cz</a
            >
          </li>
        </ul>
      </li>
      <li class="item">
        únor - květen 2020, redesign webové prezentace
        <a href="https://aksm.cz/" class="link">aksm.cz</a> pro Asociaci
        křesťanských spolků mládeže, z.s.
        <ul class="sub-list">
          <li class="item">
            V současnosti probíhá nepravidelná spolupráce na dalším vývoji a
            správě webu.
          </li>
          <li class="item ref">Reference může dodat:</li>
          <li class="item">
            Vojtěch Orlík<br /><a href="mailto:orlik@cirkev.cz" class="link"
              >orlik@cirkev.cz</a
            >
          </li>
          <li class="item">
            František Klein<br /><a href="mailto:klein@cirkev.cz" class="link"
              >klein@cirkev.cz</a
            >
          </li>
        </ul>
      </li>
    </ul>

    <FolderProjects />
    <ProjectsFeed />

    <ul class="information technologies">
      <li class="item">
        V rámci svých projektů jsem nasbíral zkušenosti s těmito technologiemi:
        HTML5, CSS3, Sass, JS, jQuery, Vue.js, PHP, Twig, RS Drupal, RS
        Wordpress, práce s API
      </li>
      <li class="item">
        Mimoto dbám na responzivitu (mobile first) a přehledné UI.
      </li>
      <li class="item">Samozřejmostí je práce s verzovacím systémem Git.</li>
    </ul>

    <div class="information hobbies">
      Ve svém volném čase se rád věnuji svému
      <a href="https://youtube.com/srdcechvaly/" class="link">Youtube kanálu</a>
      s tvorbou titulků k převážně křesťanským videoklipům, četbě knih,
      rybaření, pečení či sportování.
    </div>
  </div>
</template>

<script>
import FolderProjects from "../components/FolderProjects.vue";
import ProjectsFeed from "../components/ProjectsFeed.vue";
export default {
  name: "CV",
  components: { FolderProjects, ProjectsFeed },
};
</script>
