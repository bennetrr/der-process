# kafka-der-process

Mein Lesetagebuch zu Franz Kafka - Der Process

## Development

Requirements: WebStorm, node.js, yarn

Install dependencies: `yarn install`

Start development server : `yarn dev`

## Docker

This project is able to run in Docker.

You can build the image locally:

```bash
cd src
docker build -t bennetrr/kafka-der-process .
docker run -p 3000:3000 bennetrr/kafka-der-process
```

On every push to the `main` branch the image gets automatically build.
You can run the latest stable image:

```bash
docker run -p 3000:3000 ghcr.io/bennetrr/kafka-der-process:main
```
