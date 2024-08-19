# Usa la imagen de Caddy con Alpine como base
FROM caddy:alpine

# Actualiza los paquetes e instala Node.js y npm
RUN apk update && apk add --no-cache nodejs npm

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de configuración de Node.js
COPY package*.json ./

# Instala las dependencias de Node.js
RUN npm install

# Copia el resto del código de la aplicación al contenedor
COPY . .

# Construye el proyecto de Astro
RUN npm run build

RUN cp -r dist/* /srv/

COPY Caddyfile /etc/caddy/Caddyfile
