FROM node

ENV HOME=/home/app

COPY . $HOME/code

WORKDIR $HOME/code
RUN yarn install
RUN yarn build

EXPOSE 5000
EXPOSE 3001

CMD [ "yarn", "serve"]
