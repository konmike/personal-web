<template>
    <ul class="menu">
        <li v-for="(item, index) in items" 
            :key="index"
            :class="[{'active': item.isActive}, 'item']"
            @click="chooseItem(index)"
            @mouseover="changeActive(index)"
        >{{item.title}}</li>
    </ul>
</template>

<script>
    export default {
        data(){
            return{
                items: [
                    {title: 'O mně', isActive: true}, 
                    {title: 'Projekty', isActive: false}, 
                    {title: 'Kontakt', isActive: false}
                    ],
            }
        },
        methods: {
            getIdActive(){
                return this.items.findIndex(item => item.isActive === true);
            },
            chooseItem(i){
                this.emitter.emit('menuItem', i);
            },
            changeActive(i){
                var idActive = this.getIdActive();
                this.items[idActive].isActive = false;
                this.items[i].isActive = true;
            }

        },
        mounted(){
            var self = this;
            document.onkeydown = (evt) => {
                evt = evt || window.event;
                if (evt.keyCode == 77) {
                    self.emitter.emit('showMenu');
                    return
                }
                if(evt.keyCode === 74 || evt.keyCode === 40){
                    var idActive = self.getIdActive();
                    (idActive !== 2) ? self.changeActive(++idActive) : self.changeActive(0);
                    return
                }
                if(evt.keyCode === 75 || evt.keyCode === 38){
                    var idActive = self.getIdActive();
                    (idActive !== 0) ? self.changeActive(--idActive) : self.changeActive(2);
                    return 
                }
                if(evt.keyCode === 13){
                    var idActive = self.getIdActive();
                    self.chooseItem(idActive);
                    return
                }
                if(evt.keyCode === 32){
                    self.emitter.emit('powerOnKeyboard');
                    return
                }
                if(evt.keyCode === 27){
                    self.emitter.emit('showMenu');
                    return
                }
            };
        }
    }
</script>