<template>
    <div class="loader">
        <span class="circle"></span>
        <span class="logo">MK</span>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
$cyan: #60daaa;
$yellow: #fbca67;
$orange: #ff8a30;
$red: #f45e61;
$purple: #6477b9;
$blue: #0eb7da;

.loader{
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        transform: scale(0);
        position: relative;

        .logo{
            color: white;
            display: block;
            font-size: 2.3rem;
            font-weight: 800;
            position: absolute;
        }

        .circle {
            border-radius: 100%;
            box-shadow: none;
            position: absolute;
            width: 100px;
            height: 100px;
            animation: rotating 7s linear;
            border: 4px dotted $blue;

            &::before,
            &::after {
                border-radius: 100%;
            }
        }
        @keyframes rotating {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
}

@keyframes loading {
    from {
        opacity: 0;
    }
    
    to{
        opacity: 1;
    }
}
</style>