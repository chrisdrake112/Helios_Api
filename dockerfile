FROM node:9-slim
WORKDIR /heliosapi
COPY package.json /heliosapi/
RUN npm install
COPY . /heliosapi/
CMD ["npm","start"]