from node:21-alpine3.17

WORKDIR /karan

COPY backend backend

WORKDIR backend

RUN npm install

RUN npm install -g nodemon

EXPOSE 3001

CMD ["npm", "start"]
