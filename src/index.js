import Post from './Post'
import './styles/style.css'
import json from './assets/json'
import webpackLogo from './assets/webpack-logo.png'

const post = new Post('Webpack Ost Title', webpackLogo );
console.log(post.toString());
console.log('JSON:', json);
