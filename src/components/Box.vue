<template>
    <div class="box">
        <div :class="[{active: isOn}, 'starter']" @click="powerOn">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="power-off" class="svg-inline--fa fa-power-off fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"></path></svg>
        </div>
        <div :class="[{active: isOn}, 'help']">
            <span class="label">Stiskni:</span>
            <ul>
                <li>J/<i class="fas fa-long-arrow-alt-down"></i> - posun dolů</li>
                <li>K/<i class="fas fa-long-arrow-alt-up"></i> - posun nahoru</li>
                <li>Enter - potvrzení</li>
                <li>M - menu</li>
            </ul>
        </div>
        <div class="inserter" @click="isActive = !isActive">
            <div :class="[{'active': isActive}, {'reject': isReject}, {'floppy': fullFloppy}, {'floppyCopy': fullFloppyCopy}, 'fake-disk']">
                <div class="circle"></div>
                <div class="cover">
                    <div class="hole"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                isOn: false,
                isActive: false,
                isReject: false,
                fullFloppy: false,
                fullFloppyCopy: false,
            }
        },
        methods: {
            powerOn(){
                this.emitter.emit('powerOn', this.isOn);
                this.isOn = !this.isOn;
            },
        },
        mounted(){
            this.emitter.on('floppy', (i) => {
                if(i === 0){
                    this.isActive = false;
                    this.fullFloppy = false;
                    this.fullFloppyCopy = false;
                    this.isReject = true;
                }
                if(i === 1){
                    this.isReject = false;
                    this.isActive = true;
                }
                if(i === 2){
                    this.isActive = false;
                    if(!this.fullFloppy && !this.fullFloppyCopy){
                        // console.log('Krok jedna')
                        this.fullFloppy = true;
                        return
                    }

                    if(this.fullFloppy && !this.fullFloppyCopy){
                        // console.log('Krok dva')
                        this.fullFloppy = false;
                        this.fullFloppyCopy = true;
                        return
                    }

                    if(!this.fullFloppy && this.fullFloppyCopy){
                        // console.log('Krok tri')
                        this.fullFloppy = true;
                        this.fullFloppyCopy = false;
                        return
                    }

                }
            });
            this.emitter.on('powerOnKeyboard', () => {
                this.powerOn();
            })
        },
        created(){
            var self = this;
            window.setTimeout(function() {
                self.powerOn();
            }, 500);
        }
        
    }
</script>