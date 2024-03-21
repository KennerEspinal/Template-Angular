#!/bin/bash

# Instalación de Node.js y npm si no están instalados
if ! [ -x "$(command -v node)" ]; then
  echo 'Node.js no está instalado. Instalando Node.js y npm...'
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt-get install -y nodejs
fi

# Instalación de pnpm si no está instalado
if ! [ -x "$(command -v pnpm)" ]; then
  echo 'pnpm no está instalado. Instalando pnpm...'
  npm install -g pnpm
fi

# Instalación de Angular CLI si no está instalado
if ! [ -x "$(command -v ng)" ]; then
  echo 'Angular CLI no está instalado. Instalando Angular CLI...'
  npm install -g @angular/cli
fi

# Instalación de dependencias del proyecto Angular
echo 'Instalando dependencias del proyecto Angular...'
pnpm install

# Ejecución de la aplicación Angular en modo de desarrollo
echo 'Iniciando la aplicación Angular en modo de desarrollo...'
ng serve
