# MapStories (frontend)

MapStories is a location based storytelling app where editors can create related events, upload images, videos and relate them to a location so they can tell map based stories.
![App screenshot](https://github.com/karstenba/mapStories-frontend/blob/develop/example.png)

## Getting Started
To run locally:
2) Clone && `npm install` from the root file.
1) Follow the instruction for the backend [here](https://github.com/Inkala/mapStories-backend)
3) Create a public Mapbox GL token [here](https://www.mapbox.com/) and add it `./src/components/Map.js` (search for `token`). Make sure the token starts with **.pk**, (.sk is for secret tokens) and don't forget to invalidate your token afterwards!
4) Run `npm start`

## Tech Stack

* [React](reactjs.org) + [Redux](redux.js.org) = &hearts;
* [MapBox](https://www.mapbox.com/api-documentation/)
* [Material-UI](http://www.material-ui.com/)

## Future plans

* Move Mapbox GL token to the backend
* Many UX improvements
* Make responsive
* More sign-in in options


## Credits

A bit **thank you** to the original team that started this project! The original repos are to be found here:
* [frontend](https://github.com/fredpinon/map-stories-front-end)
* [backend](https://github.com/isabellachen/map-stories-backend)

## Contributors

Pull requests are welcome. By participating in this project, you agree to abide by the [thoughtbot code of conduct](https://thoughtbot.com/open-source-code-of-conduct)

Fork, then clone the repository. Push to your fork and submit a pull request.

## License

'MapStories' is licensed under the [MIT](http://www.opensource.org/licenses/mit-license.php) license.
