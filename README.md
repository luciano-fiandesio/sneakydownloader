# Sneaky Downloader

Need to download something to get the job done, but the firewall doesn't cooperate?

Sneaky downloader is a self hosted app, meant to be run as a Docker image.

## Installation

### using docker

    git clone https://github.com/luciano-fiandesio/sneakydownloader.git && cd sneakydownloader

    sudo docker build -t <your username>/sneakydownloader .

    sudo docker run -p <port>:3000 -d -i <your username>/sneakydownloader /bin/sh -c 'cd /src && npm start'

### express

    git clone https://github.com/luciano-fiandesio/sneakydownloader.git && cd sneakydownloader

    npm start

## usage

paste the url of the resource to download into the text box, click 'download'

the downloaded file's name will appear, click on the link and enjoy.

Note that the file will be zipped and base64-encoded.

On OSX:

    unzip downloaded_by_sneaky.jpg.zip
    base64 --decode downloaded_by_sneaky.jpg.b64 > downloaded_by_sneaky.jpg

## disclaimer

This thing has been hacked together in 10 minutes. It doesn't provide any form of security and the code is not tested thoroughly.
