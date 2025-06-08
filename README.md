# worker-handler

## Note
The [worker.js](worker.js) is a worker script that handles the processing of requests. It is designed to be redirecting root domain requests to the www subdomain's URL.

## Usage
Only set [worker.js](worker.js) as the Worker for the root domain. It will automatically redirect root domain requests to the www subdomain.

## Recommended Settings
I recommend that you create a fork of this repository or create a new one as your own repository and create your own personal Worker-Handler. This repository is my personal Worker-Handler. You can also add your own Worker-Handler repository to the Git repository under `Workers & Pages` > Settings > Build Settings so that it will be automatically deployed to Workers on Git push.

## License
[MIT](LICENSE)
