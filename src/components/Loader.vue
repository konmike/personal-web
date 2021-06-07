<template>
    <div>
        <!-- <button class="spin logo circle">MK</button> -->
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

// Basic styles
button {
  background: none;
  border: 0;
  box-sizing: border-box;
  margin: 1em;
  padding: 1em 2em;
  
  // Using inset box-shadow instead of border for sizing simplicity
  box-shadow: inset 0 0 0 2px $red;
  color: $red;
  font-size: inherit;
  font-weight: 700;

  // Required, since we're setting absolute on pseudo-elements
  position: relative;
  vertical-align: middle;

  &::before,
  &::after {
    box-sizing: inherit;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
  }
}

.spin {
  width: 15em;
  height: 15em;
  padding: 0;
  
  &:hover {
    color: $blue;
  }

  &::before,
  &::after {
    top: 0;
    left: 0;
  }

  &::before {
    border: 2px dotted transparent; // We're animating border-color again
    
    // border-top-color: $blue; // Show borders
    // border-right-color: $blue;
    // border-bottom-color: $blue;

    // transition:
    //   border-top-color 0.15s linear, // Stagger border appearances
    //   border-right-color 0.15s linear 0.10s,
    //   border-bottom-color 0.15s linear 0.20s;


    animation: borderTop 150ms linear 3,
               borderRight 150ms linear 100ms 3,
               borderBottom 150ms linear 200ms 3;

  }

  &:hover::before {
    border-top-color: $blue; // Show borders
    border-right-color: $blue;
    border-bottom-color: $blue;

    transition:
      border-top-color 0.15s linear, // Stagger border appearances
      border-right-color 0.15s linear 0.10s,
      border-bottom-color 0.15s linear 0.20s;
  }

  &::after {
    border: 0 dotted transparent; // Makes border thinner at the edges? I forgot what I was doing
  
    // border-top: 2px dotted $blue; // Shows border
    // border-left-width: 2px; // Solid edges, invisible borders
    // border-right-width: 2px; // Solid edges, invisible borders
    // transform: rotate(270deg); // Rotate around circle
    // transition:
    //   transform 0.4s linear 0s,
    //   border-left-width 0s linear 0.35s;

    animation: tranRot 400ms linear infinite,
               borderWidth 0ms linear 350ms infinite,
               others 0ms linear infinite;
  }

  &:hover::after {
    border-top: 2px dotted $blue; // Shows border
    border-left-width: 2px; // Solid edges, invisible borders
    border-right-width: 2px; // Solid edges, invisible borders
    transform: rotate(270deg); // Rotate around circle
    transition:
      transform 0.4s linear 0s,
      border-left-width 0s linear 0.35s; // Solid edge post-rotation
  }
}

.circle {
  border-radius: 100%;
  box-shadow: none;
    
  &::before,
  &::after {
    border-radius: 100%;
  }
}

@keyframes borderTop {
    from{
        border-top-color: transparent;
    }
    to{
        border-top-color: $blue;
    }
}
@keyframes borderBottom {
    from{
        border-bottom-color: transparent;
    }
    to{
        border-bottom-color: $blue;
    }
}
@keyframes borderRight {
    from{
        border-right-color: transparent;
    }
    to{
        border-right-color: $blue;
    }
}

@keyframes others {
    from{
        border-top: 0 dotted $blue; // Shows border
        border-left-width: 0; // Solid edges, invisible borders
        border-right-width: 0; // Solid edges, invisible borders
    }
    to{
        border-top: 2px dotted $blue; // Shows border
        border-left-width: 2px; // Solid edges, invisible borders
        border-right-width: 2px; // Solid edges, invisible borders
    }
}

@keyframes tranRot {
    from{
        transform: rotate(0)
    }
    to{
        transform: rotate(270deg)
    }
}
@keyframes borderWidth {
    from{
        border-left-width: 0;
    }
    to{
        border-left-width: 2px;
    }
}

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

        .logo{
            color: white;
            display: block;
            font-size: 2.3rem;
            font-weight: 800;
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