FROM node:20-alpine3.19

WORKDIR /app

COPY ./package.json /package.json
RUN npm install --no-lockfile

COPY . .
EXPOSE 8080
RUN npm run build
RUN npm install -g serve