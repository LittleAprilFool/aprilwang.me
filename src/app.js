//require('smoothscroll-polyfill').polyfill()
import Typing from './typing.js';
var page = 0;
var onScroll = false;
const pageMin = 0;
const pageMax = 3;
var typed = false;
var projectOpen = false;

function openNav() {
  var toggle= document.querySelector('.container')
  if(toggle.classList.contains('checked'))
    toggle.classList.remove('checked')
  else toggle.classList.add('checked')
}

function closeNav() {
  var toggle = document.querySelector('.container')
  if(toggle.classList.contains('checked'))
    toggle.classList.remove('checked')
}
function typingEnd() {
  setTimeout(function(){
    var rest = document.querySelector('#rest');
    rest.style.opacity = "1";
  }, 500)
}

export function scrollTo(id) {
  if((id<pageMin)|(id >pageMax))
    return;
  var nextSection = document.querySelector('#sec'+id)
  nextSection.scrollIntoView({behavior:'smooth'})
  var preDot = document.querySelector('.current')
  if (preDot) preDot.classList.remove('current')
  page = id;
  console.log(page);
  // console.log(document.documentElement.scrollTop);
  var theDot = document.querySelector('#nav'+id)
  theDot.classList.add('current')
  if(page == 3 && typed == false) {
    var typing = new Typing({
      source: document.getElementById('source'),
      output: document.getElementById('output'),
      delay: 60,
      done: function() {typingEnd()}
    })
    typing.start();
    typed = true;
  }
//  closeNav()
}

function resetOnScroll() {
  onScroll = false;
}

function scrollFunc(e) {
  if (projectOpen)
  return
  e = e || window.event;
  if(!onScroll) {
    var delta = page-Math.sign(e.wheelDelta)
    if((delta < pageMin)||(delta > pageMax)) 
    return
    onScroll = true;
    location.hash='/page?id'+delta;
    setTimeout(resetOnScroll,1000);
  }
  if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;
}


function drawCat(){
  var meow = document.querySelector("#meow");
  meow.style.left = Math.floor(Math.random() * 100).toString() + '%';
  meow.style.top = Math.floor(Math.random() * 100).toString() + '%';
  meow.style.color = "#bfbfbf";
  setTimeout(function(){meow.style.color = "white"}, 500);
}

export function closeProject() {
  if(!projectOpen) return
  projectOpen = false
  document.querySelector('.project-detail').classList.remove('show')
  location.hash ='/page?id2'
}

export function addListeners() {
  // window.onload = function(){
  //   setTimeout(function(){
  //     scrollTo(0)
  //   }, 200)
  // }
  document.querySelector('#enter').addEventListener('click', function(){location.hash='/page?id1'})
  document.querySelector('#nav0').addEventListener('click', function(){location.hash='/page?id0'})
  document.querySelector('#nav1').addEventListener('click', function(){location.hash='/page?id1'})
  document.querySelector('#nav2').addEventListener('click', function(){location.hash='/page?id2'})
  document.querySelector('#nav3').addEventListener('click', function(){location.hash='/page?id3'})
  document.querySelector('#cat').addEventListener('click', function(){location.hash='/page?id4'});
  document.querySelector('.project-detail-close').addEventListener('click', function(){closeProject()})
  var projectItem = document.querySelectorAll('.project-list-item')
  projectItem.forEach(function(element) {
    element.addEventListener('click', function(){location.hash = "/project?" + this.id})
  }, this);
  document.addEventListener('onmousewheel',scrollFunc, false);
  // document.addEventListener('DOMContentLoaded', function(){document.documentElement.scrollTop=0}, false);
  window.onmousewheel = document.onmousewheel = scrollFunc;
}

export function loadProject(id) {
  var detail = document.querySelector('.project-detail')
  if(!projectOpen)
    detail.classList.add('show')
    projectOpen = true;
}