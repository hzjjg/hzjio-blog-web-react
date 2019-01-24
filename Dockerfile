FROM node

RUN mkdir -p /www/web

WORKDIR /www/web

COPY . /www/web

WORKDIR /www/web

RUN npm install --registry=https://registry.npm.taobao.org

CMD ["npm", "run", "build"]