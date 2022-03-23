// console.log('Hello World')

///////////////////////////////////////////////////
// Uncaught ReferenceError: require is not defined
// const generateJoke = require('./generateJoke')

// Uncaught SyntaxError: Cannot use import statement outside a module
// import generateJoke from './generateJoke'

// console.log(generateJoke())

///////////////////////////////////////////////////
// import { v4 as uuidv4 } from 'uuid'

// console.log(uuidv4())

///////////////////////////////////////////////////
// npm run build
// => ERROR in ./src/styles/main.scss 1:0
// Module parse failed: Unexpected character '@' (1:0)
// You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. 
// See https://webpack.js.org/concepts#loaders
// => Add 'module' to 'webpack.config.js'
import './styles/main.scss'

///////////////////////////////////////////////////
// npm run build
// => ERROR in ./src/index.js
// Module build failed (from ./node_modules/babel-loader/lib/index.js):
// Error: Unknown option: .preset. 
// Check out https://babeljs.io/docs/en/babel-core/#options for more information about options.
// => Add 'module' to 'webpack.config.js'
import laughing from './assets/laughing.svg'

const laughImg = document.getElementById('laughImg')
laughImg.src = laughing
///////////////////////////////////////////////////
import generateJoke from './generateJoke'

generateJoke()

// document.getElementById('jokeBtn').onclick = generateJoke
// OR
document.getElementById('jokeBtn').addEventListener('click', generateJoke)