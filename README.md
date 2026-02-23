# 🌍 Translator App

Aplicación web fullstack que permite traducir texto en tiempo real entre Español e Inglés.

Este proyecto fue desarrollado utilizando **JavaScript Vanilla** para el frontend y **Node.js + Express** para el backend, integrando la **API de traducción MyMemory**.

---

## 🚀 Demo

🔗 Agrega aquí el link de producción  
Ejemplo: https://tu-app.onrender.com

---

## 📌 Descripción

Translator App permite a los usuarios traducir texto de manera instantánea entre Español e Inglés mediante una arquitectura frontend-backend desacoplada.

### Características principales

- Traducción en tiempo real mientras el usuario escribe
- Implementación de **debounce** para evitar peticiones innecesarias
- Funcionalidad de intercambio de idiomas
- Diseño completamente responsive (mobile-first)
- Backend desplegado en la nube
- Separación clara entre frontend y backend

---

## 🛠 Tecnologías utilizadas

### Frontend
- HTML5
- TailwindCSS
- JavaScript Vanilla
- Fetch API

### Backend
- Node.js
- Express.js
- API de traducción MyMemory
- Deploy en Render

---

## ⚙️ Aspectos técnicos destacados

- Implementación de lógica **debounce** para optimizar rendimiento y reducir llamadas a la API
- Uso de `async/await` para manejo de asincronía
- Integración con API REST externa
- Manejo adecuado de errores HTTP
- Optimización para dispositivos móviles (prevención de zoom automático en inputs en iOS)
- Estructura de proyecto limpia y organizada
- Buenas prácticas con Git y control de versiones

---

## 🧠 Aprendizajes aplicados

Durante el desarrollo de este proyecto se trabajó en:

- Construcción de una aplicación fullstack desde cero
- Conexión entre frontend y backend
- Consumo de APIs externas
- Optimización de rendimiento en aplicaciones web
- Resolución de problemas reales en producción (CORS, múltiples requests, cold starts)
- Escritura de código limpio y mantenible

---

## 📂 Estructura del proyecto
/frontend
├── index.html
├── index.js

/backend
├── index.js
└── app.js
```

---


## 🔧 Instalación local

1. Clonar el repositorio
git clone https://github.com/Elitaxh06/translate.git

2. Instalar dependencias del backend
npm install


3. Ejecutar el servidor
npm start


4. Abrir `index.html` en el navegador

---

## 📈 Mejoras futuras

- Soporte para más idiomas
- Historial de traducciones
- Detección automática de idioma

---

## 👨‍💻 Autor

Elias  
Desarrollador Fullstack
