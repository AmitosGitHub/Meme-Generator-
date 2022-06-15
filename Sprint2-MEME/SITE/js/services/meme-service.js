"use strict"

var gImgs = []

var gMeme = {
  selectedImgId: 5,
  selectedLineIdx: 0,
  lines: [
    {
      txt: "I sometimes eat Falafel",
      size: 20,
      align: "left",
      color: "red",
    },
  ],
}
const STORAGE_KEY = "ImgMemes"
var gIdMeme = 7

function getImgsForDisplay() {
  if (!gImgs || !gImgs.length) _createMemes()
  var Imgs = gImgs

  // books = books.filter((book)=>book.name.includes(gFilterBy.name))
  // books = books.filter((book)=>book.price<(gFilterBy.maxPrice))

  // gFilteedBooksCount =books.length
  // const starIdx =gPageIdx * PAGE_SIZE
  // books = books.slice(starIdx,starIdx+PAGE_SIZE)

  return Imgs
}

function _createMeme(id = gIdMeme, keywords = ["funny", "cat"]) {
  //   gIdMeme++
  return {
    id,
    url: `img-meme-square/${id}.jpg`,
    keywords,
  }
}

function _createMemes() {
  var memes = loadFromStorage(STORAGE_KEY)

  if (!memes || !memes.length) memes = []

  for (var i = 0; i < 6; i++) {
    var id = i + 1
    var keywords = ["funny", "cat"]

    memes.push(_createMeme(id, keywords))
  }
  gImgs = memes
  _saveToStorage()
}

function getImgId(ImgId) {
  const imgIdx = gImgs.findIndex((img) => ImgId === img.id)
  return gImgs[imgIdx]
}

function getGImgs() {
  let memes = gImgs
  return memes
}

function _saveToStorage() {
  saveToStorage(STORAGE_KEY, gImgs)
}
