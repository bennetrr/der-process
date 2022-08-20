# kafka-der-process
Mein Lesetagebuch zu Franz Kafka - Der Process

## Development
Requirements: WebStorm, node.js, yarn

Install dependencies: `yarn install`

Start development server : `yarn dev`

## Production
This project is able to run in Docker.

```bash
cd src
docker build -t bennetrr/kafka-der-process .
docker run -p 3000:3000 bennetrr/kafka-der-process
```
