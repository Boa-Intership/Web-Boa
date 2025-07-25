# Dockerfile para desarrollo de React+Vite
FROM node:20-alpine

# Crear directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json si existe
COPY package.json ./

# Instalar todas las dependencias declaradas en package-lock.json
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto por defecto de Vite
EXPOSE 5173

# Comando por defecto: levantar Vite en modo desarrollo
CMD ["npm", "run", "dev", "--", "--host"] 