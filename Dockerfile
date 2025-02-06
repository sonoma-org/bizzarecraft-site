FROM node:20-alpine3.19

WORKDIR /app

COPY ./package.json /package.json
RUN yarn install --no-lockfile

COPY . .
EXPOSE 8080
CMD ['yarn', 'serve']