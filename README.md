# React + Vite

Este proyecto es un frontend basado en React y Vite.

## Ejecución del proyecto

### Opción 1: Usando Docker (recomendado)

1. **Construir y levantar el entorno de desarrollo:**
   ```bash
   docker-compose up --build
   ```
   Esto instalará las dependencias y levantará el servidor de desarrollo en [http://localhost:5173](http://localhost:5173).

2. **Detener el entorno:**
   Presiona `Ctrl+C` en la terminal o ejecuta:
   ```bash
   docker-compose down
   ```

### Opción 2: Sin Docker (Node.js y npm)

1. **Instala Node.js y npm** (si no los tienes ya instalados).

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Levanta el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   El frontend estará disponible en [http://localhost:5173](http://localhost:5173).

---

## Otros comandos útiles

- **Build de producción:**
  ```bash
  npm run build
  ```
- **Preview de la build:**
  ```bash
  npm run preview
  ```
- **Linting:**
  ```bash
  npm run lint
  ```



## Arquitectura del proyecto: Clean Architecture en React

Este proyecto sigue el enfoque de **Clean Architecture** adaptado a React, lo que permite un código escalable, mantenible y fácil de entender.

### ¿Cómo está organizado?
- **Por features:** Cada funcionalidad tiene su propia carpeta con toda su lógica y componentes.
- **Por capas:** Cada feature se divide en:
  - `data/`: Acceso a datos (APIs, repositorios, adaptadores)
  - `domain/`: Lógica de negocio y casos de uso
  - `presentation/`: Componentes y pantallas de UI

### Estructura de ejemplo
```
src/
  features/
    home/
      data/
      domain/
      presentation/
        components/
        screens/
  router/
    routes.js
  App.jsx
  main.jsx
```

### ¿Cómo fluye la información?
1. **UI (presentation)** pide datos o acciones a los **casos de uso (domain)**.
2. **Casos de uso (domain)** usan los **repositorios (data)** para obtener o guardar datos.
3. **Repositorios (data)** llaman a APIs o fuentes externas.
4. Los datos fluyen de vuelta hacia la UI, donde se muestran al usuario.

### Ventajas
- Escalable y mantenible
- Fácil de testear
- Cada parte del código tiene su lugar y propósito

--- 