"use strict"

function onInit() {
  console.log("hi")
  getImgsForDisplay()
  renderImgMeme()
}

function renderImgMeme() {
  let memeImges = getGImgs()
  console.log("memeImges ", memeImges)

  const strHTMLs = memeImges.map(
    (meme) =>
      `<div 
        class="item item${meme.id}" onclick="onSelectedMeme(${meme.id})">
        <img src="${meme.url}" alt="${meme.id}" class="memeId${meme.id}" />
        </div>
        `
  )

  var strHTML = strHTMLs.join("")

  const elGallery = document.querySelector(".main-gallery")

  console.log("strHTML ", strHTML)
  elGallery.innerHTML = strHTML
}

function onSelectedMeme(memeId) {
  console.log("hi-meme", memeId)
  openEditorMeme(memeId)
}

function onInputSearch() {
  const elSearch = document.querySelector("input")
  let wordSearch = elSearch.value
  console.log("input", wordSearch)

  elSearch.value = ""
}
