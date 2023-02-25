<template>
    <div id="aaa">
        <canvas id="canvas" ref="canvas" @mousedown="mousedown" @mouseleave="mouseleave" @mouseup="mouseup"
            @mousemove="mousemove" @wheel="mousezoom" />
    </div>
</template>

<script lang="ts" setup>
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { Item, fabricTypesTable, filteredList, filteredImage } from "~~/composables/models/Item"
import { count } from 'console';
import $ from "jquery";

const props = defineProps([
    "fabricName", "fabricweight", "imageitem", "cloth"
])


console.log(props.imageitem.fabricNumber)

const canvas = ref<HTMLCanvasElement>()
let img = new Image()
const msg = ref(0)
const scale = window.devicePixelRatio
const canvasSize = 600;
const MAX_SCALE = 5
const SCALE_STEP = 0.2
const x_preloadcount: number = 17
const y_preloadcount: number = 7
let imageScale = 1, imageScaleIndex = 0
let isDown = false
let startX
let startY
const width = 2500
const height = 2500
var i = 1
var r = 1
var g = 1
let furid: string = props.imageitem.fabricNumber
let furName = '_' + props.imageitem.fabricNumber + '_1.'
const extension: string = '.jpg'
// マウス座標
let mouseX, mouseY

// 拡大・縮小後の画像表示領域
let zoomWidth, zoomHeight, zoomLeft = 0, zoomTop = 0

//初期実行
onMounted(() => {
    bodyScrollLock();
    loaded()
})

//離脱時実行
onUnmounted(() => {
    bodyScrollUnLock()
})

watchEffect(() => {
    console.log(props.cloth)
    console.log(props.imageitem.fabricWeight)
    if (props.cloth) {
        furid = props.imageitem.fabricNumber
        furName = '_' + props.imageitem.fabricNumber + '_1.'
    }
    // 着衣モデルに変更
    // else {
    //     furid = "T2203-05"
    //     furName = '_' + "T2203-05" + '_1.'
    // }

    const imagePath = new URL('../' + furid + '/x-' + Math.trunc(r) + furName + Math.trunc(i) + extension, import.meta.url).href //localhost 
    img.src = imagePath
})
//list
const itemlists
    = ref([''])
//preload
const preload = () => {
    var board: HTMLImageElement[][] = new Array()
    var itemlist = []
    let i: number = 0
    for (let countI = 0; countI < y_preloadcount; countI++) {
        board[countI] = new Array()
        for (let countJ = 0; countJ < x_preloadcount; countJ++) {
            board[countI][countJ] = new Image()
            board[countI][countJ].src = new URL('../' + furid + '/x-' + Math.trunc(countI) + furName + Math.trunc(countJ + 1) + extension, import.meta.url).href

            itemlists.value.push('../' + furid + '/x-' + Math.trunc(countI) + furName + Math.trunc(countJ + 1) + extension)
            board[countI][countJ].onload = () => {
                console.log(i)
                i++
                msg.value = i - 1
                if (i == x_preloadcount * y_preloadcount) {
                    loaded()
                }
            }



        }
    }



}


const loaded = () => {
    console.log("complet")
    DrawCanvas()
}

//scrolllock
const bodyScrollLock = () => {
    let targetElement: HTMLInputElement = document.querySelector('#canvas') as HTMLInputElement;
    disableBodyScroll(targetElement);
}

