# Template Angular Creado Por KennerEspinalDev

_Sistema desarrollado por KennerDev_

## Comenzando 🚀

### Pre-requisitos 📋

_Para poder inicializar el sistema se requiere lo siguiente :_

```
1. Git.
2. Docker & Docker Compose.
3. Angular + TailwindCSS = Flowbite.
4. IntelliJ (Editor de Codigo).
```

### Clonar el Repositorio 🔧
```
git clone https://github.com/KennerEspinal/Template-Angular.git
```

## Configuring the Dockerfile
-	Dockerfile.prod
```sh
# Usamos la imagen oficial de Node.js como base
FROM node:20-alpine AS builder

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos el archivo package.json y package-lock.json (o yarn.lock si estás usando Yarn)
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto de los archivos de la aplicación
COPY . .

# Construimos la aplicación Angular
RUN npm run build --prod

# Configuramos una imagen ligera de Nginx para servir la aplicación construida
FROM nginx:alpine AS production

# Copiamos los archivos de la aplicación Angular construida desde la etapa anterior
COPY --from=builder /app/dist/template/* /usr/share/nginx/html/

# Exponemos el puerto 80 para que la aplicación Angular sea accesible
EXPOSE 80

# Comando de inicio para Nginx
CMD ["nginx", "-g", "daemon off;"]

```

-	Dockerfile.dev
```sh
# Fase de construcción
FROM node:20-alpine AS builder

# Instalar pnpm
RUN npm install -g pnpm

# Establecer el directorio de trabajo en la aplicación
WORKDIR /app

# Copiar el contenido actual (excepto lo que esté en el archivo .dockerignore)
COPY . .

# Instalación de las dependencias de node con pnpm
RUN pnpm install

# Expone el puerto para el desarrollo (puerto de la aplicación Angular)
EXPOSE 4200

# Comando para iniciar la aplicación en modo de desarrollo
CMD ["pnpm", "start"]


```
## Distribution using Docker
-1. Build services with Docker:
```sh
docker compose up
```

--The app be available on http://localhost:4200/ and http://localhost/


## Autor ✒️

* **Kenner Espinal**

## Expresiones de Gratitud 🎁

