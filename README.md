# MapStories (frontend)

MapStories is a location based storytelling app where editors can create map based stories.
![App screenshot](https://github.com/karstenba/mapStories-frontend/blob/develop/example.png)

## Getting Started
To run locally:
1) Clone and start the backend [https://github.com/karstenba/mapStories-backend](https://github.com/karstenba/mapStories-backend)
2) Clone && `npm install`
3) Since the mapboxgl token still has to be moved to the backend, you can create a temporary token and add it `./src/components/Map.js` (search for `token`). Invalidate your token afterwards!
4) Run `npm start`

## Tech Stack

* [React](reactjs.org) + [Redux](redux.js.org) = &hearts;

## Future plans

* Refactor all the things!
* Redesign both application and styling
* Fix and expand event attachment feature-set

## Credits

A bit **thank you** to the original team that started this project! The original repos are to found here:
* [frontend](https://github.com/fredpinon/map-stories-front-end)
* [backend](https://github.com/isabellachen/map-stories-backend)

## License

MIT