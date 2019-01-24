FROM node

RUN mkdir -p /www/web

WORKDIR /www/web

COPY . /www/web

WORKDIR /www/web

RUN npm config set sass_binary_site=https://npm.taobao.org/mirrors/node-sass/ \
npm install --registry=https://registry.npm.taobao.org

CMD ["npm", "run", "build"]