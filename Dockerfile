# DOCKER-VERSION 1.1.2
FROM    ubuntu:latest

# Install Node.js and npm
RUN    apt-get -y update
RUN    apt-get -y install nodejs
RUN    apt-get -y install npm
RUN    apt-get -y install nodejs-legacy
# Bundle app source
ADD . /src
# Install app dependencies
RUN cd /src; npm install

EXPOSE 3000 
# CMD ["npm start"]
