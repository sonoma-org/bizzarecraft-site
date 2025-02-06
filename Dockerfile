FROM node:20-alpine3.19
RUN npm install -g @vue/cli
WORKDIR /app
COPY . .
COPY package*.json ./
RUN yarn install
EXPOSE 8080
CMD ['yarn', 'serve']