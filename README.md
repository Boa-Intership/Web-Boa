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
