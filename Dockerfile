FROM node:carbon-alpine
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 6000

CMD [ "npm", "start" ]
