# Use a imagem oficial do Node.js como base
FROM node:18-alpine as build

# Configure o diretório de trabalho no contêiner
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# Copie o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install
# RUN npm ci --silent

# Copie os arquivos do aplicativo para o diretório de trabalho
COPY . ./

# Construa a aplicação React
RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
