const ingresaTexto = document.getElementById("ingresaTexto")
const botonEncriptar = document.getElementById("botonEncriptar")
const botonDesencriptar = document.getElementById("botonDesencriptar")
const botonCopiar = document.getElementById("Copiar")
const textoEncriptado = document.getElementById("textoEncriptado")
const imagenBusqueda = document.getElementById("imagenBusqueda")
const infoR = document.getElementById("infoR")
const Right = document.getElementById("Right")

let reemplazar = [
    ["a","ai"],
    ["e","enter"],
    ["i","imes"],
    ["o","ober"],
    ["u","ufat"],
]
function encriptar(newText) {
    let textoEncriptado = "";
    for (let i = 0; i < newText.length; i++) {
        let reemplazo = newText[i];
        for (let j = 0; j < reemplazar.length; j++) {
            if (newText[i] === reemplazar[j][0]) {
                reemplazo = reemplazar[j][1];
                break;
            }
        }
        textoEncriptado += reemplazo;
    }
    return textoEncriptado;
}

function desencriptar(encryptedText) {
    let textoDesencriptado = encryptedText;
    for (let i = 0; i < reemplazar.length; i++) {
        const [original, remplazo] = reemplazar[i];
        const regex = new RegExp(remplazo, 'g');
        textoDesencriptado = textoDesencriptado.replace(regex, original);
    }
    return textoDesencriptado;
}


botonEncriptar.addEventListener("click", () => {
    const texto = ingresaTexto.value.toLowerCase();
    if (texto === "") {
        alert("Ingrese texto a encriptar");
    } else {
        const textoListo = encriptar(texto);
        textoEncriptado.textContent = textoListo;
        imagenBusqueda.style.display = "none";
        ingresaTexto.value = "";
        infoR.style.display = "none";
        botonCopiar.style.display = "block";
        Right.classList.add("ajustar");
        textoEncriptado.classList.add("ajustar");
    }
});

botonDesencriptar.addEventListener("click", () => {
    const texto = ingresaTexto.value.toLowerCase();
    if (texto === "") {
        alert("Ingrese texto a desencriptar");
    } else {
        const textoDesencriptado = desencriptar(texto);
        textoEncriptado.textContent = textoDesencriptado;
        imagenBusqueda.style.display = "none";
        ingresaTexto.value = "";
        infoR.style.display = "none";
        botonCopiar.style.display = "block";
        Right.classList.add("ajustar");
        textoEncriptado.classList.add("ajustar");
    }
});

botonCopiar.addEventListener("click", () => {
    const texto = textoEncriptado.textContent;
    const textarea = document.createElement("textarea");
    textarea.value = texto;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Texto copiado!");

})