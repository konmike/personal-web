<template>
    <div class="box">
        <div :class="[{active: isOn}, 'starter']" @click="powerOn">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="power-off" class="svg-inline--fa fa-power-off fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"></path></svg>
        </div>
        <div :class="[{active: isOn}, 'help']">
            <span class="label">Stiskni:</span>
            <ul>
                <li>K/<i class="fas fa-long-arrow-alt-up"></i> - posun nahoru</li>
                <li>J/<i class="fas fa-long-arrow-alt-down"></i> - posun dolů</li>
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
        }
        
    }
</script>

<style lang="scss" scoped>
$border-color: var(--grey);

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
    border: 7px solid var(--grey);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;
    display: flex;
    place-content: center;
    place-items: center;
    transition: all 250ms;
    position: relative;
    transform: scale(1);

    &.active{
        background-color: var(--main-active-background-color);
        .fa-power-off{
            fill: #fff;
        }
        &::after,&::before{
            display: none;
        }
    }
    .fa-power-off{
        width: 50%;
        height: 50%;
        fill: var(--grey);
    }

    &:hover{
        transform: scale(1.2);
        &::before,&::after{
            display: none;
        }
    }
    &::after,&::before{
        font-family: 'Font Awesome 5 Free';
        font-weight: 800;
        font-size: 3rem;
        color: var(--main-active-background-color);
        position: absolute;
    }
    &::before {
        content: '\f101';
        right: 50px;
        padding-right: 1rem;
        animation: bRight 700ms infinite;
    }
    &::after {
        content: '\f100';
        left: 50px;
        padding-left: 1rem;
        animation: bLeft 700ms infinite;
    }
}
.help{
    font-family: 'Press Start 2P';
    opacity: 0;
    transition: opacity 250ms;
    text-align: left;

    &.active{
        opacity: 1;
        transition: opacity 3s 1s;
    }

    .label{
        display: flex;
        align-items: center;
        text-transform: uppercase;
        &::before{
            font-family: 'Font Awesome 5 Free';
            content: '\f11c';
            font-weight: 600;
            margin-right: 0.5rem;
            padding-bottom: 0.1rem;
        }
    }

    ul{
        list-style: none;
        text-align: left;
        padding: 0;
        margin: 0.5rem 0;
        margin-bottom: 0;
        .fas{
            padding-bottom: 0.2rem;
            padding-right: 0.8rem;
        }
        li{
            display: flex;
            align-items: center;
            margin: 0.3rem 0;
            &:last-child{
                margin-bottom: 0;
            }
        }
    }
}
.inserter{
    border: 7px solid var(--grey);
    width: 200px;
    height: 2px;
    position: relative;

    .fake-disk{
        position: absolute;
        bottom: -450px;
        left: 0;
        box-sizing: border-box;
        border: 6px solid $border-color;
        border-bottom-color: var(--main-active-background-color);
        border-radius: 5px;
        border-bottom-left-radius: 30px;
        box-shadow: -5px 10px 5px var(--main-active-background-color);
        height: 200px;
        width: 200px;
        position: absolute;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;

        &.active{
            bottom: 0;
            height: 2px;
            animation: disk 1000ms forwards;
        }
        &.reject{
            animation: reject 500ms forwards;
        }
        &.floppy{
            animation: floppy 2000ms forwards;
        }
        &.floppyCopy{
            animation: floppyCopy 2000ms forwards;
        }

        .circle{
            border: 4px solid $border-color;
            border-radius: 50%;
            width: 25%;
            height: 25%;
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
    }
}

@keyframes disk {
    0%{
        bottom: -450px;
        height: 200px;
        border-width: 6px;
    }
    50%{
        bottom: -198px;
        height: 200px;
        border-width: 6px;
    }
    100%{
        bottom: 0;
        height: 2px;
        border-width: 1px;
        
    }
}

@keyframes reject {
    0%{
        bottom: 0px;
        height: 2px;
        border-width: 1px;
    }
    50%{
        bottom: -198px;
        height: 200px;
        border-width: 6px;
    }
    100%{
        bottom: -450px;
        height: 200px;
        border-width: 6px;
    }
}

@keyframes floppy {
    0%{
        bottom: 0px;
        height: 2px;
        border-width: 1px;
    }
    25%{
        bottom: -198px;
        height: 200px;
        border-width: 8px;
    }
    50%{
        bottom: -450px;
        height: 200px;
        border-width: 8px;
    }
    75%{
        bottom: -198px;
        height: 200px;
        border-width: 8px;
    }
    100%{
        bottom: 0px;
        height: 2px;
        border-width: 1px;
    }
}

@keyframes floppyCopy {
    0%{
        bottom: 0px;
        height: 2px;
        border-width: 1px;
    }
    25%{
        bottom: -198px;
        height: 200px;
        border-width: 8px;
    }
    50%{
        bottom: -450px;
        height: 200px;
        border-width: 8px;
    }
    75%{
        bottom: -198px;
        height: 200px;
        border-width: 8px;
    }
    100%{
        bottom: 0px;
        height: 2px;
        border-width: 1px;
    }
}

@keyframes bRight {
    0%{
        right: 50px;
        transform: scale(1);
    }
    50%{
        right: 80px;
        transform: scale(1.5);
    }
    100%{
        right: 50px;
        transform: scale(1);
    }
}
@keyframes bLeft {
    0%{
        left: 50px;
        transform: scale(1);
    }
    50%{
        left: 80px;
        transform: scale(1.5);
    }
    100%{
        left: 50px;
        transform: scale(1);
    }
}

</style>