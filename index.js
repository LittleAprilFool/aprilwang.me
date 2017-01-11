var template = require('./src/homepage.pug')
var data = require('./src/homepage.json')
var style = require('./src/common.scss')

var html = template(data)

document.write(html)
