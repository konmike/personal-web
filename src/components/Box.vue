<template>
    <div class="box">
        <div :class="[{active: isActive}, 'starter']" @click="$emit('powerOn'); isActive = !isActive">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="power-off" class="svg-inline--fa fa-power-off fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"></path></svg>
        </div>
        <div class="inserter"></div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                isActive: false,
            }
        }
        
    }
</script>

<style lang="scss" scoped>
$border-color: #333333;

.box{
    width: 700px;
    height: 160px;
    border: 8px solid $border-color;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    box-sizing: border-box;
}

.starter{
    border: 7px solid #333333;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;
    display: flex;
    place-content: center;
    place-items: center;
    transition: all 250ms;

    &.active{
        background-color: #2c3e50;
        .fa-power-off{
            fill: #fff;
        }
    }
    .fa-power-off{
        width: 50%;
        height: 50%;
        fill: #333;
    }
}
.inserter{
    border: 7px solid #333333;
    width: 150px;
    height: 2px;
}
</style>