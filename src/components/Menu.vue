<template>
    <div>
        <button :class="[{'active': aboutMeShow}, 'about-me-button']" @click="aboutMeOn">O mně</button>
        <button :class="[{'active': contactShow}, 'contact-button']"  @click="contactOn">Kontakt</button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>