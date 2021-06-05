<template>
<div>
    <span class="logo">MK</span>
    <span class="loader">...</span>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
div{
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        transform: scale(0);
        // position: relative;
        // background-color: #2c3e50;
        // background-color: red;
        // border-radius: 40px;
        // z-index: 11;

        .logo, .loader{
            // animation: loading 2000ms 500ms 3 running;
            // opacity: 0;
            color: white
        }
        .logo{
            font-size: 2.3rem;
            font-weight: 800;
        }
        .loader{
            font-size: 0.9rem;
        }

}

        @keyframes loading {
    from {
        
        opacity: 0;
    }
    
    to{
        opacity: 1;
        
        // opacity: 0;
    }
}
</style>