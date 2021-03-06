# Wudojo - Fun Fun Function lessons

Wudojo is an app for learning JS on your own. It uses:

- **Webpack** for bundling and auto-reloading the browser
- **ESLINT** for linting your JS
- **ES6** cuz that's where we're at

## Description

I'm using Wudojo to practice the lessons from the awesome webcast series, [FunFunFunction](https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q) by Mattias Petter Johansson.

Code Lessons:

- Higher order functions - part 1
- Map
- Reduce
- ES6 Destructuring
- Moar Reduce
- Closures
- Currying
- Recursion
- Promises
- Factory functions
- Composition over inheritance
- Unit testing (i might include this one)

## Usage

`npm run start 1`

This will launch the FIRST js file in the `js` directory in Chrome Canary.

`npm run start 2`

You can change which file opens in the `js` directory by adding a number to the start command. So, the above command would open the 2nd .js file in the `js` directory. This is great because you can dump a bunch of js files into the `js` directory and you can run them without having to type their name.

## Data

Every time you run `npm run start 1` the `file-list.js` file will be updated with an array of the .js file name in the `js` directory, and exported as a module. So the number you specify in the start command refers to the index of the file you want to run.

## LINT

Wudojo uses ESLINT. It is configured to use ESLINT's [standard](https://github.com/feross/eslint-config-standard) configuration.
