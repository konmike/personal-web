<template>
    <div class="menu">
        <button :class="[{'active': aboutMeShow}, 'about-me-button']" @click="aboutMeOn">O mně</button>
        <button :class="[{'active': contactShow}, 'contact-button']"  @click="contactOn">Kontakt</button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.menu{
    position: absolute;
    // top: 0;
    // right: -150px;
    box-sizing: border-box;
    transition: right 1000ms 0s, color 250ms;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 1rem 1rem 0 0;

    &.show{
    //   right: 0;
      transition: right 1000ms 4s;
    }

}
.contact-button, .about-me-button{
    box-sizing: border-box;
    background: none;
    border: 0;
    cursor: pointer;
    color: #333;
    font-weight: 800;
    font-size: 1.4rem;
    text-transform: uppercase;
    text-decoration: underline;

    &:hover, &.active{
      color: #2c3e50;
      text-decoration: none;
    }
}

</style>