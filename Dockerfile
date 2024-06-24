FROM node:20

WORKDIR /app

COPY package.json /app

RUN npm i -g pnpm@7
RUN pnpm install

COPY . /app

CMD ["pnpm", "start:dev"]
