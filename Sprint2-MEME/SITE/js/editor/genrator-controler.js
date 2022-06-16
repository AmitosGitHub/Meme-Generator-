"use strict"
const imgFileInput = document.querySelector("#imgFileInput")
const topTxtInput = document.querySelector("#topTxt")
const bottomTxtInput = document.querySelector("#bottomTxt")
const canvas = document.querySelector("#meme")
let image

function renderGenerInput() {
  const strHTML = `
        <label for="topTxt">Top Text</label>
        <input type="text" id="topTxt" />

        <label for="bottomTxt">Bottom Text</label>
        <input type="text" id="bottomTxt" />
          `

  const elInput = document.querySelector(".input-txt")

  elInput.innerHTML = strHTML
}

function renderGenerfiles() {
  const strHTML = `
        <label for="imgFileInput">Select an Image</label>
        <input type="file" id="imgFileInput" />
  
        <a href="#" onclick="onDownloadCanvas(this)" download="file-name"
        >Dowanload</a>
         `

  const elFile = document.querySelector(".file-meme")

  elFile.innerHTML = strHTML
}

function renderGenerBtnGame() {
  const strHTML = `
    <img class="btn-Game" src="img-icon/increase-font-icon.png" alt="" onclick="onBiggerTxt()">
    <img class="btn-Game" src="img-icon/decrease-font-icon.png" alt="" onclick="onSmallerTxt()">
    <img class="btn-Game" src="img-icon/paint-board-and-brush.png" alt="" onclick="onChangeColor()">
    <img class="btn-Game" src="img-icon/align-to-left.png" alt="" onclick="onAlignLeft()">
    <img class="btn-Game" src="img-icon/center-text-alignment.png" alt="" onclick="onAlignCenter()">
    <img class="btn-Game" src="img-icon/align-to-right.png" alt="" onclick="onAlignRight()">
    <img class="btn-Game" src="img-icon/trash.png" alt="" onclick="onClearCanvas()">
           `

  const elBtnGame = document.querySelector(".conrol-btn")

  elBtnGame.innerHTML = strHTML
}
function openEditorMeme() {
  const elGEditor = document.querySelector(".meme-editor")
  elGEditor.classList.add("open")
  initCanvas()

  renderGenerInput()
  renderGenerfiles()
  renderGenerBtnGame()
}

function initCanvas() {
  gCanvas = document.querySelector("#meme-canvas")
  gCtx = gCanvas.getContext("2d")
}

function drawImgOnCanvas(memeId) {
  let meme = getMemeSelcted(memeId)
  console.log("hi is drawmeme", meme)
  image = new Image()
  image.src = getImgId(memeId).url
  console.log("meme.url", getImgId(memeId).url)
  image.onload = () => {
    updateMemeCanvas(image, "topTxtInput", "bottomTxtInput")
  }
}

// imgFileInput.addEventListener("change", () => {
//   const imgDataUrl = URL.createObjectURL(imgFileInput.files[0])

//   image = new Image()
//   image.src = imgDataUrl

//   image.addEventListener("load", () => {
//     updateMemeCanvas(image, topTxtInput.value, bottomTxtInput.value)
//   })
// })
function updateMemeCanvas(img, topTxt = "hello", bottomTxt = "world") {
  const yoffset = gCanvas.height
  const locX = img.width / 2
  const heightImg = img.height

  gCtx.drawImage(img, 0, 0)

  //   add top text
  drawText(topTxt, locX, yoffset / 5, "top")

  //   add bottom text
  drawText(bottomTxt, locX, heightImg - yoffset / 5, "", "", "bottom")
  console.log("gCtx in update", gCtx)
}

function drawText(text, x, y, sizeFont = 40, color = "white", loc = "top") {
  gCtx.strokeStyle = "black"
  gCtx.lineWidth = 2
  gCtx.fillStyle = color
  gCtx.textAlign = "center"

  gCtx.font = `${sizeFont}px sans-serif`

  // ---model----
  let currLine = +gMeme.selectedLineIdx
  gMeme.lines[currLine] = {
    txt: text,
    size: +gCtx.font.slice(0, 2),
    align: gCtx.textAlign,
    color: gCtx.fillStyle,
    lineX: x,
    lineY: y,
  }

  //update canvas---
  gCtx.textBaseline = loc
  gCtx.fillText(text, x, y)
  gCtx.strokeText(text, x, y)
}
function onClearCanvas() {
  clearCanvas()
}
function onDownloadCanvas(elLink) {
  const data = gCanvas.toDataURL()
  elLink.href = data
  elLink.dowanload = "puki"
}
function onBiggerTxt() {
  toBigFont()
}
function onSmallerTxt() {
  toSmallerFont()
}
function onChangeColor() {
  console.log("en color", Event)
  toChangeColor()
}
// onAlignLeft()
// onAlignCenter()
// onAlignRightb

// function renderMeme(InputText = '') {
//   const { selectedImgId, selectedLineIdx, lines } = getMeme()
//   drawImg(selectedImgId, lines, InputText)

// }

// function resizeCanvas() {
//   var elContainer = document.querySelector(".container-my-canvas")

//   console.log("elContainer.offsetWidth-20", elContainer.offsetWidth - 20)
//   gCanvas.width = elContainer.offsetWidth - 20
// }
