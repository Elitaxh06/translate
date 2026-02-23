let from = "es"
let to = "en"

const esBtn = document.getElementById("esBtn")
const enBtn = document.getElementById("enBtn")
const swapBtn = document.getElementById("swapBtn")
// const translateBtn = document.getElementById("translateBtn")

const inputText = document.getElementById("inputText")
const outputText = document.getElementById("outputText")

// Inicializar textos
updateUI()

function updateUI() {
  esBtn.textContent = from === "es" ? "Español" : "English"
  enBtn.textContent = to === "en" ? "English" : "Español"

  // Estilos activos
  esBtn.className = "px-4 py-2 rounded-lg font-semibold transition"
  enBtn.className = "px-4 py-2 rounded-lg font-semibold transition"

  if (from === "es") {
    esBtn.classList.add("bg-indigo-600", "text-white")
    enBtn.classList.add("bg-gray-200")
  } else {
    esBtn.classList.add("bg-gray-200")
    enBtn.classList.add("bg-indigo-600", "text-white")
  }
}

// Intercambiar idiomas
function swapLanguages() {
  const temp = from
  from = to
  to = temp

  // Intercambiar textos
  const tempText = inputText.value
  inputText.value = outputText.value
  outputText.value = tempText

  updateUI()
}

// Traducir
async function translateText() {
  const text = inputText.value.trim()
  if (!inputText.value) return

  try{
    const response = await fetch(
      // "https://translate-d29q.onrender.com/translate" 
        "http://localhost:3005/translate"
      , {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: inputText.value,
        from,
        to
      })
    })
    if (!response.ok) throw new Error("Error en la petición")

    const data = await response.json()
    outputText.value = data.translatedText

  }catch(error){
    return
  }    

}

// Eventos

let timeoutId

inputText.addEventListener("input", () => {
  clearTimeout(timeoutId)

  timeoutId = setTimeout(() => {
    translateText()

  }, 500)
})



swapBtn.addEventListener("click", swapLanguages)