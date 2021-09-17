FROM node:latest
WORKDIR /heliosapi
COPY package.json /heliosapi/
RUN npm install
COPY . /heliosapi/
EXPOSE 443
CMD ["npm","start"]