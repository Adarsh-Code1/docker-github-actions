FROM node:24

WORKDIR /app

COPY server.js .

EXPOSE 5004

CMD ["node", "server.js"]
