import {addListeners, loadHome, loadPublication,loadProject, loadMore} from './src/app.js'
import template from './src/homepage.pug'
import data from './src/homepage.js'
import style from './src/scss/common.scss'
import mixitup from 'mixitup'
import Router from './src/router.js';

var R = new Router();
let html = template({data:data})
document.querySelector("#app").innerHTML = html;
setTimeout(function(){
  addListeners()
  R.init();
  var mixer = mixitup('.container')
  
  R.route('/', function(id){
    console.log("home!!")
  })
  
  R.route('/project', function(id){
    loadProject(id)
  })

  R.route('/home', function(id){
    loadHome()
  })

  R.route('/publication', function(id){
    loadPublication()
  })

  R.route('/more', function(id){
    loadMore()
  })
}, 500)

