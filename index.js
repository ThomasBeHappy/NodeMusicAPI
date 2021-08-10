const got = require('got');

module.exports = MusicAPI;


function MusicAPI(token = "") {
    this.token = token;
}

MusicAPI.prototype.random = async function() {
    const data = await got.get("https://music.catostudios.nl/api/music").json();
    return data;
}

MusicAPI.prototype.search = async function(search) {
    const data = await got.get("https://music.catostudios.nl/api/music/search/" + search).json();
    return data;
}

MusicAPI.prototype.genres = async function() {
    const data = await got.get("https://music.catostudios.nl/api/music/genres").json();
    return data;
}

MusicAPI.prototype.randomFromGenre = async function(genre) {
    const data = await got.get("https://music.catostudios.nl/api/music/genre/" + genre).json();
    return data;
}

/**
 * @description Add a song to the API, song requires title, url, genre and author.
 * @param {Object} song 
 * @returns JSON Object
 */
MusicAPI.prototype.add = async function(song) {
    if (!song.title || !song.url || !song.genre || !song.author) throw "Song doesn't have the required parameters.";

    
    // Song needs at least: title, url, genre
    // token is done as a bearer token but that's just setting headers
    // if you make the check for title, url and genre I will do the request XD
    
    const data = await got.post("https://music.catostudios.nl/api/music/add", {
        headers: {
            "Authorization": "Bearer " + this.token,
        },
        form: {
            title: song.title,
            url: song.url,
            genre: song.genre,
            author: song.author,
        }
    }).json();
    return data;
}