"use strict"

function openEditorMeme(meme) {
  console.log("hi is open editor wite meme", meme)
  const strHTML = `   
<div class="container-editor">
<div class="imgMeme">canvas</div>

<div class="contol-editor">

    <div class="input-txt">
        <input type="text" placeholder="CAN'T GET FIRED">
    </div>

    <div class="btn-control-top"></div>

    <div class="btn-control-main"></div>

    <div class="btn-download">
        <button onclick="foo()">Share</button>
        <button onclick="foo()">Download</button>
    </div>
</div>
</div>


`
  const elGEditor = document.querySelector(".meme-editor")
  elGEditor.classList.add("open")

  console.log("elGEditor ", elGEditor)
  elGEditor.innerHTML = strHTML
}
