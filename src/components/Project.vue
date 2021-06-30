<template>
    <div :class="[{'active': isActive }, 'floppy-disk']">
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
        props: ['name', 'description', 'isActive'],
        data (){
            return{
                
            }
        },
        methods: {
            
        }  
    }
</script>