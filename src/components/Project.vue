<template>
    <div :class="[{active: isActive }, 'floppy-disk']" 
          
         :style="{zIndex: zI, marginBottom: mB + 'rem',}">
        <div class="content">
            <span class="row">{{name}}</span>
            <span class="row">{{description}}</span>
            <span class="row"></span>
        </div>
        <div class="cover">
            <div class="hole"></div>
        </div>
    </div>
</template>

<script>
    
    export default {
        props: ['name', 'description', 'zI', 'mB','isActive'],
        data (){
            return{
                counter: 0,
            }
        },
        methods: {
            
        }  
    }
</script>

<style lang="scss" scoped>
$border-color: #333333;

.floppy-disk{
    border: 6px solid $border-color;
    border-radius: 5px;
    border-bottom-left-radius: 30px;
    box-shadow: -5px 8px 10px #333333;
    height: 200px;
    width: 200px;
    position: absolute;
    background-color: #fff;
    display: flex;
    justify-content: center;
    cursor: pointer;
    // transform: scale(0.7);
    // margin-bottom: 0;
    transform: scale(1) translateY(0);
    transition: all 250ms;

    &:hover{
        transform: scale(1.2) translate(2rem, -1rem);
        z-index: 20 !important;
    }
    &.active{
        transform: scale(1.2) translate(2rem, -1rem);
        z-index: 19;
    }
}

.content{
    border: 4px solid $border-color;
    border-top: 0;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    width: 75%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    
    .row{
        display: inline-block;
        width: 80%;
        border-bottom: 2px solid #333333;
        margin-bottom: 0.5rem;
        background-color: #fff;
        &:first-child{
            text-transform: uppercase;
            font-weight: 800;
        }
        &:nth-child(2){
            font-size: 0.8rem;
        }
        &:last-child{
            margin-top: 0.7rem;
            margin-bottom: 0;
        }
    }
}

.cover{
    position:absolute;
    bottom: 0;
    left: 28px;
    width: 50px;
    height: 35px;
    border: 4px solid $border-color;
    border-bottom: 0;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
    background-color: #fff;

    .hole{
        width: 6px;
        height: 18px;
        background-color: $border-color;
    }
}

</style>