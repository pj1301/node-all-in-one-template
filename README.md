# Node Practice Template - ES6

>The master file in this repo contains the code for the ES6 version of the mini-app. For ES5, please clone the ES5 branch - NOTE that this does not have SCSS enabled.

This is a practice template - mostly for server side technologies. Everything will run from the server - there is no need for a separate front end. 

The 'front end' in this example is contained inside the public folder and served by including `app.use(express.static('public'))` in the server back end. It will accept vanilla JavaScript and can be used to create basic components. 

In this version, both front and back ends will accept ES6 imports. 

The front end styles should be applied via the SCSS file inside `public/assets/scss`. If you prefer, you can add new SCSS files inside that folder and import them into the `index.scss` file to ensure they are loaded. The `package.json` file has been configured to compile the SCSS before loading the server and any changes will cause the CSS file to be recompiled. 

&nbsp;

## Running Instructions
To run, use the following:

```bash
npm start
```
_This will run the SASS compiler and then a dev server command._

&nbsp;

## Development
For server side code, add to `server.js` inside the server folder.

For client side code, add to the `index.js` file inside the public folder.

&nbsp;

## Setup
To set this up in the first place with ES6 syntax, first use npm init to create the `package.json` file. While running pnpm, add the following packages:

```bash
pnpm i express @babel/core @babel/register @babel/preset-env
```
_You can add in any packages you want to include (morgan, debug)._

Inside this specify the `main` file as `start.js` - for this example we've included this file inside the server folder, but this can be in the root directory, or the `src` directory of your node project.

Inside the `main.js` file include the following:

```js
require('@babel/register')({
  presets: ['@babel/preset-env']
});

module.exports = require('server.js');
```
_Server can be index or app if that's what you call your root file in node projects._

That's it! Now you can use ES6 syntax in both the backend and the front end code.

&nbsp;

## Notes
Debug won't work in this system, I'm sure there's a way, but I found it simpler to just remove it and go back to console.log.

&nbsp;

## Author

**pj1031**