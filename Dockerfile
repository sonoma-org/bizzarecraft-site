FROM node:20-alpine3.19
RUN npm install -g @vue/cli
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN yarn install
EXPOSE 8080
CMD ['yarn', 'serve']