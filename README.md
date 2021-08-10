# @gaming_frame/musicapi
[![npm (scoped)](https://img.shields.io/npm/v/@gaming_frame/musicapi)](https://www.npmjs.com/package/@gaming_frame/musicapi)
[![npm](https://img.shields.io/npm/dw/@gaming_frame/musicapi)](https://www.npmjs.com/package/@gaming_frame/musicapi)
[![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@gaming_frame/musicapi)](https://www.npmjs.com/package/@gaming_frame/musicapi)


A npm package for the [Music API](https://music.catostudios.nl/) from Cato Studios

## Install

```
$ npm install @gaming_frame/musicapi
```

## Usage

```js
const musicAPI = require("@gaming_frame/musicapi");

var MusicAPI = new musicAPI();

async function doStuff() {
    let song = await MusicAPI.random();
    console.log(song);
    // {"id":72,"title":"Firecracker","url":"https:\/\/www.youtube.com\/watch?v=_AQvXd-4tD0","genre":"fantasy bard","author":"Cami-Cat (feat. Khamydrian and more)","created_at":"2021-07-22T21:40:27.000000Z","updated_at":"2021-07-22T21:40:27.000000Z"}
}
```

## Methods

`random()`

`search(string)`

`genres()`

`randomFromGenre(string)`

`add(song)` - TOKEN REQUIRED

## Example of adding a song

```js

const musicAPI = require("@gaming_frame/musicapi");

var MusicAPI = new musicAPI("secret");

async function doStuff() {

    let song = {
        title: "example",
        url: "https://www.youtube.com/watch/dQw4w9WgXcQ",
        genre: "edm",
        author: "the author"
    }

    let response = await MusicAPI.add(song);
    console.log(response);
    /*
    message: 'Successfully added music video',
    data: {
        title: 'example',
        url: 'https://www.youtube.com/watch/dQw4w9WgXcQ',
        genre: 'edm',
        author: 'the author',
        updated_at: '2021-08-10T11:28:23.000000Z',
        created_at: '2021-08-10T11:28:23.000000Z',
        id: 666
     } */
}

```

