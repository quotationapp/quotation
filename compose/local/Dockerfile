FROM node

ENV HOME /home/app

COPY . $HOME/

WORKDIR $HOME
RUN yarn install

EXPOSE 3000
EXPOSE 3001

CMD [ "yarn", "start"]
