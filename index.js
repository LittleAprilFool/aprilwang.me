import {addListeners, scrollTo, loadProject, closeProject} from './src/app.js'
import template from './src/homepage.pug'
import data from './src/homepage.json'
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
    console.log("scroll to Page " + id)
    console.log("home!!")
    closeProject()
  })
  
  R.route('/page', function(id){
    scrollTo(id.slice(2))
    closeProject()
  })
  
  R.route('/project', function(id){
    loadProject(id)
  })
}, 500)

