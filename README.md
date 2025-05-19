# 🎭 Playwright + TypeScript Demo

¡Bienvenido/a! Este repositorio es una guía paso a paso para aprender automatización de pruebas E2E usando **Playwright** con **TypeScript**.  
El avance se realiza por ramas, cada una agregando nuevas prácticas y mejoras al proyecto.

---

## 🚦 Flujo de aprendizaje por ramas

- **`main`**  
  🏁 Punto de partida. Aquí encontrarás la configuración inicial del proyecto y los primeros ajustes para trabajar con Playwright y TypeScript.

- **`step-1`**  
  🧩 Se definen los primeros *locators* y se escribe un test básico de login, interactuando directamente con los selectores en el test.

- **`step-2`**  
  🏗️ Se implementa el patrón **Page Object Model** (POM) para mejorar la organización y reutilización del código de automatización.

---

## 📦 Instalación

1. Clona el repositorio
2. Instala las dependencias
```bash
   npm install
```
3. Lanza los tests con 
```bash
   npx playwright test
```
---
## 🚀 ¿Cómo avanzar?
Para seguir el aprendizaje, cambia de rama según el nivel que quieras explorar:



1. Clona el repositorio

```bash
git switch step-1    # Test de login con locators
git switch step-2    # Uso de Page Object Model
```
---
## 📁 Estructura del proyecto


```
AutomationFactoria/
├── pages/                # Page Objects (desde step-2)
├── tests/                # Archivos de pruebas
├── playwright.config.ts  # Configuración de Playwright
├── package.json          # Project dependencies and scripts
```
---

## 💡 Sugerencias
Revisa cada rama para ver los cambios y mejoras progresivas.
Usa los comentarios en el código para entender el propósito de cada sección.

## ¡Feliz automatización! 🚀