from node:21-alpine3.17

WORKDIR /karan

COPY frontend frontend

WORKDIR frontend

RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev"]
