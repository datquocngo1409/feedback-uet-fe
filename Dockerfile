FROM nginx:1.19.5-alpine
WORKDIR /app
COPY ./dist/gts-fe /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
