import {addListeners} from './src/app.js'
import template from './src/homepage.pug'
import data from './src/homepage.json'
import style from './src/scss/common.scss'

let html = template({data:data})
document.write(html)
addListeners()