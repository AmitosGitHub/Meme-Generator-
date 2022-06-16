"use strict"

function onInit() {
  console.log("hi")
  getImgsForDisplay()
  renderImgMemeGallery()
}

function renderImgMemeGallery() {
  let memeImges = getGImgs()

  const strHTMLs = memeImges.map(
    (meme) =>
      `<div 
        class="img-card img-card${meme.id}" onclick="onSelectedMeme(${meme.id})">
        <img src="${meme.url}" alt="${meme.id}" class="memeId${meme.id}" />
        </div>
        `
  )

  var strHTML = strHTMLs.join("")

  const elGallery = document.querySelector(".main-gallery")

  elGallery.innerHTML = strHTML
}

function onSelectedMeme(memeId) {
  openEditorMeme()
  drawImgOnCanvas(memeId)
}

function onInputSearch() {
  const elSearch = document.querySelector("input")
  let wordSearch = elSearch.value
  console.log("input", wordSearch)

  elSearch.value = ""
}
