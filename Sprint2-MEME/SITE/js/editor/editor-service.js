"use strict"

var gCanvas
var gCtx
var gCurrShape
// var gline = [
//   gMeme.selectedLineIdx = currMeme.id

//   var currLine = +gMeme.selectedLineIdx
//   gMeme.lines = []
//   gMeme.lines[currLine] = {
//     txt: "I sometimes eat Falafel",
//     size: 20,
//     align: "center",
//     color: "red",
//     lineX: 10,
//     lineY: 10,
// ]
function toBigFont() {
  let currLine = +gMeme.selectedLineIdx
  let currDataMeme = gMeme.lines[currLine]
  let sizeFont = +currDataMeme.size
  sizeFont += 10
  //   update model
  currDataMeme.size = sizeFont

  gCtx.font = `${sizeFont}px sans-serif`
  drawImgOnCanvas(gMeme.selectedImgId)
  // gCtx.strokeText(currDataMeme.txt, currDataMeme.lineX, currDataMeme.lineY)
  //   gCtx.fillText(gline[0].txt, gline[0].lineX, gline[0].lineY)
}
function toSmallerFont() {
  console.log("hii smaller", gCtx)
  let currLine = +gMeme.selectedLineIdx
  let currDataMeme = gMeme.lines[currLine]
  let sizeFont = +currDataMeme.size
  sizeFont -= 10
  //   update model
  currDataMeme.size = sizeFont

  gCtx.font = `${sizeFont}px sans-serif`
  drawImgOnCanvas(gMeme.selectedImgId)
  // gCtx.strokeText(currDataMeme.txt, currDataMeme.lineX, currDataMeme.lineY)
  //   gCtx.fillText(gline[0].txt, gline[0].lineX, gline[0].lineY)
}

function clearCanvas() {
  gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
}
function toChangeColor() {
  let currLine = +gMeme.selectedLineIdx
  let currDataMeme = gMeme.lines[currLine]
  //   update model
  currDataMeme.color = "red"

  gCtx.fillStyle = "red"
  gCtx.fillText(currDataMeme.txt, currDataMeme.lineX, currDataMeme.lineY)
  //   gCtx.strokeText(gline[0].txt, gline[0].lineX, gline[0].lineY)
}
