import {loadHome, loadPublication, loadCV, loadPage, loadSection} from './src/app.js'
import template from './src/homepage.pug'
import data from './src/homepage.js'
import style from './src/scss/common.scss'
import mixitup from 'mixitup'
import Router from './src/router.js';

var R = new Router();
let html = template({data:data})
document.querySelector("#app").innerHTML = html;
setTimeout(function(){
  // addListeners()
  R.init();
  
  R.route('/', function(id){
    loadHome()
  })
  

  R.route('/cv', function(){
    loadSection('.cv');
  })
  R.route('/home', function(id){
    loadHome()
  })

  R.route('/publication', function(id){
     loadSection('.publication')
  })

  R.route('/join', function(id){
    loadSection('.join')
  })

  R.route('/peach', function(id){
    loadSection('.peach')
  })

  R.route('/teaching', function(id){
    loadSection('.teaching')
  })

}, 500)

