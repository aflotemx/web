FROM node

WORKDIR /dist

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD npm run build && npm run start
