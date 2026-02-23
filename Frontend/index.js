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
  if (!inputText.value) return


    const response = await fetch("http://localhost:3005/translate", {
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
  const data = await response.json()
  outputText.value = data.translatedText
}

// Eventos

setTimeout(() => {
  inputText.addEventListener("input", translateText)
}, 1000)
swapBtn.addEventListener("click", swapLanguages)