// //scrolllock 解除
const bodyScrollUnLock = () => {
    clearAllBodyScrollLocks()
}
const drawImage = () => {
    const ctx = canvas.value?.getContext("2d")
    if (ctx) {
        ctx.drawImage(img, zoomLeft, zoomTop, width / imageScale, height / imageScale, 0, 0, canvasSize * scale, canvasSize * scale);
        ctx.font = '30px "arial black"'
        ctx.fillStyle = 'white'
        ctx.fillText('x' + imageScale.toFixed(1), 0, 100)
        ctx.strokeStyle = 'black'
        ctx.lineWidth = 2
        ctx.strokeText('x' + imageScale.toFixed(1), 0, 100)

    }
}
//canvasに画像読み込み
const DrawCanvas = () => {

    const ctx = canvas.value?.getContext("2d");

    if (ctx?.imageSmoothingEnabled) {
        ctx.imageSmoothingEnabled = false
    }

    if (canvas.value?.style) {
        canvas.value.style.width = "600px"
        canvas.value.style.height = "600px"
        //canvas.value.style.filter = 'hue-rotate(60deg) saturate(0%) brightness(100%)'


    }

    if (canvas.value?.width) {
        canvas.value.width = canvasSize * scale
        canvas.value.height = canvasSize * scale

    }

    if (ctx) {
        img.onload = function () {
            ctx.drawImage(img, zoomLeft, zoomTop, width / imageScale, height / imageScale, 0, 0, canvasSize * scale, canvasSize * scale);

            // 枠の描画

        };
        const imagePath = new URL('../' + furid + '/x-' + Math.trunc(r) + furName + Math.trunc(i) + extension, import.meta.url).href //localhost 
        img.src = imagePath
    }
}

//mosusewheel時
const mousezoom = (event: WheelEvent) => {
    mouseX = event.offsetX * 5.0 //canvas内マウスx座標
    mouseY = event.offsetY * 5.0 //canvas内マウスyd座標
    if (event.deltaY > 0) {
        imageScaleIndex++
        imageScale = 1 + imageScaleIndex * SCALE_STEP
        if (imageScale > MAX_SCALE) {
            imageScale = MAX_SCALE
            imageScaleIndex--
        } else {
            zoomWidth = width / imageScale;
            zoomHeight = height / imageScale

            zoomLeft += mouseX * SCALE_STEP / (imageScale * (imageScale - SCALE_STEP))
            zoomLeft = Math.max(0, Math.min(width - zoomWidth, zoomLeft))

            zoomTop += mouseY * SCALE_STEP / (imageScale * (imageScale - SCALE_STEP))
            zoomTop = Math.max(0, Math.min(height - zoomHeight, zoomTop))
        }
    } else {
        imageScaleIndex--
        imageScale = 1 + imageScaleIndex * SCALE_STEP
        if (imageScale < 1) {
            imageScale = 1
            zoomLeft = 0
            zoomTop = 0
            imageScaleIndex = 0
        } else {
            zoomWidth = width / imageScale
            zoomHeight = height / imageScale

            zoomLeft -= mouseX * SCALE_STEP / (imageScale * (imageScale + SCALE_STEP))
            zoomLeft = Math.max(0, Math.min(width - zoomWidth, zoomLeft))

            zoomTop -= mouseY * SCALE_STEP / (imageScale * (imageScale + SCALE_STEP))
            zoomTop = Math.max(0, Math.min(height - zoomHeight, zoomTop))
        }
    }

    drawImage()
}


//mosueclickされたとき
const mousedown = (event: MouseEvent) => {
    isDown = true
    startX = event.offsetX//クリック時のX座標
    startY = event.offsetY//クリック時のY座標
    console.log("StartX:", startX)
    console.log("startY:", startY)
    console.log("mousedown" + isDown)
}

//mouseがcanvasから離れたとき
const mouseleave = () => {
    isDown = false
    console.log("mouseleave" + isDown)
}

//mouseclicksがcanvasから離れたとき
const mouseup = () => {
    isDown = false
    console.log("mouseup" + isDown)
}

//mouseが動いたとき
const mousemove = (event: MouseEvent) => {
    if (!isDown) return
    event.preventDefault()
    let x = event.movementX //x座標
    let y = event.movementY //y座標
    console.log("x:", x)
    console.log("y:", y)
    i = i - x / 40
    r = r + y / 20

    if (i < 1) {
        i = 16
    }
    else if (i == 0) {
        i = 1
    }
    else if (i >= 17) {
        i = 1
    }

    if (r >= 6) {
        r = 6
    }
    else if (r <= 0) {
        r = 0
    }

    const imagePath = new URL('../' + furid + '/x-' + Math.trunc(r) + furName + Math.trunc(i) + extension, import.meta.url).href //localhost 
    img.src = imagePath
}


</script>
