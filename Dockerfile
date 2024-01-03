FROM node:16.20.2-alpine as build
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

FROM nginx:1.22-alpine
COPY --from=build /app/build /var/www/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]