FROM node:14.15.4-alpine3.12

WORKDIR /usr/node/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]