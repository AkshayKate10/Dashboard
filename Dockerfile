FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 8000 5000

CMD ["sh", "-c", "serve -s build -l 8000 & npm run server"]
