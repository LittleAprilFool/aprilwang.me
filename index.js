import {addListeners} from './src/app.js'
import template from './src/homepage.pug'
import data from './src/homepage.json'
import style from './src/scss/common.scss'
import mixitup from 'mixitup'


let html = template({data:data})
document.querySelector("#app").innerHTML = html;
addListeners()
var mixer = mixitup('.container')