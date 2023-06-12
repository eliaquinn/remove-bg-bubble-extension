const emptyState = chrome.runtime.getURL("icons/default.jpg")
const tabSidebar = document.querySelector(".main-tab-bar")
const windowEditImage = document.querySelector(".mainwindow")
const button = document.createElement("div")
const label = document.createElement("label")

button.classList.add("tab")
button.classList.add("tabs-10-1")
button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-image" viewBox="0 0 16 16">
  <path d="M6.502 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
  <path d="M14 14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5V14zM4 1a1 1 0 0 0-1 1v10l2.224-2.224a.5.5 0 0 1 .61-.075L8 11l2.157-3.02a.5.5 0 0 1 .76-.063L13 10V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4z"/>
</svg>`
label.innerText = "Editar"

button.append(label)
tabSidebar.append(button)

const mainDiv = document.createElement("div")
mainDiv.classList.add("tabs-10-1")

const windowEditor = `
<div class="tab-title">
  <div class="title">Remover Fundo da Imagem</div>
  <div class="remove-editor">
    <div class="editor">
      <div class="container-wrapper">
        <div class="container-left">
            <label>Fonte:</label>
            <div class="input-field">
                <label for="formFileSm" class="input-image-field">Selecione uma imagem.</label>
                <input id="formFileSm" type="file" hidden>
            </div>

            <button type="button" class="btn-image custom-button">Remover Fundo</button>

            <div class="preview-image">
                <label>Pré-visualização</label>
                <div class="original-image">
                    <img src="https://www.filmshusid.fo/wp-content/themes/films/assets/images/default.png" alt="">
                </div>
            </div>

            <div class="details">
                <ul>
                    <li>
                        <span>Nome:</span>
                        <p>Teste beta.png</p>
                    </li>
                    <li>
                        <span>Tamanho:</span>
                        <p>12kb</p>
                    </li>
                    <li>
                        <span>Dimensão:</span>
                        <p>50x33</p>
                    </li>
                </ul>
            </div>
        </div>

        <div class="container-right">
            <label>Imagem Modificada:</label>
            <img src="https://www.filmshusid.fo/wp-content/themes/films/assets/images/default.png" alt="">
            <button class="custom-button">Salvar</button>
        </div>
      </div>
    </div>
    </div>
  </div>
</div>`

mainDiv.innerHTML = windowEditor

windowEditImage.append(mainDiv)

const load = () => {
  const fileInput = document.querySelector("#formFileSm")
  const previewImg = document.querySelector(".original-image img")
  let file = fileInput.files[0]
  if (!file) return
  previewImg.src = URL.createObjectURL(file)
  // previewImg.addEventListener("load", () => {
  //   document.querySelector(".container").classList.remove("disable")
  // })
}

fileInput.addEventListener("change", load)
