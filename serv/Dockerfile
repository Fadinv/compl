FROM node:14.17.6
ENV NODE_ENV=production

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install --production

EXPOSE 4000

CMD [ "node", "dist/index.js" ]