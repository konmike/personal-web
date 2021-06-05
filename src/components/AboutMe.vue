<template>
    <dl class="about-me">
        <dt>Uživatel:</dt>
        <dt>Pozice:</dt>
        <dt>Charakteristika:</dt>
    </dl>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.about-me{
        animation: showAboutMe 3000ms 250ms;
        color: #fff;
        text-align: left;
        padding-left: 1rem;
        opacity: 1;

        dt{
            font-family: 'Press Start 2P';
            margin-bottom: 1rem;
        }
}

@keyframes showAboutMe {
    from {
        opacity: 0;
    }
    
    to{
        opacity: 1;
    }
}
</style>