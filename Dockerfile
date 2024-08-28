FROM node:16.19.1-alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN cp .env.server .env

ENV NODE_OPTIONS="--max-old-space-size=8192"

RUN npm run build

FROM nginx:1.22.1-alpine as prod-stage

COPY --from=build-stage /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]