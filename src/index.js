import Post from './Post'
import './styles/style.css'
import json from './assets/json'
import webpackLogo from './assets/webpack-logo.png'
import xml from './assets/data.xml' 
import csv from './assets/data.csv'

const post = new Post('Webpack Ost Title', webpackLogo);
console.log(post.toString());
console.log('JSON:', json);
console.log('xml: ', xml);
console.log('csv: ', csv);
