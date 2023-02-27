<template >
    <div class="aaa">
        <input type="color" id="color" value="#f0000">
        <img src="../public/T2203-05.jpg" class="img-class">
        <div id="bg"></div>
    </div>
</template>

<script lang="ts" setup>
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { Item, fabricTypesTable, filteredList, filteredImage } from "~~/composables/models/Item"
import { count } from 'console';

'use strict';

const color: HTMLInputElement = <HTMLInputElement>document.getElementById('color');
const bg = document.getElementById('bg')!;


</script>
<style lang="css" scoped >
.aaa {
    position: relative;
}

.img-class {
    width: 600px;
    height: 600px;
}

#bg {
    position: absolute;
    top: 0;
    width: 100%;
    height: 110vh;
    mix-blend-mode: hue;
    background: rgb(141, 4, 253)
}

#button {
    width: 30%;
    height: 100vh;
    z-index: 100000;
    position: fixed;

}
</style>
